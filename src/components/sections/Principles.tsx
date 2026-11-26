import { principles } from '../../data/principles'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Principles() {
  return (
    <Section
      id="principles"
      index="05"
      eyebrow="Engineering Principles"
      title="How I approach quality engineering."
      description="The working beliefs behind the frameworks I build and the trade-offs I make."
    >
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        {principles.map((p, i) => (
          <li
            key={p.title}
            className={`bg-bg ${i === principles.length - 1 && principles.length % 2 === 1 ? 'md:col-span-2' : ''}`}
          >
            <Reveal delay={(i % 2) * 0.05} className="group flex h-full gap-5 p-6 transition-colors hover:bg-surface sm:p-8">
              <span className="font-mono text-sm text-subtle transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-medium text-fg">{p.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
