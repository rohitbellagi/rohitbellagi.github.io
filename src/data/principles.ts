import type { Principle } from './types'

export const principles: Principle[] = [
  {
    title: 'Automation should be maintainable',
    body: 'A suite is a product with its own users. Clear layering, no duplication and readable tests matter more than raw test count.',
  },
  {
    title: 'Coverage should be risk-driven',
    body: 'Not every path deserves the same depth. I prioritise by user impact, change frequency and failure cost — not by what is easiest to automate.',
  },
  {
    title: 'API testing complements UI testing',
    body: 'Business rules are verified fastest at the service layer. UI tests then focus on what only the UI can prove: real user journeys.',
  },
  {
    title: 'Flaky tests are investigated, not hidden',
    body: 'A retry that silently passes is a bug report thrown away. Every flake is either a test defect or a product defect — both deserve a root cause.',
  },
  {
    title: 'CI/CD feedback must be fast and reliable',
    body: 'If engineers stop trusting a red build, the pipeline has failed. Fast, deterministic signals are what make automation worth running.',
  },
  {
    title: 'Performance is monitored continuously',
    body: 'Regressions creep in one commit at a time. Baselines and automated comparisons catch the drift before users do.',
  },
  {
    title: 'AI systems need evaluation, not just assertions',
    body: 'Non-deterministic output needs rubrics, curated datasets and judges that are themselves validated — groundedness, relevance and correctness.',
  },
]
