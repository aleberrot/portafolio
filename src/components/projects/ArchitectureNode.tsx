interface ArchitectureNodeProps {
  title: string;
  subtitle?: string;
}

export function ArchitectureNode({
  title,
  subtitle,
}: ArchitectureNodeProps) {
  return (
    <div className="w-full rounded-lg border border-line bg-canvas/60 px-5 py-4">
      <div className="text-sm font-medium text-ink">
        {title}
      </div>

      {subtitle && (
        <div className="mt-1 font-mono text-[11px] text-dim">
          {subtitle}
        </div>
      )}
    </div>
  );
}