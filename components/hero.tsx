'use client'

import { Button } from '@/components/ui/button'
import { Laptop } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
  Hi, I'm <span className="text-accent">Qaqa Arslan</span>
</h1>

          
          <p className="text-xl text-muted-foreground mb-6">
            Full-Stack Developer & Creative Problem Solver
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            Saya adalah pengembang web berpengalaman dengan passion untuk membuat aplikasi yang user-friendly dan scalable. Dengan keahlian dalam React, Node.js, dan modern web technologies, saya membantu bisnis mencapai tujuan digital mereka.
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-8">
            Saya percaya pada pentingnya clean code, accessibility, dan user experience dalam setiap project yang saya kerjakan.
          </p>
          
          <div className="flex gap-4">
            <Button 
              onClick={() => scrollToSection('certificates')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Lihat Sertifikat
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-accent text-accent hover:bg-accent/10"
            >
              Hubungi Saya
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="border border-accent/30 rounded-lg overflow-hidden h-80 w-80 flex items-center justify-center">
            <img 
              src="/profile.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Existing code */}
      <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border">
        <div>
          <p className="text-4xl font-bold text-accent">50+</p>
          <p className="text-muted-foreground">Project Selesai</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-accent">5+</p>
          <p className="text-muted-foreground">Tahun Pengalaman</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-accent">30+</p>
          <p className="text-muted-foreground">Klien Puas</p>
        </div>
      </div>
    </section>
  )
}
