import Section from "@/components/Section";
import Image from "next/image";

export const metadata = { title: "About Me" };

export default function AboutPage() {
  return (
    <>
      <h1 className="sr-only">About Me</h1>
      <Section
        title="My Journey"
        imageSrc="/images/about-journey.jpg"
        imageAlt="Therapist practicing yoga outdoors"
      >
        <p>
          Hello! I’m [Name], a licensed therapist and certified yoga instructor.
          I’ve spent the last decade…
        </p>
      </Section>
      {/* Add more <Section /> blocks as needed */}
    </>
  );
}
