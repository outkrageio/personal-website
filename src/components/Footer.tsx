import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/kraigbritton", label: "GitHub" },
  { href: "https://linkedin.com/in/kraigbritton", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Kraig Britton
        </p>
        <div className="flex gap-4">
          {socialLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
