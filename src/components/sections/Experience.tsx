import { experience } from '../../data/experience'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { Tag } from '../ui/Tag'

export function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Engineering Experience"
      title="Quality engineering at enterprise scale."
    >
      <Reveal>
        <article className="overflow-hidden rounded-2xl border border-line bg-surface">
          <header className="grid gap-6 border-b border-line p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">{experience.company}</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Current
                </span>
              </div>
              <p className="mt-1.5 text-muted">
                {experience.role} <span className="text-line-strong">·</span> {experience.team}
              </p>
              <p className="mt-5 max-w-2xl leading-relaxed text-fg/85">{experience.summary}</p>
            </div>
            <p className="font-mono text-sm text-subtle md:text-right">{experience.period}</p>
          </header>

          <div className="p-6 sm:p-8">
            <h4 className="mb-5 font-mono text-[11px] tracking-wider text-subtle uppercase">Areas of work</h4>
            <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {experience.focusAreas.map((a, i, all) => (
                <li
                  key={a.title}
                  className={`bg-surface p-5 transition-colors hover:bg-elevated/70 ${
                    i === all.length - 1 && all.length % 2 === 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <p className="font-medium text-fg">{a.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-subtle">{a.description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="mr-2 font-mono text-[11px] tracking-wider text-subtle uppercase">Day-to-day tools</span>
              {experience.tools.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </article>
        <p className="mt-4 text-xs text-subtle">
          Described at a high level — no confidential product details, internal architecture or customer information.
        </p>
      </Reveal>
    </Section>
  )
}
