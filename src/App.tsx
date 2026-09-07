import { useState, useEffect, useRef } from 'react';
import { GithubIcon, MailIcon, LinkedinIcon, ArrowLeft, ArrowRight } from './components/ui/icons';
import { Project, Lang } from './types';
import { projects } from './data/projects';
import { TechTag } from './components/ui/TechTag';
import { Nav } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PantteonMockup, CanalEticoMockup, RSIngenieriaMockup } from './components/ui/mockups';

import { HomePage } from './pages/HomePage';

// eliminar, usar rutas
export type Page = 'home' | 'canal-etico' | 'pantteon' | 'rs-ingenieria'

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
