"use client"

import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  Services: [
    { label: "Specification Assistance", href: "#services" },
    { label: "Master Key Design", href: "#services" },
    { label: "Professional Installation", href: "#services" },
    { label: "Technical Consultancy", href: "#services" },
  ],
  Products: [
    { label: "Security Access", href: "#products" },
    { label: "Door Control", href: "#products" },
    { label: "Architectural Hardware", href: "#products" },
    { label: "Gelmar Interior Range", href: "#products" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Project Portfolio", href: "#projects" },
    { label: "CIF Membership", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/340961074_1263541664300922_5971807634993858820_n-1sPhJB0uAHqsC0pUrnmNPWvILFJUMi.jpg"
                  alt="JS Hardware CC Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-foreground">
                  JS Hardware CC
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Namibia{"'"}s leading specialist in architectural ironmongery and
              high-security access solutions. Authorized Assa Abloy partner and
              CIF registered trade member.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.facebook.com/jshardwarecc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                aria-label="Visit JS Hardware on Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/jshardware07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                aria-label="Visit JS Hardware on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8zm8.95 1.45a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="group flex items-center gap-1 text-sm text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Quick */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Reach Us
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-foreground">
              <li>7 Wright Street</li>
              <li>Southern Industrial</li>
              <li>Windhoek, Namibia</li>
              <li className="mt-2 text-primary">061 238 380</li>
              <li className="text-primary">bianca@jshardwarenamibia.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} JS Hardware CC. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            P.O. Box 6957, Windhoek, Namibia
          </p>
        </div>
      </div>
    </footer>
  )
}
