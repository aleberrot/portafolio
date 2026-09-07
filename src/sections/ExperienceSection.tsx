import { expData } from "@/data/experience";
import { useReveal, revealStyle } from "@/hooks/useReveal";
import { Lang } from "@/types";

// ── Experience ────────────────────────────────────────────────────────────────
export function ExperienceSection({ lang }: { lang: Lang }) {
  const { ref, vis } = useReveal()
  const en = lang === 'en'
  const entries = en ? expData.en : expData.es

  return (
    <section id="experience" className="py-24 lg:py-36 border-t border-line">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div ref={ref} style={revealStyle(vis)} className="mb-16 lg:mb-20">
          <p className="font-mono text-[11px] text-dim tracking-widest uppercase mb-4">
            {en ? '── Experience' : '── Experiencia'}
          </p>
          <h2 className="text-4xl lg:text-5xl font-medium text-ink">
            {en ? 'Experience' : 'Experiencia'}
          </h2>
        </div>
        <div className="max-w-3xl">
          {entries.map((entry, i) => {
            const { ref: r, vis: v } = useReveal()
            return (
              <div key={entry.company} ref={r} style={revealStyle(v, i * 100)} className="flex gap-8 lg:gap-12 pb-14 last:pb-0">
                <div className="flex flex-col items-center pt-2">
                  <div className="w-2 h-2 rounded-full bg-lime flex-shrink-0" />
                  {i < entries.length - 1 && <div className="w-px flex-1 bg-line mt-3" />}
                </div>
                <div className="pb-4">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                    <h3 className="text-ink font-semibold text-xl">{entry.company}</h3>
                    <span className="text-dim text-sm">{entry.role}</span>
                    <span className="font-mono text-[11px] text-lime/70 ml-auto">{entry.period}</span>
                  </div>
                  <p className="text-dim leading-relaxed text-[15px]">{entry.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}