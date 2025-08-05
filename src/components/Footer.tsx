import ContactForm from "@/components/ContactForm";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-16 mt-24">
      <h2 className="text-center text-2xl font-semibold mb-8">Get in Touch</h2>
      <ContactForm />
      <p className="text-center text-sm text-gray-500 mt-12">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
