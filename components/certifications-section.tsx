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
    title: 'Certified Phishing Prevention Specialist',
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
  title: 'Cybersecurity Career Starter Certification (CCSC)',
  category: 'Cyber Security',
  provider: 'Hack and Fix',
  year: 2025,
  image: '/ccsc-certificate.jpg',
  description: 'Beginner-friendly cybersecurity certification designed to help aspiring professionals start a career in cybersecurity. The program covers fundamental digital security concepts, key industry roles, hands-on career strategies, personal lab building, and guidance for entering the job market even without prior technical experience.',
  skills: [
    'Cybersecurity Fundamentals',
    'Security Operations Basics',
    'Threat Detection',
    'Career Development in Cybersecurity',
    'SOC Fundamentals'
  ],
  certificateLink: 'https://qaqaarslan.netlify.app/ccsc-certificate.jpg',
  // projectLink: ''
},
  {
    id: '3',
    title: 'Introduction to OSINT',
    category: 'Cyber Security',
    provider: 'Security Blue Team',
    year: 2025,
    image: '/introduction-to-osint-certificate.jpg',
    description: 'Introductory course on Open-Source Intelligence (OSINT) that provides insights into collecting and utilizing publicly available information for investigations and security operations.',
    skills: [
      'Open-Source Intelligence (OSINT)',
      'Information Gathering',
      'Google Dorking',
      'OSINT Framework',
      'Social Media Intelligence',
      'Reverse Image Search'
    ],
    certificateLink: 'https://qaqaarslan.netlify.app/introduction-to-osint-certificate.jpg'
  },
  {
    id: '4',
    title: 'Mental Health in Cybersecurity',
    category: 'Cyber Security',
    provider: 'Security Blue Team',
    year: 2025,
    image: '/mental-health-cysec-certificate.jpg',
    description: 'Course on maintaining mental health in a fast-paced and ever-changing cybersecurity industry.',
    skills: [
      'Imposter Syndrome',
      'Professional Burnout',
      'Stress',
      'Depression',
      'Alert Fatigue'
    ],
    certificateLink: 'https://qaqaarslan.netlify.app/mental-health-cysec-certificate.jpg'
  },
  {
    id: '5',
    title: 'Introduction to Virtual Machine',
    category: 'System Administration',
    provider: 'Aguna Course',
    year: 2025,
    image: '/virtual-machine-certificate.jpg',
    description: 'This course introduces the fundamental concepts of virtual machines and their usage in modern IT environments.',
    skills: [
      'Virtual Machine Architecture',
      'VirtualBox',
      'VMWare',
      'Virtual Machine Cloning',
      'Virtual Machine Snapshots',
      'Export/Import Virtual Machines',
      'Virtual Machine Networking'
    ],
    certificateLink: 'https://qaqaarslan.netlify.app/virtual-machine-certificate.jpg'
  },
  {
    id: '6',
    title: 'Introduction to Virtual Machines',
    category: 'System Administration',
    provider: 'Security Blue Team',
    year: 2025,
    image: '/introduction-to-virtual-machines-sbt-certificate.jpg',
    description: 'This course helps learners understand what virtual machines and hypervisors are, why virtualization is used, and how to create and configure both local and cloud virtual machines.',
    skills: [
      'Virtual Machines',
      'Hypervisors',
      'Local Virtual Machine Deployment',
      'Cloud Virtual Machines',
      'Virtual Machine Configuration'
    ],
    certificateLink: 'https://qaqaarslan.netlify.app/introduction-to-virtual-machines-sbt-certificate.jpg'
  },
  {
    id: '7',
    title: 'Learn HTML',
    category: 'Web Development',
    provider: 'Always Ngoding',
    year: 2025,
    image: '/alwaysngoding-html-certificate.jpg',
    description: 'This course provides a solid introduction to HTML for building website structure.',
    skills: [
      'Introduction to HTML',
      'HTML Tags, Elements, and Attributes',
      'Basic HTML Structure',
      'HTML Tables',
      'HTML Forms',
      'Additional HTML Concepts'
    ],
    certificateLink: 'https://qaqaarslan.netlify.app/alwaysngoding-html-certificate.jpg'
  },
  {
    id: '8',
    title: 'WordPress : From Beginner to Advanced',
    category: 'Web Development',
    provider: 'Kursus Digital',
    year: 2025,
    image: '/wp-certificate.jpg',
    description: 'A comprehensive WordPress class that takes learners from the fundamentals to advanced techniques.',
    skills: [
      'WordPress',
      'Website Building',
      'CMS',
      'No-Code Website Development'
    ],
    certificateLink: 'https://kursusdigital.id/sertifikat/b1c427971d07bc7173d645635f0e9d0a/'
  },
  {
  id: '9',
  title: 'Introduction to Dark Web Operations',
  category: 'Cyber Security',
  provider: 'Security Blue Team',
  year: 2026,
  image: '/introduction-to-dark-web-operations-certificate.jpg',
  description: 'Introductory course covering clear, deep, and dark web concepts, focusing on how the dark web is used by criminals, governments, law enforcement, and security teams. The course includes hands-on experience using the TOR browser for dark web intelligence and threat analysis.',
  skills: [
    'Dark Web Intelligence',
    'TOR Browser',
    'Threat Intelligence',
    'Dark Web OSINT',
    'Cybercrime Analysis',
    'Intelligence Collection'
  ],
  certificateLink: 'https://qaqaarslan.netlify.app/introduction-to-dark-web-operations-certificate.jpg'
},
  {
  id: '10',
  title: 'Basic Cybersecurity',
  category: 'Cyber Security',
  provider: 'PT Codepolitan Integrasi Indonesia',
  year: 2026,
  image: 'https://qaqaarslan.netlify.app/basic-cybersecurity-codepolitan-certificate.jpg',
  description: 'Online foundational cybersecurity program designed to provide practical knowledge on protecting personal data and digital assets. The course covers core cybersecurity concepts, common threats, encryption and strong password practices, phishing detection using simple tools, basic network security, as well as cyber ethics and Indonesian cyber law.',
  skills: [
    'Cybersecurity Fundamentals',
    'Common Cyber Threats',
    'Encryption Basics',
    'Strong Password Practices',
    'Phishing Detection',
    'Basic Network Security',
    'Cyber Ethics',
    'Indonesian Cyber Law'
  ],
  certificateLink: '/basic-cybersecurity-codepolitan-certificate.jpg'
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
