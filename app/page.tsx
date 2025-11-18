'use client'

import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ContactSection from '@/components/contact-section'
import CertificationsSection from '@/components/certifications-section'
import Footer from '@/components/footer'
import { Play, Pause } from 'lucide-react'

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Autoplay fix (harus menunggu user interaction di browser modern)
  useEffect(() => {
    audioRef.current = new Audio('/music.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.4
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Musik */}
      <audio ref={audioRef} />

      {/* Tombol Play / Pause Musik */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>

      <Navbar />
      <Hero />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
