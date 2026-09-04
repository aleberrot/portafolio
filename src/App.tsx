import { useState, useEffect, useRef } from 'react';
import { useReveal, revealStyle } from './hooks/useReveal';
import { GithubIcon, MailIcon, LinkedinIcon, ArrowLeft, ArrowRight } from './components/ui/icons';
import { Project, Lang } from './types';
import { projects } from './data/projects';
import { servicesData } from './data/services';
import { stackData } from './data/stack';
import { expData } from './data/experience';

// eliminar, usar rutas
export type Page = 'home' | 'canal-etico' | 'pantteon' | 'rs-ingenieria'


// ── Mockups ───────────────────────────────────────────────────────────────────
function CanalEticoMockup() {
  return (
    <div className="relative w-full bg-[#0c0c14] rounded-xl overflow-hidden border border-white/10" style={{ aspectRatio: '16/10' }}>
      <div className="flex items-center gap-2 px-4 h-9 bg-[#07070f] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 mx-6 bg-white/5 rounded-md text-[10px] text-white/25 px-3 py-0.5 text-center font-mono">
          app.canalético.com/dashboard
        </div>
        <div className="w-6 h-6 rounded-full bg-white/10" />
      </div>
      <div className="flex" style={{ height: 'calc(100% - 36px)' }}>
        <div className="w-44 bg-[#070710] border-r border-white/5 p-3 flex flex-col gap-0.5 flex-shrink-0">
          <div className="flex items-center gap-2 px-2 py-2.5 mb-3">
            <div className="w-5 h-5 rounded bg-[#c8f135]/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-sm bg-[#c8f135]" />
            </div>
            <span className="text-[11px] font-semibold text-white/70">Canal Ético</span>
          </div>
          {[
            { label: 'Dashboard', active: false },
            { label: 'Reportes', active: true },
            { label: 'Empresas', active: false },
            { label: 'Usuarios', active: false },
            { label: 'Configuración', active: false },
          ].map(({ label, active }) => (
            <div key={label} className={`text-[10px] px-2.5 py-2 rounded-md ${active ? 'bg-[#c8f135]/15 text-[#c8f135]' : 'text-white/30 hover:text-white/50'}`}>
              {label}
            </div>
          ))}
        </div>
        <div className="flex-1 p-5 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[12px] font-semibold text-white/80">Reportes Activos</div>
            <div className="bg-[#c8f135] text-black text-[9px] px-3 py-1 rounded-full font-semibold">+ Nuevo Reporte</div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[['24', 'Abiertos', '#c8f135'], ['8', 'En Revisión', '#60a5fa'], ['142', 'Cerrados', 'rgba(255,255,255,0.3)']].map(([n, l, c]) => (
              <div key={l} className="bg-white/5 rounded-lg p-3">
                <div className="text-[18px] font-bold leading-none mb-1" style={{ color: c as string }}>{n}</div>
                <div className="text-white/35 text-[9px]">{l}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg overflow-hidden border border-white/5">
            <div className="grid text-[9px] text-white/25 px-3 py-2 bg-white/3 border-b border-white/5 font-mono" style={{ gridTemplateColumns: '44px 1fr 72px 64px' }}>
              <span>ID</span><span>Categoría</span><span>Fecha</span><span>Estado</span>
            </div>
            {[
              ['#0241', 'Acoso laboral', '14 Ene 25', 'Abierto', 'lime'],
              ['#0240', 'Fraude financiero', '12 Ene 25', 'En revisión', 'blue'],
              ['#0239', 'Discriminación', '09 Ene 25', 'Cerrado', 'dim'],
              ['#0238', 'Corrupción', '07 Ene 25', 'Cerrado', 'dim'],
            ].map(([id, cat, date, status, type]) => (
              <div key={id} className="grid text-[9px] px-3 py-2.5 border-b border-white/4 text-white/45 hover:bg-white/3" style={{ gridTemplateColumns: '44px 1fr 72px 64px' }}>
                <span className="text-white/60 font-mono">{id}</span>
                <span>{cat}</span>
                <span>{date}</span>
                <span style={{ color: type === 'lime' ? '#c8f135' : type === 'blue' ? '#60a5fa' : 'rgba(255,255,255,0.2)' }}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function PantteonMockup() {
  return (
    <div className="flex items-center justify-center py-6" style={{ height: 340, position: 'relative' }}>
      {/* Back phone */}
      <div style={{
        width: 138, aspectRatio: '9/19.5', background: '#0e0e1a', borderRadius: 22,
        border: '2px solid rgba(255,255,255,0.1)', overflow: 'hidden', position: 'absolute',
        left: '50%', top: 0, transform: 'translateX(-80%) translateY(8%) rotate(-6deg)', opacity: 0.55, zIndex: 0,
      }}>
        <div style={{ height: 24, background: '#08081a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 36, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }} />
        </div>
        <div style={{ padding: '10px 10px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 12, height: 70, marginBottom: 8 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            {[...Array(4)].map((_, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, height: 54 }} />
            ))}
          </div>
        </div>
      </div>
      {/* Front phone */}
      <div style={{
        width: 148, aspectRatio: '9/19.5', background: '#0e0e1c', borderRadius: 24,
        border: '2px solid rgba(255,255,255,0.15)', overflow: 'hidden', position: 'relative', zIndex: 1,
        transform: 'rotate(2deg)',
      }}>
        <div style={{ height: 26, background: '#080816', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 38, height: 4, background: 'rgba(255,255,255,0.25)', borderRadius: 2 }} />
        </div>
        <div style={{ padding: '12px 12px', flex: 1 }}>
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 3, fontFamily: 'Outfit, sans-serif' }}>Pantteon</div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontFamily: 'Outfit, sans-serif' }}>Your digital vault</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #13132a 0%, #1a1a3e 100%)', borderRadius: 14, height: 86, marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(200,241,53,0.08) 0%, transparent 60%)' }} />
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid rgba(200,241,53,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#c8f135' }} />
            </div>
          </div>
          {[['Electronics', '14 items'], ['Documents', '8 items'], ['Collectibles', '23 items']].map(([title, count]) => (
            <div key={title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', fontFamily: 'Outfit, sans-serif' }}>{title}</span>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontFamily: 'Outfit, sans-serif' }}>{count}</span>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 42, background: 'rgba(8,8,20,0.95)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'space-around', borderTop: '1px solid rgba(255,255,255,0.07)', paddingBottom: 4 }}>
          {[true, false, false, false].map((active, i) => (
            <div key={i} style={{ width: 20, height: 20, borderRadius: 6, background: active ? 'rgba(200,241,53,0.2)' : 'rgba(255,255,255,0.08)', border: active ? '1px solid rgba(200,241,53,0.3)' : 'none' }} />
          ))}
        </div>
      </div>
      {/* Third phone barely visible */}
      <div style={{
        width: 130, aspectRatio: '9/19.5', background: '#0a0a16', borderRadius: 20,
        border: '2px solid rgba(255,255,255,0.07)', overflow: 'hidden', position: 'absolute',
        left: '50%', top: 0, transform: 'translateX(20%) translateY(12%) rotate(7deg)', opacity: 0.35, zIndex: 0,
      }}>
        <div style={{ height: 22, background: '#06060e' }} />
        <div style={{ padding: 8 }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, height: 60, marginBottom: 7 }} />
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, height: 40, marginBottom: 7 }} />
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, height: 40 }} />
        </div>
      </div>
    </div>
  )
}

function RSIngenieriaMockup() {
  return (
    <div className="relative w-full bg-[#f2f1ed] rounded-xl overflow-hidden border border-black/10" style={{ aspectRatio: '16/9' }}>
      <div className="flex items-center gap-2 px-4 h-8 bg-[#e4e3df] border-b border-black/8">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-black/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-black/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-black/15" />
        </div>
        <div className="flex-1 mx-5 bg-white/80 rounded text-[9px] text-black/35 px-2 py-0.5 text-center font-mono">
          rsingenieria.com
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between px-6 py-3 border-b border-black/6 bg-white">
          <div className="text-[12px] font-bold text-gray-800 tracking-tight">RS Ingeniería</div>
          <div className="hidden sm:flex gap-5">
            {['Inicio', 'Servicios', 'Proyectos', 'Nosotros'].map(item => (
              <div key={item} className="text-[9px] text-gray-500">{item}</div>
            ))}
          </div>
          <div className="bg-[#1a2234] text-white text-[9px] px-3 py-1.5 rounded font-medium">Contáctenos</div>
        </div>
        <div className="bg-[#1a2234] text-white px-7 py-7">
          <div className="text-[9px] text-blue-300 mb-1.5 uppercase tracking-widest font-mono">Ingeniería de Precisión</div>
          <div className="text-[20px] font-bold leading-tight mb-2.5 tracking-tight">Soluciones de Ingeniería<br />Para el Mundo Real</div>
          <div className="text-[10px] text-white/45 mb-4 max-w-xs leading-relaxed">Diseño, construcción y supervisión de proyectos de ingeniería civil e industrial con más de 15 años de experiencia.</div>
          <div className="flex gap-3">
            <div className="bg-blue-500 text-white text-[9px] px-4 py-1.5 rounded font-medium">Ver Proyectos</div>
            <div className="border border-white/25 text-white/70 text-[9px] px-4 py-1.5 rounded">Contactar</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 px-7 py-5 bg-[#f2f1ed]">
          {[
            ['Diseño Estructural', 'Análisis y diseño de estructuras civiles e industriales de alto rendimiento.'],
            ['Supervisión de Obra', 'Control de calidad y supervisión técnica especializada en campo.'],
            ['Consultoría Técnica', 'Asesoría especializada para proyectos complejos y de gran escala.'],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white rounded-xl p-4 shadow-sm border border-black/5">
              <div className="w-7 h-7 bg-blue-50 rounded-lg mb-3 flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-400 rounded-sm" />
              </div>
              <div className="text-[10px] font-semibold text-gray-800 mb-1.5">{title}</div>
              <div className="text-[8px] text-gray-500 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Tag components ────────────────────────────────────────────────────────────
function TechTag({ label }: { label: string }) {
  return <span className="font-mono text-[11px] text-dim border border-line px-2.5 py-1 rounded-full">{label}</span>
}

function RoleTag({ label }: { label: string }) {
  return <span className="font-mono text-[11px] text-lime/80 border border-lime/20 bg-lime/5 px-2.5 py-1 rounded-full">{label}</span>
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav({ lang, setLang, onScrollTo, onHome }: {
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

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection({ lang, onScrollTo }: { lang: Lang; onScrollTo: (id: string) => void }) {
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

// ── Work ──────────────────────────────────────────────────────────────────────
function ProjectEntry({ project, lang, mockup, onViewCase }: {
  project: Project
  lang: Lang
  mockup: React.ReactNode
  onViewCase: () => void
}) {
  const { ref, vis } = useReveal()
  const en = lang === 'en'

  const contentBlock = (
    <div className="flex flex-col justify-center">
      <div className="font-mono text-[11px] text-dim mb-5 tracking-wider">{project.num} — {project.category[en ? 'en' : 'es']}</div>
      <h3 className="text-3xl lg:text-[40px] font-medium text-ink leading-tight mb-5">{project.title}</h3>
      <p className="text-dim leading-relaxed mb-7 max-w-sm text-[15px]">{project.desc[en ? 'en' : 'es']}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.roles[en ? 'en' : 'es'].map(r => <RoleTag key={r} label={r} />)}
      </div>
      <div className="flex flex-wrap gap-2 mb-9">
        {project.tech.map(t => <TechTag key={t} label={t} />)}
      </div>
      <button onClick={onViewCase} className="flex items-center gap-2.5 text-sm text-ink hover:text-lime transition-colors duration-200 group w-fit">
        {en ? 'View case study' : 'Ver caso de estudio'}
        <span className="transform group-hover:translate-x-1 transition-transform duration-200"><ArrowRight /></span>
      </button>
    </div>
  )

  const imageBlock = (
    <div className="transition-transform duration-700 hover:scale-[1.015] overflow-hidden rounded-xl">
      {mockup}
    </div>
  )

  if (project.layout === 'right') {
    return (
      <div ref={ref} style={revealStyle(vis)} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {contentBlock}
        {imageBlock}
      </div>
    )
  }

  if (project.layout === 'left') {
    return (
      <div ref={ref} style={revealStyle(vis)} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">{imageBlock}</div>
        <div className="order-1 lg:order-2">{contentBlock}</div>
      </div>
    )
  }

  return (
    <div ref={ref} style={revealStyle(vis)}>
      <div className="mb-10 transition-transform duration-700 hover:scale-[1.01] overflow-hidden rounded-xl">{mockup}</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <div className="font-mono text-[11px] text-dim mb-4 tracking-wider">{project.num} — {project.category[en ? 'en' : 'es']}</div>
          <h3 className="text-3xl lg:text-[40px] font-medium text-ink leading-tight mb-5">{project.title}</h3>
          <p className="text-dim leading-relaxed text-[15px]">{project.desc[en ? 'en' : 'es']}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-3 mt-8 lg:mt-14">
            {project.roles[en ? 'en' : 'es'].map(r => <RoleTag key={r} label={r} />)}
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map(t => <TechTag key={t} label={t} />)}
          </div>
          <button onClick={onViewCase} className="flex items-center gap-2.5 text-sm text-ink hover:text-lime transition-colors duration-200 group w-fit">
            {en ? 'View case study' : 'Ver caso de estudio'}
            <span className="transform group-hover:translate-x-1 transition-transform duration-200"><ArrowRight /></span>
          </button>
        </div>
      </div>
    </div>
  )
}

function WorkSection({ lang, setPage }: { lang: Lang; setPage: (p: Page) => void }) {
  const { ref, vis } = useReveal()
  const en = lang === 'en'

  return (
    <section id="work" className="py-24 lg:py-36 border-t border-line">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div ref={ref} style={revealStyle(vis)} className="mb-16 lg:mb-24">
          <p className="font-mono text-[11px] text-dim tracking-widest uppercase mb-4">
            {en ? '── Selected Work' : '── Trabajo Selecto'}
          </p>
          <h2 className="text-4xl lg:text-5xl font-medium text-ink mb-4">
            {en ? 'Selected Work' : 'Trabajo Selecto'}
          </h2>
          <p className="text-dim text-lg max-w-md">
            {en ? "A selection of products I've designed, built and shipped." : 'Una selección de productos que he diseñado, construido y lanzado.'}
          </p>
        </div>
        <div className="flex flex-col gap-28 lg:gap-40">
          <ProjectEntry project={projects[0]} lang={lang} mockup={<CanalEticoMockup />} onViewCase={() => setPage('canal-etico')} />
          <ProjectEntry project={projects[1]} lang={lang} mockup={<PantteonMockup />} onViewCase={() => setPage('pantteon')} />
          <ProjectEntry project={projects[2]} lang={lang} mockup={<RSIngenieriaMockup />} onViewCase={() => setPage('rs-ingenieria')} />
        </div>
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────
function ServicesSection({ lang }: { lang: Lang }) {
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

// ── Experience ────────────────────────────────────────────────────────────────
function ExperienceSection({ lang }: { lang: Lang }) {
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

// ── About ─────────────────────────────────────────────────────────────────────
function AboutSection({ lang }: { lang: Lang }) {
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

// ── Contact ───────────────────────────────────────────────────────────────────
function ContactSection({ lang }: { lang: Lang }) {
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
          <a href="mailto:hola@alejandroberrotaran.dev" className="flex items-center gap-2.5 px-7 py-3.5 bg-lime text-canvas font-medium text-sm rounded-full hover:bg-lime/90 transition-all duration-200">
            {en ? "Let's work together" : 'Trabajemos juntos'}
            <ArrowRight />
          </a>
          <a href="mailto:hola@alejandroberrotaran.dev" className="flex items-center gap-2.5 px-7 py-3.5 border border-ink/18 text-ink text-sm rounded-full hover:border-ink/40 hover:bg-ink/4 transition-all duration-200">
            {en ? 'Email me' : 'Escríbeme'}
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer({ lang, onHome }: { lang: Lang; onHome: () => void }) {
  const en = lang === 'en'
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <button onClick={onHome} className="font-mono text-sm text-ink/70 hover:text-ink transition-colors mb-1">AB</button>
          <p className="text-dim text-[13px]">{en ? 'Full-Stack & Mobile Developer' : 'Desarrollador Full-Stack & Mobile'}</p>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/aberrotaran" target="_blank" rel="noopener noreferrer" className="text-dim hover:text-ink transition-colors" aria-label="GitHub"><GithubIcon /></a>
          <a href="https://linkedin.com/in/alejandro-berrotaran" target="_blank" rel="noopener noreferrer" className="text-dim hover:text-ink transition-colors" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href="mailto:hola@alejandroberrotaran.dev" className="text-dim hover:text-ink transition-colors" aria-label="Email"><MailIcon /></a>
        </div>
        <p className="text-dim text-[12px] font-mono">
          {en ? '© 2025 Alejandro Berroterán' : '© 2025 Alejandro Berroterán'}
        </p>
      </div>
    </footer>
  )
}

// ── Case Study Page ───────────────────────────────────────────────────────────
function CaseStudyPage({ page, lang, onBack, onNext }: {
  page: Page
  lang: Lang
  onBack: () => void
  onNext: (p: Page) => void
}) {
  const en = lang === 'en'

  useEffect(() => { window.scrollTo(0, 0) }, [page])

  const allProjects = ['canal-etico', 'pantteon', 'rs-ingenieria'] as Page[]
  const currentIndex = allProjects.indexOf(page)
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]
  const nextTitle = projects.find(p => p.slug === nextProject)?.title ?? ''

  const canalEticoContent = {
    tagline: en ? 'A multi-company whistleblowing platform for secure workplace reporting.' : 'Plataforma multiempresa de denuncias para reportes seguros en el trabajo.',
    role: en ? 'Full-Stack Developer & UI/UX Designer' : 'Desarrollador Full-Stack & Diseñador UI/UX',
    timeline: 'Q3 2024 — Q1 2025',
    platform: en ? 'Web Application' : 'Aplicación Web',
    status: en ? 'Live in Production' : 'En Producción',
    overview: en
      ? 'Canal Ético is a multi-tenant SaaS platform that allows organizations to receive, manage, and investigate workplace misconduct reports. The system supports multiple companies simultaneously, with complete data isolation between tenants, role-based access control, and anonymous reporting capabilities.'
      : 'Canal Ético es una plataforma SaaS multitenancy que permite a las organizaciones recibir, gestionar e investigar reportes de conducta inapropiada. El sistema soporta múltiples empresas con aislamiento de datos completo entre tenants.',
    challenge: en
      ? 'The client needed a solution compliant with ethical channel regulations in Latin America — one that could serve multiple companies simultaneously without compromising data isolation. The platform needed to support both anonymous and identified reporters, with case lifecycle management and secure file storage.'
      : 'El cliente necesitaba una solución conforme con las regulaciones de canal ético en Latinoamérica, capaz de servir a múltiples empresas sin comprometer el aislamiento de datos. La plataforma debía soportar denuncias anónimas e identificadas con gestión del ciclo de vida de los casos.',
    roleDesc: en
      ? 'I was responsible for the full product — from initial design in Figma to full-stack development and production deployment on Oracle Cloud Infrastructure. I designed the database schema, built the REST API with Spring Boot, developed the React frontend, and deployed the full system to OCI.'
      : 'Fui responsable del producto completo — desde el diseño inicial en Figma hasta el desarrollo full-stack y el despliegue en producción en Oracle Cloud Infrastructure. Diseñé el esquema de base de datos, construí la API REST con Spring Boot, desarrollé el frontend en React y desplegué el sistema completo en OCI.',
    solution: en
      ? 'Built a React + TypeScript frontend with a clean, trust-inspiring interface. Developed a Java Spring Boot API with multi-tenant data isolation at the database level. Deployed on OCI with a Linux server configuration, using Cloudflare R2 for secure file storage.'
      : 'Construí un frontend React + TypeScript con una interfaz limpia que inspira confianza. Desarrollé una API Java Spring Boot con aislamiento de datos multitenancy a nivel de base de datos. Desplegué en OCI con configuración de servidor Linux y Cloudflare R2 para almacenamiento seguro de archivos.',
    features: en
      ? ['Multi-company tenant isolation with separate data spaces', 'Anonymous and identified reporting with case tracking', 'Role-based access (Reporter, Investigator, Admin)', 'Secure file uploads via Cloudflare R2', 'Case lifecycle management (Open → In Review → Closed)', 'Company-specific branding and configuration']
      : ['Aislamiento de tenant por empresa con espacios de datos separados', 'Denuncia anónima e identificada con seguimiento de caso', 'Control de acceso por roles (Denunciante, Investigador, Admin)', 'Subida segura de archivos via Cloudflare R2', 'Gestión del ciclo de vida (Abierto → En Revisión → Cerrado)', 'Branding y configuración por empresa'],
    challenges: [
      {
        title: en ? 'Multi-company data isolation' : 'Aislamiento de datos multiempresa',
        desc: en
          ? 'Implementing true tenant isolation at the PostgreSQL level — ensuring no data leakage between companies while sharing the same database instance. Solved using row-level security policies and a strict tenant context on every query.'
          : 'Implementar aislamiento real de tenants a nivel PostgreSQL, asegurando que no haya filtración de datos entre empresas. Resuelto con políticas de seguridad a nivel de fila y contexto de tenant estricto en cada consulta.',
      },
      {
        title: en ? 'Production deployment on OCI' : 'Despliegue en producción en OCI',
        desc: en
          ? 'Configuring a Linux server on Oracle Cloud Infrastructure with Nginx reverse proxy, SSL certificates, and automated deployments for both the Spring Boot API and the React SPA. Required careful firewall and network configuration.'
          : 'Configuración de servidor Linux en OCI con proxy inverso Nginx, certificados SSL y despliegues automatizados para la API Spring Boot y el SPA de React. Requirió configuración cuidadosa de firewall y red.',
      },
      {
        title: en ? 'Anonymous reporter identity' : 'Identidad del denunciante anónimo',
        desc: en
          ? "Allowing reporters to follow up on their cases without creating an account — implemented with a secure one-time token system that lets reporters authenticate future sessions without exposing their identity."
          : 'Permitir que los denunciantes hagan seguimiento de sus casos sin crear una cuenta — implementado con un sistema de tokens de un solo uso que permite autenticar sesiones futuras sin exponer la identidad.',
      },
    ],
    result: en
      ? 'The platform launched successfully and is actively used by multiple companies. The system handles the full case lifecycle from anonymous submission to investigation closure, with zero reported data isolation incidents and positive feedback on the clean, intuitive interface.'
      : 'La plataforma se lanzó exitosamente y es usada activamente por múltiples empresas. El sistema gestiona el ciclo completo de casos desde la denuncia anónima hasta el cierre de la investigación, con cero incidentes de aislamiento de datos.',
  }

  const pantteonContent = {
    tagline: en ? 'Modernizing a React Native app for cross-platform production delivery.' : 'Modernizando una app React Native para entrega multiplataforma en producción.',
    role: en ? 'Mobile Developer & UI/UX Designer' : 'Desarrollador Mobile & Diseñador UI/UX',
    timeline: 'Q1 2024 — Q3 2024',
    platform: en ? 'iOS & Android (React Native)' : 'iOS & Android (React Native)',
    status: en ? 'Live on App Stores' : 'En las App Stores',
    overview: en
      ? 'Pantteon is a personal inventory and collectibles management app. The project involved taking an existing but outdated React Native codebase and fully modernizing it — new UI, improved architecture, offline support, multilingual interface, and production delivery on both Android and iOS.'
      : 'Pantteon es una app de inventario personal y gestión de coleccionables. El proyecto implicó tomar una base de código React Native existente pero desactualizada y modernizarla completamente — nueva UI, arquitectura mejorada, soporte offline, interfaz multiidioma y entrega en producción en Android e iOS.',
  }

  const rsContent = {
    tagline: en ? 'A responsive corporate website designed to convert visitors into inquiries.' : 'Un sitio web corporativo responsivo diseñado para convertir visitantes en consultas.',
    role: en ? 'UI/UX Designer & Frontend Developer' : 'Diseñador UI/UX & Desarrollador Frontend',
    timeline: 'Q4 2023',
    platform: en ? 'Responsive Website' : 'Sitio Web Responsivo',
    status: en ? 'Live' : 'En Línea',
    overview: en
      ? 'RS Ingeniería needed a professional digital presence that reflected the quality of their engineering work and generated business inquiries. The project covered design, development and deployment of a fully responsive corporate website.'
      : 'RS Ingeniería necesitaba una presencia digital profesional que reflejara la calidad de su trabajo de ingeniería y generara consultas de negocio. El proyecto abarcó diseño, desarrollo y despliegue de un sitio web corporativo completamente responsivo.',
  }

  const data = page === 'canal-etico' ? canalEticoContent : page === 'pantteon' ? pantteonContent : rsContent
  const project = projects.find(p => p.slug === page)!

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="pt-24 pb-16 border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <button onClick={onBack} className="flex items-center gap-2 text-dim hover:text-ink transition-colors text-sm mb-10 group">
            <span className="transform group-hover:-translate-x-1 transition-transform duration-200"><ArrowLeft /></span>
            {en ? 'Back to work' : 'Volver al trabajo'}
          </button>
          <p className="font-mono text-[11px] text-dim tracking-widest uppercase mb-5">{project.category[lang]}</p>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] text-ink leading-tight mb-6">{project.title}</h1>
          <p className="text-dim text-xl max-w-2xl mb-12">{data.tagline}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-line">
            {[
              [en ? 'Role' : 'Rol', data.role],
              [en ? 'Timeline' : 'Período', data.timeline],
              [en ? 'Platform' : 'Plataforma', data.platform],
              [en ? 'Status' : 'Estado', data.status],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="font-mono text-[10px] text-dim uppercase tracking-wider mb-2">{label}</div>
                <div className="text-ink text-sm">{value}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-8">
            {project.tech.map(t => <TechTag key={t} label={t} />)}
          </div>
        </div>
      </div>

      <div className="py-12 border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="max-w-4xl">
            {page === 'canal-etico' && <CanalEticoMockup />}
            {page === 'pantteon' && (
              <div className="flex justify-center bg-panel rounded-xl py-12"><PantteonMockup /></div>
            )}
            {page === 'rs-ingenieria' && <RSIngenieriaMockup />}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
        <div className="max-w-3xl">
          <section className="mb-16">
            <h2 className="text-2xl font-medium text-ink mb-5">{en ? 'Overview' : 'Visión general'}</h2>
            <p className="text-dim leading-relaxed text-[15px]">{data.overview}</p>
          </section>

          {page === 'canal-etico' && (
            <>
              <section className="mb-16">
                <h2 className="text-2xl font-medium text-ink mb-5">{en ? 'The Challenge' : 'El Desafío'}</h2>
                <p className="text-dim leading-relaxed text-[15px]">{canalEticoContent.challenge}</p>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-medium text-ink mb-5">{en ? 'My Role' : 'Mi Rol'}</h2>
                <p className="text-dim leading-relaxed text-[15px]">{canalEticoContent.roleDesc}</p>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-medium text-ink mb-5">{en ? 'The Solution' : 'La Solución'}</h2>
                <p className="text-dim leading-relaxed text-[15px]">{canalEticoContent.solution}</p>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-medium text-ink mb-8">{en ? 'Key Features' : 'Funcionalidades Clave'}</h2>
                <ul className="flex flex-col gap-4">
                  {canalEticoContent.features.map(f => (
                    <li key={f} className="flex items-start gap-4 text-[15px] text-dim">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0 mt-2" />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-medium text-ink mb-8">{en ? 'System Architecture' : 'Arquitectura del Sistema'}</h2>
                <div className="bg-panel rounded-xl border border-line p-8 lg:p-10">
                  <div className="flex flex-col items-start gap-0 max-w-xs">
                    {[
                      { label: 'React + TypeScript', sub: 'Vercel', color: '#60a5fa' },
                      { label: 'Java + Spring Boot', sub: 'OCI (Linux)', color: '#f97316' },
                      { label: 'PostgreSQL + Cloudflare R2', sub: en ? 'Database & Storage' : 'Base de datos y almacenamiento', color: '#34d399' },
                    ].map((layer, i) => (
                      <div key={layer.label} className="flex flex-col items-start">
                        <div className="flex items-center gap-4 py-4 px-5 rounded-lg border border-line bg-canvas/60 w-64">
                          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: layer.color }} />
                          <div>
                            <div className="text-ink text-sm font-medium">{layer.label}</div>
                            <div className="text-dim text-[11px] font-mono mt-0.5">{layer.sub}</div>
                          </div>
                        </div>
                        {i < 2 && (
                          <div className="ml-6 flex flex-col items-center">
                            <div className="w-px h-5 bg-line" />
                            <div className="text-line text-xs">↓</div>
                            <div className="w-px h-2 bg-line" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-line">
                    <p className="text-dim text-[13px]">{en ? 'REST API communication between all layers. JWT authentication. Row-level security in PostgreSQL.' : 'Comunicación REST API entre todas las capas. Autenticación JWT. Seguridad a nivel de fila en PostgreSQL.'}</p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-medium text-ink mb-8">{en ? 'Technical Challenges' : 'Desafíos Técnicos'}</h2>
                <div className="flex flex-col gap-10">
                  {canalEticoContent.challenges.map(c => (
                    <div key={c.title} className="border-l-2 border-lime pl-6">
                      <h3 className="text-ink font-medium mb-3">{c.title}</h3>
                      <p className="text-dim text-[15px] leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-medium text-ink mb-5">{en ? 'Result' : 'Resultado'}</h2>
                <p className="text-dim leading-relaxed text-[15px]">{canalEticoContent.result}</p>
              </section>
            </>
          )}

          {page === 'pantteon' && (
            <section className="mb-16">
              <h2 className="text-2xl font-medium text-ink mb-5">{en ? 'Focus Areas' : 'Áreas de Enfoque'}</h2>
              <div className="flex flex-col gap-8">
                {(en
                  ? [
                      ['Starting Point', 'An existing codebase with outdated dependencies, poor UX patterns and no production delivery pipeline.'],
                      ['UI/UX Redesign', 'Complete visual redesign in Figma, then implementation. New navigation, component system and visual language.'],
                      ['Offline Support', 'Added local data persistence so the app works without an internet connection, syncing when back online.'],
                      ['Multilingual Support', 'Implemented i18n for English and Spanish with dynamic switching.'],
                      ['Production Delivery', 'Configured EAS Build and submitted to Google Play and App Store, handling signing, metadata and review cycles.'],
                    ]
                  : [
                      ['Punto de Partida', 'Una base de código existente con dependencias desactualizadas, malos patrones de UX y sin pipeline de entrega en producción.'],
                      ['Rediseño UI/UX', 'Rediseño visual completo en Figma, luego implementación. Nueva navegación, sistema de componentes y lenguaje visual.'],
                      ['Soporte Offline', 'Añadida persistencia local de datos para que la app funcione sin conexión, sincronizando al reconectarse.'],
                      ['Soporte Multiidioma', 'Implementado i18n para inglés y español con cambio dinámico.'],
                      ['Entrega en Producción', 'Configuré EAS Build y sometí a Google Play y App Store, gestionando firma, metadatos y ciclos de revisión.'],
                    ]
                ).map(([title, desc]) => (
                  <div key={title} className="border-l-2 border-lime pl-6">
                    <h3 className="text-ink font-medium mb-2">{title}</h3>
                    <p className="text-dim text-[15px] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {page === 'rs-ingenieria' && (
            <>
              {(en
                ? [
                    ['Challenge', 'The company had no digital presence. They needed a professional website that communicated credibility and generated business inquiries.'],
                    ['Design', 'Designed the full site in Figma with a clean corporate aesthetic — strong typography, clear service sections and multiple conversion touchpoints.'],
                    ['Solution', 'Developed the site in HTML, CSS and vanilla JavaScript with a focus on performance, responsiveness and SEO fundamentals.'],
                    ['Result', 'The site launched on time and started generating contact inquiries within the first weeks. Fully responsive across all device sizes.'],
                  ]
                : [
                    ['Desafío', 'La empresa no tenía presencia digital. Necesitaba un sitio profesional que comunicara credibilidad y generara consultas de negocio.'],
                    ['Diseño', 'Diseñé el sitio completo en Figma con una estética corporativa limpia — tipografía fuerte, secciones de servicios claras y múltiples puntos de conversión.'],
                    ['Solución', 'Desarrollé el sitio en HTML, CSS y JavaScript vanilla con enfoque en rendimiento, responsividad y fundamentos SEO.'],
                    ['Resultado', 'El sitio se lanzó a tiempo y comenzó a generar consultas de contacto en las primeras semanas. Completamente responsivo en todos los dispositivos.'],
                  ]
              ).map(([title, desc]) => (
                <section key={title} className="mb-12">
                  <h2 className="text-2xl font-medium text-ink mb-4">{title}</h2>
                  <p className="text-dim leading-relaxed text-[15px]">{desc}</p>
                </section>
              ))}
            </>
          )}
        </div>

        <div className="border-t border-line pt-12 mt-4">
          <div className="flex items-center justify-between">
            <button onClick={onBack} className="flex items-center gap-2 text-dim hover:text-ink transition-colors text-sm group">
              <span className="transform group-hover:-translate-x-1 transition-transform duration-200"><ArrowLeft /></span>
              {en ? 'All projects' : 'Todos los proyectos'}
            </button>
            <button onClick={() => onNext(nextProject)} className="flex items-center gap-2 text-dim hover:text-ink transition-colors text-sm group">
              {en ? `Next: ${nextTitle}` : `Siguiente: ${nextTitle}`}
              <span className="transform group-hover:translate-x-1 transition-transform duration-200"><ArrowRight /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Home page ─────────────────────────────────────────────────────────────────
function HomePage({ lang, setLang, setPage }: { lang: Lang; setLang: (l: Lang) => void; setPage: (p: Page) => void }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-canvas text-ink min-h-screen">
      <Nav lang={lang} setLang={setLang} onScrollTo={scrollTo} onHome={() => {}} />
      <HeroSection lang={lang} onScrollTo={scrollTo} />
      <WorkSection lang={lang} setPage={setPage} />
      <ServicesSection lang={lang} />
      <ExperienceSection lang={lang} />
      <AboutSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} onHome={() => {}} />
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  const [page, setPage] = useState<Page>('home')

  const goHome = () => {
    setPage('home')
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
  }

  if (page !== 'home') {
    return (
      <div className="bg-canvas text-ink min-h-screen">
        <Nav lang={lang} setLang={setLang} onScrollTo={() => {}} onHome={goHome} />
        <CaseStudyPage
          page={page}
          lang={lang}
          onBack={goHome}
          onNext={(p) => setPage(p)}
        />
        <Footer lang={lang} onHome={goHome} />
      </div>
    )
  }

  return <HomePage lang={lang} setLang={setLang} setPage={setPage} />
}
