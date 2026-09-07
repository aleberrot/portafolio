import { Lang } from "@/types";
import { useEffect, useState } from "react";
import { revealStyle } from "@/hooks/useReveal";
import { ArrowLeft, ArrowRight, GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";

// ── Hero ──────────────────────────────────────────────────────────────────────
export function HeroSection({ lang, onScrollTo }: { lang: Lang; onScrollTo: (id: string) => void }) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t) }, [])
  const en = lang === 'en'

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 lg:px-16 max-w-[1440px] mx-auto">
      <div style={revealStyle(loaded, 0)} className="mb-8">
        <p className="font-mono text-lime text-[11px] tracking-[0.22em] uppercase">
          {en ? 'Full-Stack & Mobile Developer' : 'Desarrollador Full-Stack & Mobile'}
        </p>
      </div>

      <div style={revealStyle(loaded, 120)}>
        <h1 className="font-display text-[clamp(44px,7vw,96px)] leading-[1.0] tracking-tight text-ink mb-8">
          {en ? (
            <>I design, <em className="italic">build</em><br />and deploy<br />digital products<br />for real businesses.</>
          ) : (
            <>Diseño, <em className="italic">construyo</em><br />y despliego<br />productos digitales<br />para negocios reales.</>
          )}
        </h1>
      </div>

      <div style={revealStyle(loaded, 240)} className="max-w-lg mb-10">
        <p className="text-dim text-lg leading-relaxed">
          {en
            ? 'From full-stack platforms and production mobile apps to business websites designed to generate opportunities.'
            : 'Desde plataformas full-stack y apps móviles en producción hasta sitios web diseñados para generar oportunidades.'}
        </p>
      </div>

      <div style={revealStyle(loaded, 340)} className="flex flex-wrap items-center gap-4 mb-16">
        <button onClick={() => onScrollTo('work')} className="flex items-center gap-2.5 px-6 py-3 bg-lime text-canvas font-medium text-sm rounded-full hover:bg-lime/90 transition-all duration-200">
          {en ? 'View my work' : 'Ver mi trabajo'}
          <ArrowRight />
        </button>
        <button onClick={() => onScrollTo('contact')} className="flex items-center gap-2.5 px-6 py-3 border border-ink/18 text-ink text-sm rounded-full hover:border-ink/40 hover:bg-ink/4 transition-all duration-200">
          {en ? "Let's work together" : 'Trabajemos juntos'}
        </button>
      </div>

      <div style={revealStyle(loaded, 440)} className="flex items-center gap-5">
        <a href="https://github.com/aberrotaran" target="_blank" rel="noopener noreferrer" className="text-dim hover:text-ink transition-colors duration-200" aria-label="GitHub">
          <GithubIcon />
        </a>
        <a href="https://linkedin.com/in/alejandro-berrotaran" target="_blank" rel="noopener noreferrer" className="text-dim hover:text-ink transition-colors duration-200" aria-label="LinkedIn">
          <LinkedinIcon />
        </a>
        <a href="mailto:hola@alejandroberrotaran.dev" className="text-dim hover:text-ink transition-colors duration-200" aria-label="Email">
          <MailIcon />
        </a>
      </div>
    </section>
  )
}