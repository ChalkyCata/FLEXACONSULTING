import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-wide gold-gradient-text">
              FLEXA
            </span>
            <span className="text-[0.65rem] tracking-[0.3em] text-muted">
              CONSULTING
            </span>
          </span>
        </Link>
        <nav className="hidden gap-8 text-sm text-muted sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-gold/60 px-4 py-2 text-sm font-medium text-gold-light transition-colors hover:bg-gold/10"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
