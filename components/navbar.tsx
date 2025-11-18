'use client'

import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isDark, setIsDark] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark || true // Default to dark
    setIsDark(shouldBeDark)
    
    const html = document.documentElement
    if (shouldBeDark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const html = document.documentElement
    if (isDark) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark, mounted])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-xl font-bold text-accent hover:text-accent/80 transition"
          >
            Portfolio
          </button>
          
          <div className="hidden md:flex gap-8">
            <button className="text-foreground hover:text-accent transition">Beranda</button>
            <button className="text-foreground hover:text-accent transition">Sertifikat</button>
            <button className="text-foreground hover:text-accent transition">Kontak</button>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition">
              <Sun size={20} />
            </button>
            <button className="md:hidden p-2 hover:bg-muted rounded-lg transition">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('home')} 
          className="text-xl font-bold text-accent hover:text-accent/80 transition"
        >
          Portfolio
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-foreground hover:text-accent transition"
          >
            Beranda
          </button>
          <button 
            onClick={() => scrollToSection('certificates')} 
            className="text-foreground hover:text-accent transition"
          >
            Sertifikat
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-foreground hover:text-accent transition"
          >
            Kontak
          </button>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-muted rounded-lg transition"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-accent transition text-left"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('certificates')} 
              className="text-foreground hover:text-accent transition text-left"
            >
              Sertifikat
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-accent transition text-left"
            >
              Kontak
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
