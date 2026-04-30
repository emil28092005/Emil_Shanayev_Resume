import { resume } from '@/data/resume'
import { SectionLabel } from './SectionLabel'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section id="skills" className="pb-24">
      <Reveal>
        <SectionLabel index="01" label="skills.list" id="skills" />
      </Reveal>

      <div className="space-y-0">
        {resume.skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.04}>
            <div className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0 py-3.5 border-b border-terminal-border/50 hover:border-terminal-border transition-colors">

              {/* Category label */}
              <div className="sm:w-36 flex-shrink-0 flex items-center gap-2">
                <span className="text-[9px] text-terminal-amber opacity-40 w-3 text-right">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-terminal-muted tracking-[0.18em] uppercase pl-2">
                  {group.category}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 sm:pl-4">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 text-[11px] text-terminal-muted border border-terminal-border hover:border-terminal-amber/50 hover:text-terminal-text transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
