const services = [
  {
    title: "IT Support Freelancing",
    description:
      "Hands-on freelance IT support for small businesses and individuals — troubleshooting, setup, maintenance, and remote assistance when you need it, without the overhead of a full-time hire.",
    points: [
      "Remote & on-site troubleshooting",
      "Systems setup and maintenance",
      "Ad-hoc and ongoing support contracts",
    ],
  },
  {
    title: "Social Media Management",
    description:
      "Day-to-day management of social accounts for individuals and small brands — scheduling, engagement, and growth handled for you. Scope and platforms are tailored per client, so get in touch to discuss what you need.",
    points: [
      "Account management & scheduling",
      "Audience growth & engagement",
      "Flexible, client-specific arrangements",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(212,175,90,0.12), transparent 55%), radial-gradient(circle at 80% 0%, rgba(212,175,90,0.08), transparent 45%)",
          }}
        />
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Self-employed &middot; Flexible &middot; Client-first
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Practical support,{" "}
            <span className="gold-gradient-text">on your terms.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Flexa Consulting provides freelance IT support and social media
            management for individuals and small businesses — straightforward,
            responsive, and shaped around what you actually need.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-gold px-8 py-3 text-center text-sm font-semibold text-background transition-colors hover:bg-gold-light sm:w-auto"
            >
              Get in touch
            </a>
            <a
              href="#services"
              className="w-full rounded-full border border-border px-8 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-gold/60 sm:w-auto"
            >
              View services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Services
            </h2>
            <p className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Two areas of focus, one point of contact
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-border bg-surface-2 p-8"
              >
                <h3 className="text-xl font-semibold text-gold-light">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-foreground/90">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              About
            </h2>
            <p className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A self-employed consultancy built around flexibility
            </p>
          </div>
          <p className="text-base leading-relaxed text-muted">
            Flexa Consulting is a self-employed consultancy offering freelance
            IT support and social media management. Working directly with
            each client keeps things simple: clear communication, no
            unnecessary layers, and support that adapts to your schedule and
            requirements rather than the other way around.
          </p>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Contact
          </h2>
          <p className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s talk about what you need
          </p>
          <p className="mt-4 text-base text-muted">
            Reach out by phone or email and we&apos;ll get back to you to
            discuss the details.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href="mailto:marketing@flexaconsulting.co.uk"
              className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-gold-light"
            >
              marketing@flexaconsulting.co.uk
            </a>
            <a
              href="tel:+447305890935"
              className="rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold/60"
            >
              07305 890935
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
