import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-4 shadow-md">
      <nav className="container mx-auto flex gap-6 font-medium">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/yoga" className="hover:underline">
          Yoga
        </Link>
        <Link href="/therapy" className="hover:underline">
          Therapy
        </Link>
      </nav>
    </header>
  );
}
