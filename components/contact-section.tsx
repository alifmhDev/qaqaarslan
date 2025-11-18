'use client'

import { useState } from 'react'
import { Mail, MessageCircle, Linkedin, Github, Twitter, CheckCircle } from 'lucide-react'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSocialClick = (platform: string) => {
    const urls: Record<string, string> = {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
    window.open(urls[platform], '_blank')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const formData = new FormData(form)

    const res = await fetch('https://formspree.io/f/xvgdeebk', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' }
    })

    if (res.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-16">

      {/* ---------------------------------- */}
      {/* HEADER */}
      {/* ---------------------------------- */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Mari Terhubung</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Saya selalu terbuka untuk diskusi proyek baru, creative ideas, atau peluang kolaborasi.
          Silakan menghubungi saya kapan saja!
        </p>
      </div>

      {/* ---------------------------------- */}
      {/* CONTACT CARDS */}
      {/* ---------------------------------- */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <button 
          onClick={() => window.location.href = 'mailto:hello@example.com'}
          className="border border-border/50 rounded-lg p-8 hover:border-accent/50 transition bg-card/50 text-left hover:bg-card/70"
        >
          <Mail size={32} className="text-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-accent hover:underline">hello@example.com</p>
        </button>

        <button 
          onClick={() => window.open('https://wa.me/628123456789', '_blank')}
          className="border border-border/50 rounded-lg p-8 hover:border-accent/50 transition bg-card/50 text-left hover:bg-card/70"
        >
          <MessageCircle size={32} className="text-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
          <p className="text-accent hover:underline">+62 812 3456 789</p>
        </button>
      </div>

      {/* ---------------------------------- */}
      {/* SOCIAL BUTTONS */}
      {/* ---------------------------------- */}
      <div className="text-center mb-12">
        <p className="text-muted-foreground text-sm uppercase tracking-widest mb-8">
          ATAU HUBUNGI SAYA DI MEDIA SOSIAL
        </p>

        <div className="flex justify-center gap-8">
          <button 
            onClick={() => handleSocialClick('linkedin')}
            className="text-muted-foreground hover:text-accent transition"
          >
            <Linkedin size={24} />
          </button>
          <button 
            onClick={() => handleSocialClick('github')}
            className="text-muted-foreground hover:text-accent transition"
          >
            <Github size={24} />
          </button>
          <button 
            onClick={() => handleSocialClick('twitter')}
            className="text-muted-foreground hover:text-accent transition"
          >
            <Twitter size={24} />
          </button>
        </div>
      </div>

      {/* ---------------------------------- */}
      {/* SUCCESS MESSAGE */}
      {/* ---------------------------------- */}
      {status === 'success' && (
        <div className="border border-green-400 bg-green-100/20 text-green-600 p-6 rounded-lg mb-8 flex items-center gap-4">
          <CheckCircle size={28} />
          <p>Terima kasih! Pesan Anda berhasil dikirim.</p>
        </div>
      )}

      {/* ---------------------------------- */}
      {/* CONTACT FORM */}
      {/* ---------------------------------- */}
      <div className="border border-accent/30 bg-gradient-to-r from-accent/10 to-transparent rounded-lg p-8">

        <h3 className="text-2xl font-bold mb-6">Kirim Pesan Kolaborasi</h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nama</label>
              <input 
                name="name"
                required
                placeholder="Nama Anda"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email"
                name="email"
                required
                placeholder="email@example.com"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Subjek</label>
            <input 
              name="subject"
              required
              placeholder="Topik pesan Anda"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Pesan</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Ceritakan tentang ide atau proyek Anda..."
              className="w-full px-4 py-3 bg-background border border-border rounded-lg resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 rounded-lg font-medium"
          >
            {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
          </button>

        </form>
      </div>
    </section>
  )
}
