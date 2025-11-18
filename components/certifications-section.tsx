'use client'

import { useState } from 'react'
import { ChevronDown, ExternalLink, FileText } from 'lucide-react'

interface Certificate {
  id: string
  title: string
  category: string
  provider: string
  year: number
  image: string
  description: string
  skills: string[]
  certificateLink: string
  projectLink?: string
}

const certificates: Certificate[] = [
  {
  id: '1',
  title: 'Certified Phishing Prevention Specialist (CPPS)',
  category: 'Cyber Security',
  provider: 'Hack and Fix',
  year: 2025,
  image: '/cpps-certificate.jpg',
  description: 'Professional certification program focused on identifying, preventing, and responding to phishing threats through theoretical knowledge, practical exercises, and real-world scenarios.',
  skills: [
    'Phishing Detection',
    'Cybersecurity Awareness',
    'Incident Response',
    'Data Protection'
  ],
  certificateLink: 'https://qaqaarslan.netlify.app/cpps-certificate.jpg',
  projectLink: 'https://qaqaarslan.notion.site/Certified-Phishing-Prevention-Specialist-CPPS-24c625370c79804eb9f3dff5fd01affe'
},
  {
    id: '2',
    title: 'Advanced React Patterns',
    category: 'Web Development',
    provider: 'Udemy',
    year: 2024,
    image: '/react-certificate.jpg',
    description: 'Mastered advanced React patterns including hooks, context API, performance optimization, and building scalable component architectures.',
    skills: ['React', 'Hooks', 'Context API', 'Performance Optimization'],
    certificateLink: 'https://notion.so/certificate-react',
    projectLink: 'https://github.com/yourname/react-project'
  },
  {
    id: '3',
    title: 'Full-Stack Development',
    category: 'Web Development',
    provider: 'Coursera',
    year: 2023,
    image: '/full-stack-certificate.jpg',
    description: 'Complete full-stack development course covering frontend, backend, databases, and deployment strategies for production applications.',
    skills: ['Node.js', 'MongoDB', 'React', 'Express.js', 'Deployment'],
    certificateLink: 'https://notion.so/certificate-fullstack',
    projectLink: 'https://github.com/yourname/fullstack-project'
  },
]

const categories = ['All', 'Cyber Security', 'Web Development']

export default function CertificationsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(c => c.category === selectedCategory)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="certificates" className="max-w-6xl mx-auto px-6 py-20 border-t border-border scroll-mt-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Sertifikasi & Keahlian</h2>
        <p className="text-muted-foreground">
          Koleksi sertifikat profesional dan keahlian yang saya kuasai untuk membangun solusi digital terbaik
        </p>
      </div>

      <div className="mb-12 flex justify-center">
        <div className="relative w-full md:w-96">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg appearance-none cursor-pointer text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {filtered.map((cert) => (
          <div key={cert.id}>
            <div 
              className="border border-border/50 rounded-lg overflow-hidden hover:border-accent/50 transition group cursor-pointer bg-card/50"
              onClick={() => toggleExpand(cert.id)}
            >
              <div className="relative overflow-hidden h-40">
                <img 
                  src={cert.image || "/placeholder.svg"} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <span className="text-sm font-medium text-foreground">Klik untuk detail</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-base mb-2 line-clamp-2">{cert.title}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>{cert.provider} • {cert.year}</span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{cert.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">{cert.category}</span>
                  <button
                    onClick={() => toggleExpand(cert.id)}
                    className="p-1 hover:bg-muted rounded transition"
                    aria-label="Toggle details"
                  >
                    <ChevronDown 
                      size={16}
                      className={`transition transform ${expandedId === cert.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {expandedId === cert.id && (
              <div className="mt-2 border border-border/50 rounded-lg bg-card/50 p-4 space-y-4 animate-in fade-in duration-200">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Keahlian</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Deskripsi</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
                </div>

                <div className="flex gap-2 pt-2 border-t border-border/30">
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-accent text-accent-foreground rounded text-xs hover:bg-accent/90 transition font-medium"
                  >
                    <FileText size={14} />
                    Lihat Sertifikat
                  </a>
                  {cert.projectLink && (
                    <a
                      href={cert.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-accent text-accent rounded text-xs hover:bg-accent/10 transition font-medium"
                    >
                      <ExternalLink size={14} />
                      Lihat Project
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-muted-foreground text-sm">
        Terus mengupdate skills melalui learning dan real-world projects
      </div>
    </section>
  )
}
