import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  index: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  children: ReactNode
  className?: string
}

export function Section({ id, index, eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`border-t border-line py-24 sm:py-32 ${className}`}>
      <div className="container-page">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-xs tracking-wider text-subtle uppercase">
            <span className="text-accent">{index}</span>
            <span className="mx-2 text-line-strong">/</span>
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight text-balance text-fg sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
