import { TechTag } from "@/components/ui/TechTag";

interface ProjectHeroProps {
  category: string;
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  platform: string;
  status: string;
  tech: string[];
}

export function ProjectHero({
  category,
  title,
  tagline,
  role,
  timeline,
  platform,
  status,
  tech,
}: ProjectHeroProps) {
  const meta = [
    ["Role", role],
    ["Timeline", timeline],
    ["Platform", platform],
    ["Status", status],
  ];

  return (
    <header className="pt-24 pb-16 border-b border-line">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        <p className="font-mono text-[11px] text-dim tracking-widest uppercase mb-5">
          {category}
        </p>

        <h1 className="font-display text-[clamp(40px,6vw,80px)] text-ink leading-tight mb-6">
          {title}
        </h1>

        <p className="text-dim text-xl max-w-2xl mb-12">
          {tagline}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-line">
          {meta.map(([label, value]) => (
            <div key={label}>
              <div className="font-mono text-[10px] text-dim uppercase tracking-wider mb-2">
                {label}
              </div>

              <div className="text-ink text-sm">
                {value}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-8">
          {tech.map((item) => (
            <TechTag key={item} label={item} />
          ))}
        </div>

      </div>
    </header>
  );
}