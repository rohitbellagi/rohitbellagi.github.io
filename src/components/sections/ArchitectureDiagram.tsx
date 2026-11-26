import type { ArchitectureLayer } from '../../data/types'

/** Data-driven layered architecture diagram. Top → bottom = request / control flow. */
export function ArchitectureDiagram({ layers, title }: { layers: ArchitectureLayer[]; title: string }) {
  return (
    <figure
      className="rounded-xl border border-line bg-bg/60 p-4 sm:p-5"
      aria-label={`Architecture diagram for ${title}`}
    >
      <ol>
        {layers.map((layer, i) => (
          <li key={layer.name}>
            <div className="grid gap-2 sm:grid-cols-[7.5rem_1fr] sm:items-center sm:gap-4">
              <p className="font-mono text-[10.5px] tracking-wider text-subtle uppercase">
                <span className="mr-1.5 text-accent/70">L{i + 1}</span>
                {layer.name}
              </p>
              <ul className="flex flex-wrap gap-2">
                {layer.nodes.map((node) => (
                  <li
                    key={node}
                    className="rounded-md border border-line-strong bg-elevated px-2.5 py-1.5 font-mono text-[11.5px] text-fg/90"
                  >
                    {node}
                  </li>
                ))}
              </ul>
            </div>
            {i < layers.length - 1 && (
              <div aria-hidden className="flex h-6 items-center sm:pl-[8.5rem]">
                <svg width="12" height="20" viewBox="0 0 12 20" className="ml-3 text-line-strong">
                  <path d="M6 0v15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
                  <path d="M2 12l4 5 4-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="sr-only">
        {layers.map((l) => `${l.name}: ${l.nodes.join(', ')}`).join('. ')}
      </figcaption>
    </figure>
  )
}
