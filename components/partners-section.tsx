"use client"

import { useRef, useState } from "react"
import { AnimatedSection } from "@/components/animated-section"

const partners = [
  { name: "Assa Abloy", role: "Global Access Solutions Partner", initials: "AA" },
  { name: "Gelmar", role: "Interior Hardware & Fittings", initials: "G" },
  { name: "Hafele", role: "Architectural Hardware", initials: "H" },
  { name: "Geze", role: "Door Control Systems", initials: "GZ" },
  { name: "Dormakaba", role: "Security & Access", initials: "DK" },
  { name: "Yale", role: "Locks & Security", initials: "Y" },
]

function PartnerCard({ partner }: { partner: (typeof partners)[number] }) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative mx-4 flex h-28 w-48 flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-card"
      style={{
        transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        transform: isHovered ? "scale(1.08) translateY(-4px)" : "scale(1) translateY(0)",
        boxShadow: isHovered
          ? "0 20px 40px -12px hsl(var(--primary) / 0.15), 0 0 0 1px hsl(var(--primary) / 0.2)"
          : "0 1px 3px 0 rgb(0 0 0 / 0.04)",
      }}
    >
      {/* Radial glow that follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          background: `radial-gradient(circle 120px at ${mousePos.x}% ${mousePos.y}%, hsl(var(--primary) / 0.1), transparent 70%)`,
        }}
      />

      {/* Default state: initials */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-center"
        style={{
          opacity: isHovered ? 0 : 1,
          transform: isHovered ? "scale(0.8)" : "scale(1)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}
      >
        <span className="font-heading text-3xl font-bold tracking-tight text-muted-foreground/60">
          {partner.initials}
        </span>
      </div>

      {/* Hover state: name + role */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-1 px-3"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <span className="font-heading text-sm font-bold text-primary">
          {partner.name}
        </span>
        <span className="text-center text-[10px] leading-tight text-muted-foreground">
          {partner.role}
        </span>
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 z-10 h-0.5 bg-primary"
        style={{
          width: isHovered ? "100%" : "0%",
          transition: "width 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  )
}

export function PartnersSection() {
  const [isPaused, setIsPaused] = useState(false)

  // We duplicate the list to create the seamless infinite loop
  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section className="border-y border-border bg-card py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection variant="fade-in" className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted Partnerships with Industry Leaders
          </p>
        </AnimatedSection>
      </div>

      {/* Marquee track */}
      <div
        className="relative mt-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-card to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-card to-transparent" />

        <div
          className="flex w-max items-center"
          style={{
            animation: "marquee-scroll 30s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {duplicatedPartners.map((partner, i) => (
            <PartnerCard key={`${partner.name}-${i}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  )
}
