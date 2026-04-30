'use client'

import { useEffect, useState } from 'react'
import { resume } from '@/data/resume'

const links = [
  { label: 'skills',   href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'contact',  href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-terminal-bg/90 backdrop-blur-sm border-b border-terminal-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-3xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <span className="text-[11px] text-terminal-muted tracking-widest">
          <span className="text-terminal-amber">~/</span>
          {resume.handle}
        </span>

        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] text-terminal-muted hover:text-terminal-text transition-colors tracking-wider"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
