import { Bot, Building2, Code, Gauge, GitBranch, Layers, Network } from 'lucide-react'
import { profile } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

const focus = [
  { icon: Building2, label: 'Enterprise QA automation' },
  { icon: Layers, label: 'Framework development' },
  { icon: Code, label: 'Java-based automation' },
  { icon: Network, label: 'UI & API testing' },
  { icon: Gauge, label: 'Performance engineering' },
  { icon: GitBranch, label: 'CI/CD integration' },
  { icon: Bot, label: 'AI-driven quality engineering' },
]

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="I build the systems that tell teams whether their software actually works."
    >
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-[17px] leading-relaxed text-muted">
          <p>
            I&apos;m a QA automation engineer working as{' '}
            <span className="text-fg">Member of Technical Staff 2 at {profile.company}</span>, testing enterprise-scale
            software where workflows are long, configurations are many, and a missed regression is expensive. Most of my
            day is spent building and maintaining Java-based automation — UI suites on Selenium and TestNG, API
            validation, and regression pipelines that run in Jenkins.
          </p>
          <p>
            I care about the parts of automation that don&apos;t show up in demos:{' '}
            <span className="text-fg">framework structure that stays readable a year later</span>, failures that
            explain themselves, and CI signals the team actually trusts. I treat flaky tests as bugs, and I treat
            performance as something to monitor continuously — not a pre-release ritual.
          </p>
          <p>
            Lately I&apos;m extending that mindset to AI systems, where &ldquo;correct&rdquo; isn&apos;t a single
            assertion. I&apos;m building evaluation workflows around{' '}
            <span className="text-fg">LLM-as-a-Judge, groundedness and retrieval quality</span> — because AI products
            deserve the same engineering rigour as everything else we ship.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-line bg-surface">
            <p className="border-b border-line px-5 py-3.5 font-mono text-xs tracking-wider text-subtle uppercase">
              Focus areas
            </p>
            <ul className="divide-y divide-line">
              {focus.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 px-5 py-3 text-sm text-fg">
                  <Icon className="size-4 shrink-0 text-subtle" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
