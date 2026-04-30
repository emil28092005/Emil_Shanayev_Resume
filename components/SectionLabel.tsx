interface Props {
  index: string
  label: string
  id?: string
}

export function SectionLabel({ index, label, id }: Props) {
  return (
    <div id={id} className="flex items-center gap-4 mb-10">
      <span className="text-[10px] text-terminal-amber font-mono tracking-widest opacity-60">
        {index}
      </span>
      <span className="text-[11px] text-terminal-muted font-mono tracking-[0.22em] uppercase">
        {label}
      </span>
      <div className="flex-1 h-px bg-terminal-border" />
    </div>
  )
}
