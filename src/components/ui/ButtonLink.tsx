import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  children: ReactNode
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-150 select-none'

const variants: Record<Variant, string> = {
  primary: 'bg-fg text-bg hover:bg-white',
  secondary: 'border border-line-strong bg-elevated text-fg hover:border-subtle/60 hover:bg-[#1a1a1f]',
  ghost: 'text-muted hover:bg-elevated hover:text-fg',
}

export function ButtonLink({ variant = 'secondary', className = '', children, ...props }: ButtonLinkProps) {
  const isExternal = props.href?.startsWith('http')
  return (
    <a
      className={`${base} ${variants[variant]} ${className}`}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
}
