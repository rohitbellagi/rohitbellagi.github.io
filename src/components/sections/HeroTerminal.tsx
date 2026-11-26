import { motion, useReducedMotion } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

/** Illustrative quality-gate pipeline — a visual metaphor, not real run data. */
const stages = [
  { name: 'build', detail: 'mvn clean verify', result: 'passed' },
  { name: 'ui', detail: 'testng · parallel', result: 'passed' },
  { name: 'api', detail: 'rest-assured · ±cases', result: 'passed' },
  { name: 'perf', detail: 'jmeter · vs baseline', result: 'no regression' },
  { name: 'ai-eval', detail: 'llm-judge · grounded', result: 'passed' },
]

const STEP_MS = 750

export function HeroTerminal() {
  const reduce = useReducedMotion()
  const [tick, setTick] = useState(0)
  const step = reduce ? stages.length : tick

  useEffect(() => {
    if (reduce || tick >= stages.length) return
    const t = setTimeout(() => setTick((s) => s + 1), tick === 0 ? 1100 : STEP_MS)
    return () => clearTimeout(t)
  }, [tick, reduce])

  const done = step >= stages.length

  return (
    <div className="relative" aria-label="Illustration: a CI pipeline running quality gates" role="img">
      {/* soft accent glow */}
      <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-accent/[0.06] blur-3xl" />

      <div className="overflow-hidden rounded-xl border border-line-strong bg-surface shadow-2xl shadow-black/50">
        {/* window chrome */}
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
          </div>
          <p className="font-mono text-xs text-subtle">quality-pipeline — main</p>
        </div>

        <div className="space-y-1 p-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
          <p className="text-muted">
            <span className="text-accent">$</span> ./run-quality-gates.sh <span className="text-subtle">--env staging</span>
          </p>

          <ul className="mt-3 space-y-2">
            {stages.map((s, i) => {
              const state = i < step ? 'done' : i === step ? 'running' : 'pending'
              return (
                <li
                  key={s.name}
                  className={`grid grid-cols-[1rem_4.25rem_1fr] items-start gap-2 transition-opacity duration-300 sm:grid-cols-[1rem_4.75rem_1fr_auto] ${
                    state === 'pending' ? 'opacity-35' : 'opacity-100'
                  }`}
                >
                  <span className="mt-[3px] grid size-4 place-items-center">
                    {state === 'done' && <Check className="size-3.5 text-accent" strokeWidth={3} />}
                    {state === 'running' && <Loader2 className="size-3.5 animate-spin text-warn" />}
                    {state === 'pending' && <span className="size-1.5 rounded-full bg-subtle" />}
                  </span>
                  <span className="text-fg">{s.name}</span>
                  <span className="truncate text-subtle">{s.detail}</span>
                  <span
                    className={`col-start-3 text-[11.5px] sm:col-start-auto sm:text-right ${
                      state === 'done' ? 'text-accent' : 'text-transparent'
                    }`}
                  >
                    {state === 'done' ? s.result : '·'}
                  </span>
                </li>
              )
            })}
          </ul>

          <div className="mt-4 border-t border-dashed border-line pt-4">
            {done ? (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-fg"
              >
                <span className="rounded bg-accent-dim px-1.5 py-0.5 text-[11px] text-accent">PASS</span>
                All gates green — ready to merge
                <span aria-hidden className="ml-0.5 inline-block h-4 w-[7px] animate-pulse bg-muted/70" />
              </motion.p>
            ) : (
              <p className="text-subtle">
                running stage {Math.min(step + 1, stages.length)}/{stages.length}…
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
