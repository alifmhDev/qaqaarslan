'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="#" className="text-xl font-bold text-accent block mb-2">
              Portfolio
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional Portfolio Showcase dibangun dengan Next.js dan Tailwind CSS
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition">Beranda</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition">Sertifikat</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hubungi Saya</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@example.com" className="text-accent hover:underline">hello@example.com</a></li>
              <li><a href="tel:+628123456789" className="text-accent hover:underline">+62 812 3456 789</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© 2025 Qaqa Arslan. Semua hak dilindungi.</p>
          <p>Dibangun dengan <span className="text-red-500">❤</span> menggunakan Next.js</p>
        </div>
      </div>
    </footer>
  )
}
