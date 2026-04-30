import { resume } from '@/data/resume'
import { SectionLabel } from './SectionLabel'
import { Reveal } from './Reveal'

const statusConfig = {
  deployed: { label: 'deployed', color: 'text-terminal-green' },
  shipped:  { label: 'shipped',  color: 'text-terminal-amber' },
  wip:      { label: 'wip',      color: 'text-terminal-muted' },
} as const

export function Projects() {
  return (
    <section id="projects" className="pb-24">
      <Reveal>
        <SectionLabel index="02" label="projects.log" />
      </Reveal>

      <div className="space-y-4">
        {resume.projects.map((project, i) => {
          const status = statusConfig[project.status]

          return (
            <Reveal key={project.id} delay={i * 0.07}>
              <article className="group relative border border-terminal-border hover:border-terminal-amber/40 bg-terminal-card transition-all duration-200 p-5 sm:p-6">

                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-terminal-amber opacity-40 font-mono">
                      [{project.id}]
                    </span>
                    <h3 className="text-sm font-semibold text-terminal-text group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className={`text-[10px] tracking-widest ${status.color}`}>
                      ● {status.label}
                    </span>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] text-terminal-muted hover:text-terminal-amber transition-colors tracking-wider"
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[12px] text-terminal-muted leading-relaxed mb-4 pl-9">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="pl-9 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-px text-[10px] text-terminal-subtle border border-terminal-border/60 tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Left accent line on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-terminal-amber scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top" />
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
