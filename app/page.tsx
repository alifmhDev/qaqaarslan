'use client'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ContactSection from '@/components/contact-section'
import CertificationsSection from '@/components/certifications-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
