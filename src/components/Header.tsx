import Link from "next/link";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          Kraig Britton
        </Link>
        <nav className="flex gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
