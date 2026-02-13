"use client"

import { Users, Award, Globe, Leaf } from "lucide-react"
import { AnimatedSection, AnimatedChild } from "@/components/animated-section"

const values = [
  {
    icon: Users,
    title: "Expert-Driven Team",
    description:
      "A lean team of fewer than ten specialists, each bringing diverse backgrounds in structural, architectural, and installation disciplines.",
  },
  {
    icon: Award,
    title: "CIF Trade Member",
    description:
      "Registered Trade Member of the Construction Industries Federation of Namibia, recognized for adherence to professional standards.",
  },
  {
    icon: Globe,
    title: "International Reach",
    description:
      "Strategic partnerships with global leaders like Assa Abloy enable us to bring world-class solutions to the Southern African market.",
  },
  {
    icon: Leaf,
    title: "Sustainability Focus",
    description:
      "Engaged with the Green Building Council Namibia and climate action initiatives, championing energy-efficient building solutions.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <AnimatedSection variant="slide-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              About JS Hardware CC
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                Family Values.{" "}
                <span className="text-muted-foreground">
                  Professional Standards.
                </span>
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="text-pretty leading-relaxed">
                Under the leadership of Kim Davidson, JS Hardware CC has grown
                from a specialized supplier into Namibia{"'"}s foremost authority
                on architectural ironmongery and security solutions.
              </p>
              <p className="text-pretty leading-relaxed">
                Our collaborative culture prioritizes employee autonomy and
                diverse professional perspectives, enabling innovative
                problem-solving for even the most complex architectural
                projects. We don{"'"}t just supply products — we partner with
                architects, developers, and security consultants to deliver
                complete building solutions.
              </p>
            </div>

            {/* CIF Badge */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  CIF Namibia
                </p>
                <p className="text-xs text-muted-foreground">
                  Registered Trade Member - Suppliers
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Values Grid */}
          <AnimatedSection variant="stagger" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <AnimatedChild key={value.title}>
                <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
