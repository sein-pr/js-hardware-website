"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Hand } from "lucide-react"

interface ProductImage {
  src: string
  label: string
  brand: string
}

const categories = [
  {
    id: "security",
    label: "Security Access",
    description:
      "From digital entry systems with biometric recognition to industrial-grade cylinders and master key systems. Complete access control solutions for every security requirement.",
    applications: [
      "Digital entry systems",
      "Master key design",
      "Industrial security",
      "Biometric access",
    ],
    products: [
      { src: "/images/digital-lock.jpg", label: "Smart Digital Lock", brand: "Assa Abloy" },
      { src: "/images/product-yale-lock.jpg", label: "Touchscreen Deadbolt", brand: "Yale" },
      { src: "/images/product-cylinder.jpg", label: "Security Cylinder", brand: "ABLOY" },
      { src: "/images/product-access-panel.jpg", label: "Access Control Panel", brand: "Cisa" },
    ] as ProductImage[],
  },
  {
    id: "door-control",
    label: "Door Control",
    description:
      "Overhead door closers, floor springs, and automatic operators essential for fire safety compliance and accessibility in high-traffic commercial environments.",
    applications: [
      "Fire safety compliance",
      "Automatic doors",
      "High-traffic commercial",
      "Accessibility systems",
    ],
    products: [
      { src: "/images/door-closer.jpg", label: "Overhead Door Closer", brand: "Geze" },
      { src: "/images/product-floor-spring.jpg", label: "Floor Spring Mechanism", brand: "Dormakaba" },
      { src: "/images/product-auto-door.jpg", label: "Automatic Sliding System", brand: "Geze" },
      { src: "/images/door-closer.jpg", label: "Concealed Closer", brand: "QS" },
    ] as ProductImage[],
  },
  {
    id: "architectural",
    label: "Architectural Hardware",
    description:
      "High-end lever handles, pull handles, and bathroom accessories. Precision-engineered components that combine aesthetic sophistication with structural durability.",
    applications: [
      "High-end aesthetics",
      "Furniture fittings",
      "Bathroom hardware",
      "Office environments",
    ],
    products: [
      { src: "/images/architectural-handles.jpg", label: "Lever Handle Collection", brand: "Hafele" },
      { src: "/images/product-pull-handle.jpg", label: "Commercial Pull Handle", brand: "Manital" },
      { src: "/images/product-bathroom-hardware.jpg", label: "Bathroom Accessories", brand: "Eurobrass" },
      { src: "/images/architectural-handles.jpg", label: "Designer Lever Set", brand: "Halcast" },
    ] as ProductImage[],
  },
]

function MouseDrivenCarousel({ products }: { products: ProductImage[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const safeIndex =
    products.length > 0
      ? Math.min(Math.max(Number.isFinite(activeIndex) ? activeIndex : 0, 0), products.length - 1)
      : 0
  const activeProduct = products[safeIndex]

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      if (rect.width <= 0 || products.length === 0) return
      const x = e.clientX - rect.left
      const fraction = x / rect.width
      const rawIndex = Math.floor(fraction * products.length)
      const index = Math.min(Math.max(rawIndex, 0), products.length - 1)
      if (index !== activeIndex) {
        setActiveIndex(index)
      }
      if (!hasInteracted) setHasInteracted(true)
    },
    [activeIndex, products.length, hasInteracted]
  )

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div className="relative">
      {/* Main image container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative mx-auto aspect-[16/11] w-full max-w-4xl cursor-none overflow-hidden rounded-2xl border border-border bg-background sm:aspect-[16/10] lg:aspect-[16/9]"
      >
        {/* Invisible zone columns for visual feedback */}
        <div className="pointer-events-none absolute inset-0 z-[2] flex">
          {products.map((_, i) => (
            <div
              key={i}
              className="h-full flex-1"
              style={{
                borderRight:
                  i < products.length - 1
                    ? "1px solid transparent"
                    : "none",
              }}
            />
          ))}
        </div>

        {/* Product images - stacked with crossfade */}
        {products.map((product, i) => (
          <motion.div
            key={`${product.brand}-${i}`}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: activeIndex === i ? 1 : 0,
              scale: activeIndex === i ? 1 : 1.05,
            }}
            transition={{
              opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <img
              src={product.src}
              alt={`${product.label} by ${product.brand}`}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </motion.div>
        ))}

        {/* Dark vignette overlay */}
        <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-background/80 via-transparent to-background/20" />

        {/* Brand tag - top right */}
        {activeProduct && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.brand}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden absolute right-4 top-4 z-10 rounded-lg bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-md"
            >
              {activeProduct.brand}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Product label - bottom left */}
        {activeProduct && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.label}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="hidden absolute bottom-4 left-4 z-10 sm:bottom-6 sm:left-6"
            >
              <p className="font-heading text-lg font-bold text-foreground sm:text-2xl">
                {activeProduct.label}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                by {activeProduct.brand}
              </p>
            </motion.div>
          </AnimatePresence>
        )}

        {/* "Hover to explore" hint - center */}
        <AnimatePresence>
          {!hasInteracted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="hidden absolute inset-0 z-20 flex flex-col items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-background/60 backdrop-blur-md"
              >
                <Hand className="h-6 w-6 text-foreground/80" />
              </motion.div>
              <p className="mt-3 font-heading text-sm font-semibold text-foreground/90">
                Hover to explore
              </p>
              <p className="mt-0.5 text-xs text-primary">
                Move cursor across image
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Custom cursor follower when hovering */}
        {isHovering && hasInteracted && (
          <CursorFollower containerRef={containerRef} />
        )}

        {/* Zone progress lines at top */}
        <div className="absolute left-0 right-0 top-0 z-10 flex">
          {products.map((_, i) => (
            <div key={i} className="flex-1 px-1 pt-3">
              <div
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  i === activeIndex
                    ? "bg-primary shadow-sm shadow-primary/50"
                    : i < activeIndex
                      ? "bg-foreground/30"
                      : "bg-foreground/10"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators below */}
      <div className="mt-5 hidden items-center justify-center gap-2">
        {products.map((product, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="group/dot relative flex items-center justify-center p-1"
            aria-label={`View ${product.label}`}
          >
            <span
              className={`block rounded-full transition-all duration-400 ${
                i === activeIndex
                  ? "h-2.5 w-8 bg-primary"
                  : "h-2.5 w-2.5 bg-muted-foreground/30 group-hover/dot:bg-muted-foreground/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

function CursorFollower({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = useCallback(
    (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    },
    [containerRef]
  )

  const attachedRef = useRef(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el || attachedRef.current) return
    attachedRef.current = true
    el.addEventListener("mousemove", handleMove)
    return () => {
      el.removeEventListener("mousemove", handleMove)
      attachedRef.current = false
    }
  }, [containerRef, handleMove])

  return (
    <motion.div
      className="pointer-events-none absolute z-30 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/20 backdrop-blur-sm"
      animate={{ x: pos.x - 20, y: pos.y - 20 }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
    >
      <motion.div
        className="h-1.5 w-1.5 rounded-full bg-primary"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  )
}

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const active = categories.find((c) => c.id === activeCategory)!

  return (
    <section id="products" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Product Ecosystem
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Curated Portfolio.{" "}
              <span className="text-muted-foreground">
                International Standards.
              </span>
            </span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A technical toolkit of international brands, carefully selected for
            precision engineering, durability, and aesthetic flexibility.
          </p>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection variant="fade-up" delay={0.2} className="mt-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Carousel + Details */}
        <div className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
                {/* Mouse-driven single-container carousel */}
                <div className="lg:pr-2">
                  <MouseDrivenCarousel products={active.products} />
                </div>

                {/* Details block */}
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
                    {active.label}
                  </h3>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {active.description}
                  </p>
                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {active.applications.map((app) => (
                      <div
                        key={app}
                        className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 text-sm text-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {app}
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Button
                      variant="outline"
                      className="group gap-2 rounded-full"
                      onClick={() => {
                        const el = document.querySelector("#contact")
                        if (el) el.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Request Specifications
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
