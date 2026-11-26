import type { DsaTopic } from './types'

export const dsaTopics: DsaTopic[] = [
  { name: 'Arrays', patterns: 'Prefix sums, in-place updates, Kadane’s algorithm' },
  { name: 'Strings', patterns: 'Frequency counting, palindromes, parsing' },
  { name: 'HashMap', patterns: 'Lookups, grouping, complement search' },
  { name: 'Two Pointers', patterns: 'Opposite ends, fast/slow, partitioning' },
  { name: 'Sliding Window', patterns: 'Fixed and variable windows, window state' },
  { name: 'Sorting', patterns: 'Custom comparators, merge & quick sort' },
  { name: 'Searching', patterns: 'Binary search on index and on answer' },
  { name: 'Recursion', patterns: 'Base cases, backtracking, divide & conquer' },
  { name: 'Data Structures', patterns: 'Stacks, queues, linked lists, trees, heaps' },
]

/** An SDET's angle on problem solving. */
export const approachSteps = [
  { title: 'Clarify', body: 'Restate the problem, constraints and expected I/O.' },
  { title: 'Brute force', body: 'Get a correct baseline before optimising.' },
  { title: 'Optimise', body: 'Pick the pattern; reason about time and space.' },
  { title: 'Test like a tester', body: 'Empty input, duplicates, boundaries, overflow.' },
]
