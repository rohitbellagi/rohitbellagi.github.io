import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { ButtonLink } from '../ui/ButtonLink'
import { GitHubIcon } from '../ui/BrandIcons'
import { HeroTerminal } from './HeroTerminal'

const ease = [0.21, 0.47, 0.32, 0.98] as const

const coreStack = ['Java', 'Selenium', 'TestNG', 'REST Assured', 'JMeter', 'Jenkins']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/80 py-1 pr-3 pl-2 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            MTS-2 · QA Automation at {profile.company}
          </p>

          <h1 className="text-[2.5rem] leading-[1.06] font-semibold tracking-[-0.035em] sm:text-6xl lg:text-[3.1rem] xl:text-[3.4rem]">
            <span className="sm:whitespace-nowrap">Engineering Quality.</span>
            <br />
            <span className="text-subtle sm:whitespace-nowrap">Automating Confidence.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            I&apos;m {profile.firstName}, an SDET focused on building reliable automation frameworks, scalable testing
            solutions, and quality engineering systems for complex software products.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects" variant="primary">
              View My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href={profile.links.github} variant="secondary">
              <GitHubIcon className="size-4" />
              Explore My GitHub
            </ButtonLink>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-1">
            <ButtonLink href={profile.resumeUrl} download variant="ghost" className="-ml-4">
              <Download className="size-4" />
              Download Resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              <Mail className="size-4" />
              Contact Me
            </ButtonLink>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-2.5 gap-y-2 font-mono text-xs text-subtle">
            <span className="mr-1 text-muted">core stack:</span>
            {coreStack.map((s, i) => (
              <span key={s}>
                {s}
                {i < coreStack.length - 1 && <span className="ml-2.5 text-line-strong">/</span>}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <HeroTerminal />
        </motion.div>
      </div>
    </section>
  )
}
