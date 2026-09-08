import { Link } from "react-router-dom";

import { Project, Lang } from "@/types";
import { useReveal, revealStyle } from "@/hooks/useReveal";
import { TechTag } from "@/components/ui/TechTag";
import { RoleTag } from "@/components/ui/RoleTag";
import { ArrowRight } from "@/components/ui/icons";

interface ProjectEntryProps {
  project: Project;
  lang: Lang;
  mockup: React.ReactNode;
}

export function ProjectEntry({
  project,
  lang,
  mockup,
}: ProjectEntryProps) {
  const { ref, vis } = useReveal();
  const en = lang === "en";

  const contentBlock = (
    <div className="flex flex-col justify-center">
      <div className="font-mono text-[11px] text-dim mb-5 tracking-wider">
        {project.num} — {project.category[lang]}
      </div>

      <h3 className="text-3xl lg:text-[40px] font-medium text-ink leading-tight mb-5">
        {project.title}
      </h3>

      <p className="text-dim leading-relaxed mb-7 max-w-sm text-[15px]">
        {project.desc[lang]}
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {project.roles[lang].map((role) => (
          <RoleTag
            key={role}
            label={role}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-9">
        {project.tech.map((tech) => (
          <TechTag
            key={tech}
            label={tech}
          />
        ))}
      </div>

      <Link
        to={`/projects/${project.slug}`}
        className="flex items-center gap-2.5 text-sm text-ink hover:text-lime transition-colors duration-200 group w-fit"
      >
        {en ? "View case study" : "Ver caso de estudio"}

        <span className="transform group-hover:translate-x-1 transition-transform duration-200">
          <ArrowRight />
        </span>
      </Link>
    </div>
  );

  const imageBlock = (
    <div className="transition-transform duration-700 hover:scale-[1.015]">
      {mockup}
    </div>
  );

  if (project.layout === "right") {
    return (
      <div
        ref={ref}
        style={revealStyle(vis)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {contentBlock}
        {imageBlock}
      </div>
    );
  }

  if (project.layout === "left") {
    return (
      <div
        ref={ref}
        style={revealStyle(vis)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        <div className="order-2 lg:order-1">
          {imageBlock}
        </div>

        <div className="order-1 lg:order-2">
          {contentBlock}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={revealStyle(vis)}
    >
      <div className="mb-10">
        {imageBlock}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <div className="font-mono text-[11px] text-dim mb-4 tracking-wider">
            {project.num} — {project.category[lang]}
          </div>

          <h3 className="text-3xl lg:text-[40px] font-medium text-ink leading-tight mb-5">
            {project.title}
          </h3>

          <p className="text-dim leading-relaxed text-[15px]">
            {project.desc[lang]}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-3 mt-8 lg:mt-14">
            {project.roles[lang].map((role) => (
              <RoleTag
                key={role}
                label={role}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <TechTag
                key={tech}
                label={tech}
              />
            ))}
          </div>

          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-2.5 text-sm text-ink hover:text-lime transition-colors duration-200 group w-fit"
          >
            {en ? "View case study" : "Ver caso de estudio"}

            <span className="transform group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}