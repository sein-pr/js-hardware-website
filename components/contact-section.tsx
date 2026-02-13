"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AnimatedSection } from "@/components/animated-section"

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Our Showroom",
    value: "7 Wright Street, Southern Industrial",
    detail: "Windhoek, Namibia",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+264 (0) 61 238953",
    detail: "+264 (0) 61 238380",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jshardware@iway.na",
    detail: "Enquiries & Specifications",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 07:30 - 17:00",
    detail: "Sat: 08:00 - 12:00",
  },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Get in Touch
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Start Your{" "}
              <span className="text-muted-foreground">Project Today.</span>
            </span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Whether you need a full ironmongery schedule, a digital lock
            consultation, or simply want to visit our showroom — we{"'"}re here
            to help.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <AnimatedSection variant="slide-left" className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-background p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Message Received
                  </h3>
                  <p className="max-w-sm text-muted-foreground">
                    Thank you for your enquiry. Our team will respond within
                    24 hours with a personalized consultation plan.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+264..."
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-medium text-foreground"
                      >
                        Service Required
                      </label>
                      <Select>
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="specification">
                            Specification Assistance
                          </SelectItem>
                          <SelectItem value="masterkey">
                            Master Key Design
                          </SelectItem>
                          <SelectItem value="installation">
                            Professional Installation
                          </SelectItem>
                          <SelectItem value="consultancy">
                            Technical Consultancy
                          </SelectItem>
                          <SelectItem value="digital">
                            Digital Access Solutions
                          </SelectItem>
                          <SelectItem value="general">
                            General Enquiry
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements, timeline, and any specific hardware needs..."
                      rows={5}
                      required
                      className="rounded-lg resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                    Send Enquiry
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection
            variant="slide-right"
            className="flex flex-col gap-6 lg:col-span-2"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:border-primary/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="flex-1 overflow-hidden rounded-xl border border-border">
              <iframe
                title="JS Hardware Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.2!2d17.0836!3d-22.5743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzI3LjUiUyAxN8KwMDUnMDEuMCJF!5e0!3m2!1sen!2sna!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
