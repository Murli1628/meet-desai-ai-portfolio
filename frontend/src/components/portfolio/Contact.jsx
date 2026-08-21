import { Mail, Linkedin, FileText, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACT, PLACEHOLDER } from "../../siteConfig";

const rows = [
  {
    icon: Mail,
    label: "Email",
    testId: "contact-email",
    value: CONTACT.email,
    placeholder: PLACEHOLDER.email,
    href: CONTACT.email ? `mailto:${CONTACT.email}` : null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    testId: "contact-linkedin",
    value: CONTACT.linkedin,
    placeholder: PLACEHOLDER.linkedin,
    href: CONTACT.linkedin || null,
  },
  {
    icon: FileText,
    label: "Resume",
    testId: "contact-resume",
    value: CONTACT.resumeUrl,
    placeholder: PLACEHOLDER.resume,
    href: CONTACT.resumeUrl || null,
  },
];

export const Contact = () => (
  <section id="contact" data-testid="contact-section" className="border-t border-slate-200 py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Contact
          </p>
          <h2
            data-testid="contact-heading"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            Let&rsquo;s Connect
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
            I am interested in AI Enablement, AI Adoption, AI Project Coordination,
            Generative AI Operations, AI Training / User Enablement, and AI Customer
            Success roles. If you are hiring for early-career AI positions, I would
            be glad to talk.
          </p>
          <p className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-500" data-testid="contact-location">
            <MapPin className="h-4 w-4 text-slate-400" />
            {CONTACT.location}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-4">
            {rows.map((row) => (
              <div
                key={row.label}
                data-testid={row.testId}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-5 transition-colors duration-200 hover:border-slate-300"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                    <row.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-900">{row.label}</span>
                </span>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.label === "Email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-700 underline-offset-4 hover:underline"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-slate-400">{row.placeholder}</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
