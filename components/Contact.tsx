import { resume } from '@/data/resume'
import { SectionLabel } from './SectionLabel'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="pb-16">
      <Reveal>
        <SectionLabel index="03" label="contact.sh" />
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-[12px] text-terminal-muted mb-8 pl-1">
          <span className="text-terminal-amber">$</span>
          <span className="ml-2">echo &quot;Open to DevOps and Backend opportunities.&quot;</span>
        </p>
      </Reveal>

      <div className="space-y-px">
        {resume.contacts.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.06}>
            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex items-center gap-0 border border-transparent hover:border-terminal-border bg-transparent hover:bg-terminal-card transition-all duration-150 px-4 py-3.5"
            >
              <span className="w-24 text-[10px] text-terminal-muted tracking-widest uppercase flex-shrink-0">
                {c.label}
              </span>
              <span className="text-terminal-border mx-4 group-hover:text-terminal-amber transition-colors">→</span>
              <span className="text-[12px] text-terminal-muted group-hover:text-terminal-text transition-colors font-mono">
                {c.prefix && (
                  <span className="text-terminal-subtle">{c.prefix}</span>
                )}
                <span className="group-hover:text-terminal-amber transition-colors">
                  {c.handle.replace(c.prefix ?? '', '')}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Footer */}
      <Reveal delay={0.25}>
        <div className="mt-20 pt-8 border-t border-terminal-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-[10px] text-terminal-subtle tracking-widest">
            EMIL SHANAYEV · {new Date().getFullYear()}
          </span>
          <span className="text-[10px] text-terminal-subtle opacity-50 tracking-wide">
            built with Next.js · deployed to GitHub Pages
          </span>
        </div>
      </Reveal>
    </section>
  )
}
