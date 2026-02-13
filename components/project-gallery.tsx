"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

const projects = [
  {
    id: 1,
    title: "Windhoek Central Hospital",
    category: "Healthcare",
    description:
      "Complete ironmongery solution including fire-rated door hardware, master-keyed access systems, and anti-ligature fittings across 200+ doors.",
    image: "/images/project-hospital.jpg",
    specs: "200+ Doors | Master Key System | Fire-Rated Hardware",
  },
  {
    id: 2,
    title: "Maerua Mall Retail Expansion",
    category: "Retail",
    description:
      "Automatic entrance systems, high-traffic door closers, and integrated access control for Namibia's premier retail destination.",
    image: "/images/project-retail.jpg",
    specs: "Automatic Entrances | Access Control | High-Traffic Solutions",
  },
  {
    id: 3,
    title: "FNB Corporate Headquarters",
    category: "Commercial",
    description:
      "Premium architectural lever handles, electronic access throughout, and bespoke boardroom hardware with seamless digital integration.",
    image: "/images/project-office.jpg",
    specs: "Electronic Access | Premium Handles | Digital Integration",
  },
  {
    id: 4,
    title: "Luxury Residential Estate",
    category: "Residential",
    description:
      "High-end brass and stainless-steel hardware package, digital smart locks with biometric access, and custom finishes for 12 luxury units.",
    image: "/images/project-residential.jpg",
    specs: "Smart Locks | Custom Finishes | Biometric Access",
  },
]

export function ProjectGallery() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % projects.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const project = projects[current]

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <section id="projects" className="overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Project Portfolio
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                <span className="text-balance">
                  Delivered with{" "}
                  <span className="text-muted-foreground">Precision.</span>
                </span>
              </h2>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full"
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <div className="relative mt-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid items-stretch gap-8 lg:grid-cols-5"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl border border-border lg:col-span-3">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} project by JS Hardware`}
                  className="h-full min-h-[300px] w-full object-cover lg:min-h-[420px]"
                />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center lg:col-span-2">
                <h3 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-6 rounded-xl border border-border bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Project Specifications
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    {project.specs}
                  </p>
                </div>

                {/* Progress Dots */}
                <div className="mt-8 flex items-center gap-2">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > current ? 1 : -1)
                        setCurrent(i)
                      }}
                      aria-label={`Go to project ${i + 1}`}
                      className="group relative h-2 transition-all duration-500"
                      style={{ width: i === current ? "2rem" : "0.5rem" }}
                    >
                      <span
                        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                          i === current
                            ? "bg-primary"
                            : "bg-border group-hover:bg-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-3 text-xs text-muted-foreground">
                    {String(current + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
