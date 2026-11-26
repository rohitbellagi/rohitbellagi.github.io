import { ArrowUpRight, Code } from 'lucide-react'
import { approachSteps, dsaTopics } from '../../data/dsa'
import { profile } from '../../data/profile'
import { GitHubIcon } from '../ui/BrandIcons'
import { ButtonLink } from '../ui/ButtonLink'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function ProblemSolving() {
  return (
    <Section
      id="problem-solving"
      index="06"
      eyebrow="Coding & Problem Solving"
      title="Sharpening fundamentals, one pattern at a time."
      description="Ongoing, structured DSA practice in Java — organised by pattern rather than by problem count."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
        <Reveal>
          <h3 className="mb-5 font-mono text-[11px] tracking-wider text-subtle uppercase">How I work a problem</h3>
          <ol className="relative space-y-6 border-l border-line pl-6">
            {approachSteps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="absolute top-0.5 -left-[31px] grid size-[13px] place-items-center rounded-full border border-line-strong bg-bg">
                  <span className={`size-[5px] rounded-full ${i === approachSteps.length - 1 ? 'bg-accent' : 'bg-subtle'}`} />
                </span>
                <p className="text-sm font-medium text-fg">{s.title}</p>
                <p className="mt-1 text-sm text-subtle">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap gap-3">
            {profile.links.leetcode && (
              <ButtonLink href={profile.links.leetcode}>
                <Code className="size-4" /> LeetCode profile
                <ArrowUpRight className="size-3.5 text-subtle" />
              </ButtonLink>
            )}
            <ButtonLink href={profile.links.github}>
              <GitHubIcon className="size-4" /> Solutions on GitHub
              <ArrowUpRight className="size-3.5 text-subtle" />
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {dsaTopics.map((t) => (
              <li
                key={t.name}
                className="group rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong"
              >
                <p className="flex items-center gap-2 text-sm font-medium text-fg">
                  <span className="font-mono text-accent/70 transition-colors group-hover:text-accent">{'{ }'}</span>
                  {t.name}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-subtle">{t.patterns}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
