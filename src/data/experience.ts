import type { FocusArea } from './types'

/**
 * Kept intentionally general: no confidential details, internal architecture,
 * customer data or invented metrics.
 */
export const experience = {
  company: 'Nutanix',
  role: 'Member of Technical Staff 2 (MTS-2)',
  team: 'QA Automation',
  period: 'Present', // e.g. 'Jul 2022 — Present'
  summary:
    'I test enterprise software where workflows are long, configuration paths are many, and regressions are costly. My work spans UI and API automation, regression suites, CI pipeline health and performance benchmarking.',
  focusAreas: [
    {
      title: 'Enterprise product testing',
      description: 'End-to-end validation of enterprise workflows with many configuration paths and dependencies.',
    },
    {
      title: 'Sizer QA automation',
      description: 'Building and maintaining automated coverage for Sizer workflows across UI and API layers.',
    },
    {
      title: 'Jenkins PR builder stability',
      description: 'Investigating pipeline failures so pre-merge signals stay reliable and worth trusting.',
    },
    {
      title: 'Performance benchmark monitoring',
      description: 'Tracking benchmark runs over time and flagging response-time regressions early.',
    },
    {
      title: 'Test coverage improvements',
      description: 'Finding gaps in existing coverage and adding tests where product risk is highest.',
    },
    {
      title: 'Regression automation',
      description: 'Expanding and maintaining regression suites that run continuously on change.',
    },
    {
      title: 'API validation',
      description: 'Verifying request/response contracts, status codes and error handling at the service layer.',
    },
    {
      title: 'Playwright framework development',
      description: 'Building a reusable Playwright framework with TypeScript/JavaScript using modern browser-automation practices.',
    },
    {
      title: 'Complex enterprise workflows',
      description: 'Automating long, stateful multi-step scenarios with reliable setup and teardown.',
    },
  ] satisfies FocusArea[],
  tools: ['Java', 'Selenium', 'Playwright', 'TestNG', 'REST APIs', 'JMeter', 'Jenkins', 'Maven', 'Git'],
}
