"use client"

import {
  FileText,
  Wrench,
  KeyRound,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react"
import { AnimatedSection, AnimatedChild } from "@/components/animated-section"

const services = [
  {
    icon: FileText,
    title: "Specification Assistance",
    description:
      "We review your site plans to identify correct hardware for each door type — fire-rated, acoustic, high-security — ensuring full code compliance.",
    features: [
      "Ironmongery schedule preparation",
      "Building code compliance review",
      "Component compatibility analysis",
    ],
  },
  {
    icon: KeyRound,
    title: "Master Key Design",
    description:
      "Custom design and implementation of complex master-keyed cylinders and grand master-keyed systems for institutional and commercial clients.",
    features: [
      "Access hierarchy planning",
      "ABLOY & Union cylinders",
      "Hospital & school systems",
    ],
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description:
      "Precision fitting of high-security locks, automatic door closers, and digital access systems to maintain product integrity and warranty.",
    features: [
      "Certified installation teams",
      "Post-installation support",
      "Key handover services",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Technical Consultancy",
    description:
      "End-to-end advisory for architects and developers on hardware selection, security planning, and access control system integration.",
    features: [
      "Project scoping & budgeting",
      "Product selection guidance",
      "Ongoing maintenance advisory",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Professional Services
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Beyond Supply.{" "}
              <span className="text-muted-foreground">
                Complete Technical Partnership.
              </span>
            </span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We don{"'"}t just supply hardware. We provide the technical
            expertise architects and developers need to specify, install, and
            maintain precision building systems.
          </p>
        </AnimatedSection>

        <AnimatedSection
          variant="stagger"
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {services.map((service) => (
            <AnimatedChild key={service.title}>
              <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <ArrowRight className="h-3 w-3 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedChild>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
