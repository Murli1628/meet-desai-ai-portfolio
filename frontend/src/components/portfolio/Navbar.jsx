import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { CONTACT } from "../../siteConfig";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "AI Toolkit", href: "#toolkit" },
  { label: "How I Work", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-navbar"
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          data-testid="nav-logo"
          className="font-display text-lg font-bold tracking-tight text-slate-900"
        >
          Meet Desai
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT.resumeUrl || "#contact"}
            data-testid="nav-resume-button"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-700"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT.resumeUrl || "#contact"}
              data-testid="nav-mobile-resume-button"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
            >
              <FileText className="h-3.5 w-3.5" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
