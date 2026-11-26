import type { ProjectStatus } from '../../data/types'

const config: Record<ProjectStatus, { label: string; dot: string; text: string; ring: string }> = {
  planned: {
    label: 'Planned',
    dot: 'border border-dashed border-subtle bg-transparent',
    text: 'text-muted',
    ring: 'border-line-strong',
  },
  'in-progress': {
    label: 'In Progress',
    dot: 'bg-warn',
    text: 'text-warn',
    ring: 'border-warn/30',
  },
  completed: {
    label: 'Completed',
    dot: 'bg-accent',
    text: 'text-accent',
    ring: 'border-accent/30',
  },
}

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const c = config[status]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none ${c.ring} ${c.text}`}
    >
      <span aria-hidden className={`size-2 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  )
}
