import { ArrowUpRight, Check, Copy, FileText, Mail } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { profile } from '../../data/profile'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { Reveal } from '../ui/Reveal'

interface ChannelProps {
  href: string
  icon: ReactNode
  label: string
  value: string
  download?: boolean
}

function Channel({ href, icon, label, value, download }: ChannelProps) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download ? { download: true } : {})}
      className="group flex items-center gap-4 bg-surface p-5 transition-colors hover:bg-elevated"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line-strong bg-elevated text-muted transition-colors group-hover:text-fg">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-subtle">{label}</span>
        <span className="block truncate text-sm text-fg">{value}</span>
      </span>
      <ArrowUpRight className="size-4 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
    </a>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 rotate-180" />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-xs tracking-wider text-subtle uppercase">
            <span className="text-accent">07</span>
            <span className="mx-2 text-line-strong">/</span>
            Contact
          </p>
          <h2 id="contact-title" className="text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
            Let&apos;s build software that users can trust.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            I&apos;m open to Senior SDET and quality engineering roles at product companies. If you&apos;re building
            something where reliability matters, I&apos;d like to hear about it.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-white"
            >
              <Mail className="size-4" /> {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-3 text-sm text-muted transition-colors hover:bg-elevated hover:text-fg"
              aria-live="polite"
            >
              {copied ? <Check className="size-4 text-accent" /> : <Copy className="size-4" />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            <Channel href={profile.links.linkedin} icon={<LinkedInIcon className="size-4" />} label="LinkedIn" value="Connect with me" />
            <Channel href={profile.links.github} icon={<GitHubIcon className="size-4" />} label="GitHub" value="See my code" />
            <Channel href={profile.resumeUrl} icon={<FileText className="size-4" />} label="Resume" value="Download PDF" download />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
