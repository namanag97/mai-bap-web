'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site'
import { CheckCircle } from 'lucide-react'
import { PageHeader, Container, FormLabel, Button, MetaLabel } from '@/components/ui'
import { Input, Select, Textarea } from '@/components/ui/Input'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-14 min-h-screen bg-surface-ground">
      <PageHeader
        label="Contact"
        title="Get in touch."
        subtitle="Questions, feedback, or partnership inquiries — we'd love to hear from you."
      />

      {/* Content */}
      <Container className="py-12">
        <div className="grid lg:grid-cols-[1fr_380px] gap-xl">
          {/* Form card */}
          <div className="card">
            {submitted ? (
              <div className="py-16 flex flex-col items-center text-center">
                <div className="w-12 h-12 border border-border-default flex items-center justify-center mb-6">
                  <CheckCircle size={20} className="text-data-positive" />
                </div>
                <h2 className="text-lg font-semibold text-ink-primary tracking-tight mb-2">
                  Message received.
                </h2>
                <p className="text-sm text-ink-muted max-w-xs">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 hover:text-ink-primary transition-colors"
                >
                  <MetaLabel>Send another message</MetaLabel>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                  </div>

                  {/* Work email */}
                  <div>
                    <FormLabel htmlFor="email">Work email</FormLabel>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <FormLabel htmlFor="company">Company</FormLabel>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company name"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <FormLabel htmlFor="subject">Subject</FormLabel>
                    <Select
                      id="subject"
                      name="subject"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="general">General inquiry</option>
                      <option value="sales">Sales</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" className="w-full">
                    Send message
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="border-t border-border-default pt-6">
              <div className="flex items-center gap-xs mb-3">
                <MetaLabel as="div">Office</MetaLabel>
                <div className="flex-1 divider" />
              </div>
              <div className="text-sm text-ink-muted leading-relaxed">
                <p>San Francisco, CA</p>
                <p>548 Market Street, Suite 42</p>
                <p>San Francisco, CA 94104</p>
              </div>
            </div>

            <div className="border-t border-border-default pt-6">
              <div className="flex items-center gap-xs mb-3">
                <MetaLabel as="div">Email</MetaLabel>
                <div className="flex-1 divider" />
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-ink-primary underline hover:text-ink-accent transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="border-t border-border-default pt-6">
              <div className="flex items-center gap-3 mb-3">
                <MetaLabel as="div">Support hours</MetaLabel>
                <div className="flex-1 divider" />
              </div>
              <div className="text-sm text-ink-muted leading-relaxed">
                <p>Monday&ndash;Friday, 9AM&ndash;6PM PST</p>
                <p>Enterprise: 24/7 dedicated support</p>
              </div>
            </div>

            <div className="border-t border-border-default pt-6">
              <div className="flex items-center gap-3 mb-3">
                <MetaLabel as="div">Response time</MetaLabel>
                <div className="flex-1 divider" />
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
