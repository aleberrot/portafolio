import { Project, Lang } from "@/types";
import { useReveal, revealStyle } from "@/hooks/useReveal";
import { TechTag } from "@/components/ui/TechTag";
import { RoleTag } from "@/components/ui/RoleTag";
import { ArrowRight } from "@/components/ui/icons";
import { projects } from "@/data/projects";
import { CanalEticoMockup, PantteonMockup, RSIngenieriaMockup } from "@/components/ui/mockups";
import { Link } from "react-router-dom";
import { CanalEticoPreview } from "@/components/projects/previews/CanalEticoPreview";
import { PantteonPreview } from "@/components/projects/previews/PantteonPreview";
import { RsIngenieriaPreview } from "@/components/projects/previews/RsIngenieriaPreview";

export type Page = 'home' | 'canal-etico' | 'pantteon' | 'rs-ingenieria'

// ── Work ──────────────────────────────────────────────────────────────────────
export function ProjectEntry({ project, lang, mockup}: {
  project: Project
  lang: Lang
  mockup: React.ReactNode
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
      <Link to={`/projects/${project.slug}`} className="flex items-center gap-2.5 text-sm text-ink hover:text-lime transition-colors duration-200 group w-fit">
        {en ? 'View case study' : 'Ver caso de estudio'}
        <span className="transform group-hover:translate-x-1 transition-transform duration-200"><ArrowRight /></span>
      </Link>
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
          <Link to={`/projects/${project.slug}`} className="flex items-center gap-2.5 text-sm text-ink hover:text-lime transition-colors duration-200 group w-fit">
            {en ? 'View case study' : 'Ver caso de estudio'}
            <span className="transform group-hover:translate-x-1 transition-transform duration-200"><ArrowRight /></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function WorkSection({ lang }: { lang: Lang}) {
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
          <div className="flex flex-col gap-28 lg:gap-40">
            <ProjectEntry
              project={projects[0]}
              lang={lang}
              mockup={<CanalEticoPreview />}
            />

            <ProjectEntry
            project={projects[1]}
            lang={lang}
            mockup={<PantteonPreview />}
            />
            <ProjectEntry
    project={projects[2]}
    lang={lang}
    mockup={<RsIngenieriaPreview />}
  />
        </div>
      </div>
    </div>
    </section>
  )
}

