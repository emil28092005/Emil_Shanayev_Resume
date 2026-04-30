import { resume } from '@/data/resume'
import { TypingText } from './TypingText'

export function Hero() {
  const { name, role, bio, education, contacts } = resume

  return (
    <section className="pt-16 pb-24 sm:pt-20 sm:pb-32">

      {/* Terminal chrome */}
      <div className="mb-10 inline-flex items-center gap-2 text-[10px] text-terminal-muted tracking-widest">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 opacity-40">portfolio.sh</span>
      </div>

      {/* Shell prompt line */}
      <p className="text-[11px] text-terminal-muted mb-8 tracking-wide">
        <span className="text-terminal-amber">visitor</span>
        <span className="opacity-40">@portfolio</span>
        <span className="opacity-40">:~$</span>
        <span className="ml-2 text-terminal-text">cat whoami.txt</span>
      </p>

      {/* Name */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-terminal-text tracking-tight leading-none mb-5">
        {name}
      </h1>

      {/* Typing role */}
      <p className="text-base sm:text-lg text-terminal-muted mb-10 h-7">
        <span className="text-terminal-amber opacity-60 mr-2">&gt;</span>
        <TypingText phrases={role} speed={80} deleteSpeed={40} pauseDuration={2000} />
      </p>

      {/* Bio */}
      <p className="text-sm text-terminal-muted leading-relaxed max-w-2xl mb-10 border-l-2 border-terminal-border pl-4">
        {bio}
      </p>

      {/* Education inline */}
      <div className="mb-12 flex items-start gap-2 text-[11px]">
        <span className="text-terminal-amber opacity-50 mt-0.5">◆</span>
        <div>
          <span className="text-terminal-text">{education.institution}</span>
          <span className="text-terminal-muted mx-2">·</span>
          <span className="text-terminal-muted">student</span>
        </div>
      </div>

      {/* Contact links in hero */}
      <div className="flex flex-wrap gap-3">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 text-[11px] text-terminal-muted border border-terminal-border hover:border-terminal-amber hover:text-terminal-text transition-all duration-200 tracking-wide"
          >
            <span className="text-terminal-amber opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
            <span className="uppercase tracking-widest text-[10px]">{c.label}</span>
            <span className="opacity-40">/</span>
            <span>{c.handle}</span>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-16 h-px w-full bg-gradient-to-r from-terminal-amber/20 via-terminal-border to-transparent" />
    </section>
  )
}
