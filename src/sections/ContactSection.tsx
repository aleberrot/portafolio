import { useReveal, revealStyle } from "@/hooks/useReveal";
import { Lang } from "@/types";
import { ArrowRight } from "@/components/ui/icons";

// ── Contact ───────────────────────────────────────────────────────────────────
export function ContactSection({ lang }: { lang: Lang }) {
  const { ref, vis } = useReveal()
  const en = lang === 'en'

  return (
    <section id="contact" className="py-28 lg:py-44 border-t border-line">
      <div ref={ref} style={revealStyle(vis)} className="max-w-[1440px] mx-auto px-6 lg:px-16 text-center">
        <p className="font-mono text-[11px] text-dim tracking-widest uppercase mb-8">
          {en ? '── Contact' : '── Contacto'}
        </p>
        <h2 className="font-display italic text-[clamp(36px,5.5vw,80px)] text-ink leading-tight mb-7 max-w-3xl mx-auto">
          {en ? 'Have a project in mind?' : '¿Tienes un proyecto en mente?'}
        </h2>
        <p className="text-dim text-lg max-w-lg mx-auto mb-12">
          {en
            ? "I'm available for freelance projects, product development and remote opportunities."
            : 'Estoy disponible para proyectos freelance, desarrollo de productos y oportunidades remotas.'}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:berroteranbas@gmail.com" className="flex items-center gap-2.5 px-7 py-3.5 bg-lime text-canvas font-medium text-sm rounded-full hover:bg-lime/90 transition-all duration-200">
            {en ? "Let's work together" : 'Trabajemos juntos'}
            <ArrowRight />
          </a>
          <a href="mailto:berroteranbas@gmail.com" className="flex items-center gap-2.5 px-7 py-3.5 border border-ink/18 text-ink text-sm rounded-full hover:border-ink/40 hover:bg-ink/4 transition-all duration-200">
            {en ? 'Email me' : 'Escríbeme'}
          </a>
        </div>
      </div>
    </section>
  )
}
