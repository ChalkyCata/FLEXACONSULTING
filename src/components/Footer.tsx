import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-6 w-6" />
          <span className="text-sm text-muted">
            &copy; {year} Flexa Consulting. All rights reserved.
          </span>
        </div>
        <div className="flex flex-col gap-1 text-sm text-muted sm:items-end">
          <a href="mailto:marketing@flexaconsulting.co.uk" className="hover:text-gold-light">
            marketing@flexaconsulting.co.uk
          </a>
          <a href="tel:+447305890935" className="hover:text-gold-light">
            07305 890935
          </a>
        </div>
      </div>
    </footer>
  );
}
