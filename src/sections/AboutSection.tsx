import { useReveal, revealStyle } from "@/hooks/useReveal";
import { stackData } from "@/data/stack";
import { Lang } from "@/types";

// ── About ─────────────────────────────────────────────────────────────────────
export function AboutSection({ lang }: { lang: Lang }) {
  const { ref, vis } = useReveal()
  const en = lang === 'en'
  const stack = en ? stackData.en : stackData.es

  return (
    <section id="about" className="py-24 lg:py-36 border-t border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div ref={ref} style={revealStyle(vis)} className="mb-16">
          <p className="font-mono text-[11px] text-dim tracking-widest uppercase mb-4">
            {en ? '── About' : '── Sobre mí'}
          </p>
          <h2 className="text-4xl lg:text-5xl font-medium text-ink">
            {en ? 'About' : 'Sobre mí'}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            {(() => {
              const { ref: r, vis: v } = useReveal()
              return (
                <div ref={r} style={revealStyle(v)}>
                  <p className="text-ink/80 text-lg leading-relaxed mb-6">
                    {en
                      ? "I'm a developer focused on turning business needs into working digital products. I enjoy working across the full product lifecycle — from Figma and frontend implementation to APIs, databases, deployment and production delivery."
                      : "Soy un desarrollador enfocado en convertir necesidades de negocio en productos digitales funcionales. Disfruto trabajar en todo el ciclo de vida del producto — desde Figma e implementación frontend hasta APIs, bases de datos, despliegue y entrega en producción."}
                  </p>
                  <p className="text-dim text-[15px] leading-relaxed">
                    {en
                      ? 'Based in Venezuela, available worldwide for remote work and freelance projects.'
                      : 'Basado en Venezuela, disponible mundialmente para trabajo remoto y proyectos freelance.'}
                  </p>
                </div>
              )
            })()}
          </div>
          <div>
            {(() => {
              const { ref: r, vis: v } = useReveal()
              return (
                <div ref={r} style={revealStyle(v, 100)} className="grid grid-cols-2 gap-8">
                  {stack.map(group => (
                    <div key={group.group}>
                      <div className="font-mono text-[11px] text-lime/70 tracking-wider uppercase mb-4">{group.group}</div>
                      <ul className="flex flex-col gap-2">
                        {group.items.map(item => (
                          <li key={item} className="text-dim text-sm">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}