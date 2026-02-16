import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Kraig Britton",
};

const contacts = [
  {
    label: "Email",
    href: "mailto:kraig@kraigbritton.com",
    display: "kraig@kraigbritton.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/kraigbritton",
    display: "github.com/kraigbritton",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kraigbritton",
    display: "linkedin.com/in/kraigbritton",
  },
];

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Contact</h1>
      <p className="mt-4 text-gray-600">
        Feel free to reach out — I&apos;m always happy to connect.
      </p>
      <ul className="mt-8 space-y-4">
        {contacts.map(({ label, href, display }) => (
          <li key={label}>
            <span className="font-medium text-gray-900">{label}: </span>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {display}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
