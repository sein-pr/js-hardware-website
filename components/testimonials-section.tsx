"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

const testimonials = [
  {
    id: 1,
    quote:
      "JS Hardware's specification support was exceptional on our hospital project. Their understanding of fire-rated requirements and anti-ligature hardware saved us significant design time and ensured full compliance.",
    author: "Luke Emery",
    role: "Principal Architect",
    firm: "Emery & Associates",
    project: "Healthcare Sector",
  },
  {
    id: 2,
    quote:
      "The master-keying design for our school campus was complex, but JS Hardware delivered a system that balanced security with operational ease. Their on-site support during handover was invaluable.",
    author: "Sarah Mendelsohn",
    role: "Senior Project Manager",
    firm: "NamDev Construction",
    project: "Education Sector",
  },
  {
    id: 3,
    quote:
      "As quantity surveyors, accuracy in ironmongery scheduling is critical. JS Hardware consistently provides detailed, code-compliant specifications that we can rely on for tendering and procurement.",
    author: "Michael Shikongo",
    role: "Lead Quantity Surveyor",
    firm: "Shikongo QS Associates",
    project: "Commercial Sector",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  const testimonial = testimonials[current]

  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Trusted by Professionals
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <span className="text-balance">
                What Architects &{" "}
                <span className="text-muted-foreground">
                  Industry Leaders Say
                </span>
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -left-4 -top-4 opacity-10 lg:-left-8 lg:-top-8">
            <Quote className="h-16 w-16 text-primary lg:h-24 lg:w-24" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-border bg-background p-8 lg:p-12"
            >
              <blockquote className="text-lg leading-relaxed text-foreground lg:text-xl">
                {'"'}
                {testimonial.quote}
                {'"'}
              </blockquote>
              <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
                <div>
                  <p className="font-heading text-base font-bold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.firm}
                  </p>
                </div>
                <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                  {testimonial.project}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
