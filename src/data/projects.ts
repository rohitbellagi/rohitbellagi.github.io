import { Bot, Gauge, Monitor, Network, Theater } from 'lucide-react'
import type { Project } from './types'

/**
 * Portfolio projects. Status is honest by design:
 * set `status` to 'planned' | 'in-progress' | 'completed'
 * and add `repoUrl` once a repository is public.
 */
export const projects: Project[] = [
  {
    id: 'selenium-framework',
    title: 'Java Selenium Automation Framework',
    tagline: 'A layered, JSON-driven UI automation framework built for parallel execution and readable failures.',
    icon: Monitor,
    status: 'planned',
    problem:
      'UI suites tend to decay: locators leak into tests, data is hard-coded, parallel runs collide on shared drivers, and a single flaky step turns the whole report red. The goal is a framework where adding a test is cheap and a failure explains itself.',
    implementation: [
      'Page Object Model with a base page for waits, actions and logging',
      'Thread-safe WebDriver management via ThreadLocal for parallel runs',
      'JSON test data bound to TestNG DataProviders — no hard-coded inputs',
      'Retry analyzer that records every retry instead of silently masking it',
      'Reusable utilities: explicit waits, config loader, screenshot capture',
      'Extent Reports with step logs and screenshots on failure',
      'TestNG suite XMLs for smoke, regression and parallel strategies',
      'Maven profiles for environment and browser selection',
    ],
    architecture: [
      { name: 'Execution', nodes: ['TestNG suites', 'Maven profiles', 'Jenkins'] },
      { name: 'Tests', nodes: ['Test classes', 'DataProviders', 'Assertions'] },
      { name: 'Pages', nodes: ['Page Objects', 'Base Page', 'Components'] },
      { name: 'Core', nodes: ['Driver Factory (ThreadLocal)', 'Wait utils', 'Config'] },
      { name: 'Data & Reports', nodes: ['JSON test data', 'Retry analyzer', 'Extent Reports'] },
    ],
    stack: ['Java 17', 'Selenium WebDriver', 'TestNG', 'Maven', 'Page Object Model', 'Extent Reports', 'Jackson'],
  },
  {
    id: 'api-framework',
    title: 'REST API Automation Framework',
    tagline: 'Service-layer tests with reusable request specs, schema validation and deliberate negative coverage.',
    icon: Network,
    status: 'planned',
    problem:
      'API tests often only cover the happy path and duplicate request setup across every test. That leaves error handling, auth edge cases and contract drift untested — exactly where production incidents come from.',
    implementation: [
      'Reusable request/response specifications with REST Assured',
      'Authentication handling abstracted into a token provider',
      'JSON-driven test data for positive and negative scenarios',
      'Response validation: status, headers, body fields and JSON schema',
      'Negative coverage: invalid payloads, missing auth, boundary values',
      'POJO serialization for typed request bodies',
      'Request/response logging attached to reports for fast triage',
      'TestNG groups to run smoke vs. full API regression',
    ],
    architecture: [
      { name: 'Tests', nodes: ['Positive suites', 'Negative suites', 'TestNG groups'] },
      { name: 'Clients', nodes: ['Endpoint clients', 'Request specs', 'Auth provider'] },
      { name: 'Validation', nodes: ['Status & headers', 'Body assertions', 'JSON schema'] },
      { name: 'Data & Reports', nodes: ['JSON test data', 'POJOs', 'API report + logs'] },
    ],
    stack: ['Java', 'REST Assured', 'TestNG', 'Maven', 'JSON Schema Validator', 'Jackson'],
  },
  {
    id: 'performance-framework',
    title: 'Performance Benchmarking Framework',
    tagline: 'Repeatable JMeter benchmarks compared against stored baselines to catch regressions in CI.',
    icon: Gauge,
    status: 'planned',
    problem:
      'Performance tests run once before a release tell you very little. Without a stored baseline and an automated comparison, a slow creep in response time goes unnoticed until users feel it.',
    implementation: [
      'Parameterized JMeter test plans executed headless from the CLI',
      'Baseline management: versioned results for each benchmark scenario',
      'Response-time analysis on p50 / p90 / p95 and error rate',
      'Configurable regression thresholds per scenario',
      'Automatic comparison of the current run against the baseline',
      'Pass / fail gate that a CI pipeline can act on',
      'HTML dashboard and a concise comparison summary',
    ],
    architecture: [
      { name: 'Trigger', nodes: ['Jenkins job', 'Scenario config'] },
      { name: 'Execution', nodes: ['JMeter (non-GUI)', 'Test plans', 'Result files'] },
      { name: 'Analysis', nodes: ['Percentile calculation', 'Baseline store', 'Threshold rules'] },
      { name: 'Outcome', nodes: ['Regression verdict', 'HTML dashboard', 'Build status'] },
    ],
    stack: ['Apache JMeter', 'Jenkins', 'Java / Python scripts', 'CSV / JSON results'],
  },
  {
    id: 'ai-evaluation',
    title: 'AI Application Testing & Evaluation',
    tagline: 'An evaluation harness for an enterprise knowledge assistant — measuring whether answers are grounded, relevant and correct.',
    icon: Bot,
    status: 'planned',
    problem:
      'An enterprise knowledge assistant answers employee questions from internal documents (policies, runbooks, FAQs). A traditional assertion cannot judge a free-text answer. The real risks are confident hallucinations, answers not supported by the retrieved sources, and retrieval that returns the wrong documents.',
    implementation: [
      'Versioned evaluation dataset: question, expected facts, source documents',
      'Retrieval validation — did the right documents come back?',
      'LLM-as-a-Judge with explicit rubrics and required reasoning',
      'Groundedness: is every claim supported by retrieved context?',
      'Relevance: does the answer address the question asked?',
      'Correctness against expected facts, plus hallucination flags',
      'Judge calibration against a small human-labelled sample',
      'Automated evaluation report with per-case reasoning',
    ],
    architecture: [
      { name: 'Dataset', nodes: ['Eval questions', 'Expected facts', 'Source docs'] },
      { name: 'System under test', nodes: ['Retriever', 'Knowledge assistant (LLM)'] },
      { name: 'Evaluators', nodes: ['Retrieval check', 'LLM judge', 'Rule-based checks'] },
      { name: 'Metrics', nodes: ['Groundedness', 'Relevance', 'Correctness', 'Hallucination'] },
      { name: 'Output', nodes: ['Evaluation report', 'Regression comparison'] },
    ],
    stack: ['Python', 'LLM APIs', 'LLM-as-a-Judge', 'pytest', 'JSON datasets'],
    example: {
      caption: 'Illustrative evaluation record — a sample of the planned format, not real results.',
      filename: 'eval_case.json',
      code: `{
  "id": "hr-policy-014",
  "question": "Can I carry over unused leave to next year?",
  "expected_facts": ["carry-over is allowed", "a cap applies per policy"],
  "retrieval": {
    "expected_sources": ["leave-policy.md"],
    "retrieved_sources": ["leave-policy.md", "holiday-calendar.md"],
    "hit": true
  },
  "judge": {
    "groundedness": { "verdict": "pass", "reason": "Each claim maps to leave-policy.md" },
    "relevance":    { "verdict": "pass", "reason": "Directly answers the question" },
    "correctness":  { "verdict": "pass", "reason": "Both expected facts present" },
    "hallucination": false
  }
}`,
    },
  },
  {
    id: 'playwright-framework',
    title: 'Playwright Automation Framework',
    tagline: 'A public, from-scratch take on the Playwright work I do professionally — TypeScript UI + API automation with fixtures, parallel workers and CI built in.',
    icon: Theater,
    status: 'planned',
    problem:
      'Teams moving to Playwright often port Selenium habits directly — manual waits, global state, duplicated setup. This framework uses Playwright the way it was designed: fixtures for setup, auto-waiting, and API calls to arrange state quickly.',
    implementation: [
      'Page Object Model written in strict TypeScript',
      'Custom fixtures for pages, authenticated state and test data',
      'API testing with the request context — and API-driven test setup',
      'Parallel execution across workers and browser projects',
      'Trace, screenshot and video capture on failure',
      'GitHub Actions workflow with sharding and HTML report artifact',
    ],
    architecture: [
      { name: 'CI', nodes: ['GitHub Actions', 'Sharding', 'Report artifact'] },
      { name: 'Tests', nodes: ['UI specs', 'API specs'] },
      { name: 'Fixtures', nodes: ['Page fixtures', 'Auth state', 'Test data'] },
      { name: 'Pages & Clients', nodes: ['Page Objects', 'API request context'] },
      { name: 'Runner', nodes: ['Playwright Test', 'Browser projects', 'Traces'] },
    ],
    stack: ['Playwright', 'TypeScript', 'Node.js', 'GitHub Actions'],
  },
]
