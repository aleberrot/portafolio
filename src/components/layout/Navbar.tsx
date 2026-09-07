import { useState, useEffect } from "react";
import { Lang } from "@/types";

// ── Nav ───────────────────────────────────────────────────────────────────────
export function Nav({ lang, setLang, onScrollTo, onHome }: {
  lang: Lang
  setLang: (l: Lang) => void
  onScrollTo: (id: string) => void
  onHome: () => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = lang === 'en'
    ? [['Work', 'work'], ['Services', 'services'], ['Experience', 'experience'], ['About', 'about'], ['Contact', 'contact']]
    : [['Trabajo', 'work'], ['Servicios', 'services'], ['Experiencia', 'experience'], ['Sobre mí', 'about'], ['Contacto', 'contact']]

  const ctaLabel = lang === 'en' ? "Let's talk" : 'Hablemos'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-canvas/88 backdrop-blur-xl border-b border-line' : ''}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        <button onClick={onHome} className="font-mono text-sm text-ink/70 hover:text-ink transition-colors tracking-[0.12em]">
          AB
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => onScrollTo(id)} className="text-sm text-dim hover:text-ink transition-colors duration-200">
              {label}
            </button>
          ))}
          <div className="flex items-center gap-0.5 font-mono text-xs ml-2">
            <button onClick={() => setLang('en')} className={`px-1.5 py-1 transition-colors ${lang === 'en' ? 'text-ink' : 'text-dim hover:text-ink/60'}`}>EN</button>
            <span className="text-line">/</span>
            <button onClick={() => setLang('es')} className={`px-1.5 py-1 transition-colors ${lang === 'es' ? 'text-ink' : 'text-dim hover:text-ink/60'}`}>ES</button>
          </div>
          <button onClick={() => onScrollTo('contact')} className="px-5 py-2 bg-lime text-canvas text-sm font-medium rounded-full hover:bg-lime/90 transition-colors">
            {ctaLabel}
          </button>
        </div>
        <div className="flex md:hidden items-center gap-4">
          <div className="flex items-center font-mono text-xs">
            <button onClick={() => setLang('en')} className={`px-1.5 ${lang === 'en' ? 'text-ink' : 'text-dim'}`}>EN</button>
            <span className="text-dim">/</span>
            <button onClick={() => setLang('es')} className={`px-1.5 ${lang === 'es' ? 'text-ink' : 'text-dim'}`}>ES</button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-ink p-1 flex flex-col gap-[5px] w-6" aria-label="Menu">
            <div className={`h-px w-full bg-current origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <div className={`h-px w-full bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <div className={`h-px w-full bg-current origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-canvas/98 backdrop-blur-xl border-t border-line px-6 py-8 flex flex-col gap-6">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => { onScrollTo(id); setMenuOpen(false) }} className="text-left text-xl text-ink">
              {label}
            </button>
          ))}
          <button onClick={() => { onScrollTo('contact'); setMenuOpen(false) }} className="mt-2 px-5 py-2.5 bg-lime text-canvas text-sm font-medium rounded-full w-fit">
            {ctaLabel}
          </button>
        </div>
      )}
    </nav>
  )
}