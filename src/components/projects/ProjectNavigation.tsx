import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
} from "@/components/ui/icons";

interface ProjectNavigationProps {
  nextSlug: string;
  nextTitle: string;
  lang: "en" | "es";
}

export function ProjectNavigation({
  nextSlug,
  nextTitle,
  lang,
}: ProjectNavigationProps) {
  const en = lang === "en";

  return (
    <div className="border-t border-line pt-12 mt-4">
      <div className="flex items-center justify-between">

        <Link
          to="/#work"
          className="flex items-center gap-2 text-dim hover:text-ink transition-colors text-sm group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            <ArrowLeft />
          </span>

          {en ? "All projects" : "Todos los proyectos"}
        </Link>

        <Link
          to={`/projects/${nextSlug}`}
          className="flex items-center gap-2 text-dim hover:text-ink transition-colors text-sm group"
        >
          {en
            ? `Next: ${nextTitle}`
            : `Siguiente: ${nextTitle}`}

          <span className="group-hover:translate-x-1 transition-transform">
            <ArrowRight />
          </span>
        </Link>

      </div>
    </div>
  );
}