
import { Lang } from "@/types";
import { useReveal, revealStyle } from "@/hooks/useReveal";
import { servicesData } from "@/data/services";


// ── Services ──────────────────────────────────────────────────────────────────
export function ServicesSection({ lang }: { lang: Lang }) {
  const { ref, vis } = useReveal()
  const en = lang === 'en'
  const items = en ? servicesData.en : servicesData.es

  return (
    <section id="services" className="py-24 lg:py-36 border-t border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div ref={ref} style={revealStyle(vis)} className="mb-16 lg:mb-24">
          <p className="font-mono text-[11px] text-dim tracking-widest uppercase mb-4">
            {en ? '── Services' : '── Servicios'}
          </p>
          <h2 className="text-4xl lg:text-5xl font-medium text-ink">
            {en ? 'What I do' : 'Qué hago'}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
          {items.map((svc, i) => {
            const { ref: r, vis: v } = useReveal()
            return (
              <div key={svc.verb} ref={r} style={revealStyle(v, i * 80)} className="bg-panel p-10 lg:p-12">
                <div className="font-display italic text-[52px] lg:text-[64px] text-ink leading-none mb-8">{svc.verb}</div>
                <p className="text-ink/70 text-[15px] leading-relaxed mb-8">{svc.tagline}</p>
                <ul className="flex flex-col gap-2.5">
                  {svc.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-dim text-sm">
                      <span className="w-1 h-1 rounded-full bg-lime flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="mt-px bg-line">
          <div className="bg-panel p-10 lg:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="font-mono text-lime text-xs tracking-widest uppercase mb-2">
                {en ? 'Also' : 'También'}
              </div>
              <div className="text-ink font-medium text-xl">
                {en ? 'Automation & Backend' : 'Automatización & Backend'}
              </div>
            </div>
            <p className="text-dim text-[15px] max-w-sm">
              {en ? 'Python automation, APIs and data workflows for business processes.' : 'Automatización con Python, APIs y flujos de datos para procesos de negocio.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}