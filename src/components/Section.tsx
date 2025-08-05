import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  reverse?: boolean;
};

export default function Section({
  title,
  imageSrc,
  imageAlt,
  children,
  reverse,
}: Props) {
  return (
    <section className="py-12">
      <div
        className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        <div>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
          <div className="prose prose-gray max-w-none">{children}</div>
        </div>
      </div>
    </section>
  );
}
