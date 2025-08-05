"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(res.ok ? "success" : "error");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Name
        </label>
        <input
          required
          id="name"
          name="name"
          type="text"
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          required
          id="email"
          name="email"
          type="email"
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          className="textarea textarea-bordered w-full"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "success"}
      >
        {status === "success" ? "Sent ✓" : "Send"}
      </button>
      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong – please try again.
        </p>
      )}
    </form>
  );
}
