import { Bot, Code, Gauge, GitBranch, Layers, Monitor, Network } from 'lucide-react'
import type { SkillCategory, SkillLevel } from './types'

/**
 * Qualitative levels — deliberately no percentages.
 * Adjust each skill's `level` to reflect your honest self-assessment.
 */
export const skillLevels: Record<SkillLevel, { label: string; description: string; rank: number }> = {
  daily: { label: 'Professional', description: 'Used in day-to-day professional work', rank: 3 },
  working: { label: 'Working', description: 'Hands-on; applied in projects', rank: 2 },
  learning: { label: 'Learning', description: 'Actively building depth', rank: 1 },
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    icon: Code,
    summary: 'Java is my primary language for automation and tooling.',
    skills: [
      { name: 'Java', level: 'daily' },
      { name: 'Python', level: 'working', note: 'fundamentals' },
      { name: 'JavaScript / TypeScript', level: 'learning' },
    ],
  },
  {
    id: 'ui',
    title: 'UI Automation',
    icon: Monitor,
    summary: 'Maintainable browser automation with clear layering.',
    skills: [
      { name: 'Selenium WebDriver', level: 'daily' },
      { name: 'TestNG', level: 'daily' },
      { name: 'Page Object Model', level: 'daily' },
      { name: 'Playwright', level: 'working' },
    ],
  },
  {
    id: 'api',
    title: 'API Automation',
    icon: Network,
    summary: 'Contract, functional and negative testing at the service layer.',
    skills: [
      { name: 'REST API testing', level: 'daily' },
      { name: 'Postman', level: 'daily' },
      { name: 'REST Assured', level: 'working' },
      { name: 'Karate', level: 'working' },
    ],
  },
  {
    id: 'performance',
    title: 'Performance Testing',
    icon: Gauge,
    summary: 'Baselines, benchmarks and catching regressions early.',
    skills: [
      { name: 'JMeter', level: 'daily' },
      { name: 'Performance benchmarking', level: 'daily' },
      { name: 'Response-time analysis', level: 'daily' },
    ],
  },
  {
    id: 'cicd',
    title: 'DevOps & CI/CD',
    icon: GitBranch,
    summary: 'Tests that run where decisions are made — in the pipeline.',
    skills: [
      { name: 'Jenkins', level: 'daily' },
      { name: 'Maven', level: 'daily' },
      { name: 'Git & GitHub', level: 'daily' },
    ],
  },
  {
    id: 'qe',
    title: 'Quality Engineering',
    icon: Layers,
    summary: 'The architecture decisions that make suites scale.',
    skills: [
      { name: 'Framework architecture', level: 'daily' },
      { name: 'Data-driven testing', level: 'daily' },
      { name: 'JSON-driven automation', level: 'daily' },
      { name: 'Parallel execution', level: 'daily' },
      { name: 'TestNG execution strategies', level: 'daily' },
      { name: 'Retry mechanisms', level: 'daily' },
      { name: 'Regression testing', level: 'daily' },
      { name: 'Test reporting', level: 'daily' },
    ],
  },
  {
    id: 'ai',
    title: 'AI Testing',
    icon: Bot,
    summary: 'Emerging focus: evaluating LLM and agentic systems.',
    emerging: true,
    skills: [
      { name: 'LLM-as-a-Judge', level: 'learning' },
      { name: 'AI evaluation frameworks', level: 'learning' },
      { name: 'Groundedness & relevance evaluation', level: 'learning' },
      { name: 'Prompt engineering', level: 'working' },
      { name: 'MCP fundamentals', level: 'learning' },
      { name: 'AI agent testing', level: 'learning' },
    ],
  },
]
