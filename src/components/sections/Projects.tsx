import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Lock } from 'lucide-react'
import { useRef, useState, type KeyboardEvent } from 'react'
import { projects } from '../../data/projects'
import { GitHubIcon } from '../ui/BrandIcons'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { StatusBadge } from '../ui/StatusBadge'
import { Tag } from '../ui/Tag'
import { ArchitectureDiagram } from './ArchitectureDiagram'

function SubHeading({ children }: { children: string }) {
  return <h4 className="mb-3 font-mono text-[11px] tracking-wider text-subtle uppercase">{children}</h4>
}

export function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const active = projects.find((p) => p.id === activeId) ?? projects[0]
  const activeIndex = projects.indexOf(active)

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
    let next: number | undefined
    if (e.key in keys) next = (activeIndex + keys[e.key] + projects.length) % projects.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = projects.length - 1
    if (next === undefined) return
    e.preventDefault()
    setActiveId(projects[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Featured Engineering Projects"
      title="Frameworks, not just test scripts."
      description="Independent portfolio projects, built from scratch in public — no employer code. Each targets a real quality problem, with the architecture and trade-offs laid out. Status is shown honestly; repositories are linked as they go public."
    >
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[18rem_1fr] lg:gap-8">
          {/* Project index */}
          <div
            role="tablist"
            aria-label="Projects"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:sticky lg:top-24 lg:mx-0 lg:flex-col lg:self-start lg:overflow-visible lg:px-0"
          >
            {projects.map((p, i) => {
              const selected = p.id === activeId
              const Icon = p.icon
              return (
                <button
                  key={p.id}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  role="tab"
                  id={`tab-${p.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${p.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(p.id)}
                  className={`group relative flex min-w-[15rem] shrink-0 items-start gap-3 rounded-xl border p-3.5 text-left transition-colors lg:min-w-0 ${
                    selected
                      ? 'border-line-strong bg-elevated'
                      : 'border-transparent hover:border-line hover:bg-surface'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="project-indicator"
                      className="absolute top-3.5 bottom-3.5 -left-px hidden w-[2px] rounded-full bg-accent lg:block"
                    />
                  )}
                  <span
                    className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border transition-colors ${
                      selected ? 'border-line-strong bg-surface text-accent' : 'border-line text-subtle group-hover:text-muted'
                    }`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="font-mono text-[11px] text-subtle">{String(i + 1).padStart(2, '0')}</span>
                    <span className={`block text-sm leading-snug font-medium ${selected ? 'text-fg' : 'text-muted'}`}>
                      {p.title}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Detail panel */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                id={`panel-${active.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${active.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="rounded-2xl border border-line bg-surface"
              >
                <header className="border-b border-line p-6 sm:p-8">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <StatusBadge status={active.status} />
                    {active.repoUrl ? (
                      <a
                        href={active.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-line-strong px-3 py-1.5 text-sm text-fg transition-colors hover:bg-elevated"
                      >
                        <GitHubIcon className="size-3.5" /> View repository
                        <ArrowUpRight className="size-3.5 text-subtle" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
                        <Lock className="size-3" /> Repository not yet public
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-fg sm:text-[1.7rem]">{active.title}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">{active.tagline}</p>
                </header>

                <div className="space-y-10 p-6 sm:p-8">
                  <div>
                    <SubHeading>Problem</SubHeading>
                    <p className="max-w-3xl leading-relaxed text-fg/85">{active.problem}</p>
                  </div>

                  <div>
                    <SubHeading>{active.status === 'completed' ? 'Implementation' : 'Planned implementation'}</SubHeading>
                    <ul className="grid gap-x-8 gap-y-2.5 md:grid-cols-2">
                      {active.implementation.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <Check className="mt-[3px] size-3.5 shrink-0 text-accent/80" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <SubHeading>Architecture</SubHeading>
                    <ArchitectureDiagram layers={active.architecture} title={active.title} />
                  </div>

                  {active.example && (
                    <div>
                      <SubHeading>Sample evaluation case</SubHeading>
                      <div className="overflow-hidden rounded-xl border border-line bg-bg/60">
                        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                          <span className="font-mono text-xs text-subtle">{active.example.filename}</span>
                          <span className="font-mono text-[10px] tracking-wider text-warn/80 uppercase">illustrative</span>
                        </div>
                        <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed text-muted">
                          <code>{active.example.code}</code>
                        </pre>
                      </div>
                      <p className="mt-2 text-xs text-subtle">{active.example.caption}</p>
                    </div>
                  )}

                  <div>
                    <SubHeading>Stack</SubHeading>
                    <div className="flex flex-wrap gap-2">
                      {active.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
