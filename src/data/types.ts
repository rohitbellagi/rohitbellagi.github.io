import type { LucideIcon } from 'lucide-react'

export type SkillLevel = 'daily' | 'working' | 'learning'

export interface Skill {
  name: string
  level: SkillLevel
  note?: string
}

export interface SkillCategory {
  id: string
  title: string
  icon: LucideIcon
  summary: string
  emerging?: boolean
  skills: Skill[]
}

/** Change a project's status here as work progresses. */
export type ProjectStatus = 'planned' | 'in-progress' | 'completed'

export interface ArchitectureLayer {
  name: string
  nodes: string[]
}

export interface Project {
  id: string
  title: string
  tagline: string
  icon: LucideIcon
  status: ProjectStatus
  problem: string
  implementation: string[]
  architecture: ArchitectureLayer[]
  stack: string[]
  /** Leave undefined until the repository is public. */
  repoUrl?: string
  example?: {
    caption: string
    filename: string
    code: string
  }
}

export interface FocusArea {
  title: string
  description: string
}

export interface Principle {
  title: string
  body: string
}

export interface DsaTopic {
  name: string
  patterns: string
}
