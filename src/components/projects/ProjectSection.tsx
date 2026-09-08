interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ProjectSection({
  title,
  children,
  className = "",
}: ProjectSectionProps) {
  return (
    <section className={`mb-16 ${className}`}>
      <h2 className="text-2xl font-medium text-ink mb-5">
        {title}
      </h2>

      <div className="text-dim leading-relaxed text-[15px]">
        {children}
      </div>
    </section>
  );
}