"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const variantMap = {
  "fade-up": fadeUp,
  "fade-in": fadeIn,
  "slide-left": slideLeft,
  "slide-right": slideRight,
  "scale-up": scaleUp,
  stagger: staggerContainer,
}

interface AnimatedSectionProps {
  children: ReactNode
  variant?: keyof typeof variantMap
  className?: string
  delay?: number
  once?: boolean
}

export function AnimatedSection({
  children,
  variant = "fade-up",
  className,
  delay = 0,
  once = true,
}: AnimatedSectionProps) {
  const selectedVariant = variantMap[variant]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={selectedVariant}
      className={className}
      style={{ willChange: "transform, opacity" }}
      transition={delay > 0 ? { delay } : undefined}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedChild({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}
