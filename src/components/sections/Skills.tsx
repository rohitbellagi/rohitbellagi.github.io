import { useState } from 'react'
import { skillCategories, skillLevels } from '../../data/skills'
import type { SkillLevel } from '../../data/types'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

type Filter = 'all' | SkillLevel
const filters: Filter[] = ['all', 'daily', 'working', 'learning']

function LevelMeter({ level }: { level: SkillLevel }) {
  const rank = skillLevels[level].rank
  return (
    <span className="flex items-center gap-[3px]" aria-hidden>
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-2.5 w-1 rounded-full ${
            i <= rank ? (level === 'learning' ? 'bg-warn/80' : 'bg-accent/90') : 'bg-line-strong'
          }`}
        />
      ))}
    </span>
  )
}

export function Skills() {
  const [filter, setFilter] = useState<Filter>('all')

  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Technical Arsenal"
      title="Tools I use — and how deeply I use them."
      description="Levels are qualitative and honest: what I use professionally every day, what I've applied hands-on, and what I'm actively learning."
    >
      <Reveal className="mb-8 flex flex-wrap items-center gap-2" >
        <div role="group" aria-label="Filter skills by level" className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const selected = filter === f
            return (
              <button
                key={f}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(f)}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                  selected
                    ? 'border-fg/80 bg-fg text-bg'
                    : 'border-line-strong text-muted hover:border-subtle hover:text-fg'
                }`}
              >
                {f !== 'all' && (
                  <span className={selected ? 'opacity-80 invert' : ''}>
                    <LevelMeter level={f} />
                  </span>
                )}
                {f === 'all' ? 'All skills' : skillLevels[f].label}
              </button>
            )
          })}
        </div>
        <p className="ml-1 text-xs text-subtle sm:ml-3">
          {filter === 'all' ? 'Hover a card to explore' : skillLevels[filter].description}
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon
          const matches = cat.skills.filter((s) => filter === 'all' || s.level === filter).length
          return (
            <Reveal key={cat.id} delay={(i % 3) * 0.06} className={cat.id === 'qe' ? 'lg:row-span-2' : cat.id === 'ai' ? 'sm:col-span-2' : ''}>
              <article
                className={`group h-full rounded-xl border bg-surface p-5 transition-colors duration-200 hover:border-line-strong hover:bg-elevated/60 ${
                  cat.emerging ? 'border-accent/20' : 'border-line'
                } ${matches === 0 ? 'opacity-40' : ''}`}
              >
                <header className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-lg border border-line-strong bg-elevated text-muted transition-colors group-hover:text-accent">
                      <Icon className="size-[18px]" />
                    </span>
                    <h3 className="font-medium text-fg">{cat.title}</h3>
                  </div>
                  {cat.emerging && (
                    <span className="rounded-full border border-accent/30 px-2 py-0.5 font-mono text-[10px] tracking-wide text-accent uppercase">
                      Emerging
                    </span>
                  )}
                </header>
                <p className="mb-4 text-sm leading-relaxed text-subtle">{cat.summary}</p>
                <ul className={cat.emerging ? 'grid gap-1 sm:grid-cols-2 sm:gap-x-10' : 'space-y-1'}>
                  {cat.skills.map((s) => {
                    const dim = filter !== 'all' && s.level !== filter
                    return (
                      <li
                        key={s.name}
                        className={`flex items-center justify-between gap-3 rounded-md px-2 py-1.5 text-sm transition-opacity duration-200 -mx-2 ${
                          dim ? 'opacity-30' : 'opacity-100'
                        }`}
                      >
                        <span className="text-fg/90">
                          {s.name}
                          {s.note && <span className="ml-1.5 text-xs text-subtle">({s.note})</span>}
                        </span>
                        <span className="flex items-center gap-2" title={skillLevels[s.level].description}>
                          <span className="sr-only">{skillLevels[s.level].label}</span>
                          <LevelMeter level={s.level} />
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
