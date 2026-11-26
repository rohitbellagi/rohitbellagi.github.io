import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-start justify-between gap-4 text-sm text-subtle sm:flex-row sm:items-center">
        <p>
          © {year} {profile.name}. Built with React, TypeScript & Tailwind CSS.
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
          Back to top <ArrowUp className="size-3.5" />
        </a>
      </div>
    </footer>
  )
}
