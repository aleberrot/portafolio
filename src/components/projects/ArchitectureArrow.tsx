interface ArchitectureArrowProps {
  label?: string;
}

export function ArchitectureArrow({
  label,
}: ArchitectureArrowProps) {
  return (
    <div className="flex flex-col items-center py-3">
      <div className="h-5 w-px bg-line" />

      {label && (
        <span className="my-2 font-mono text-[10px] uppercase tracking-wider text-dim">
          {label}
        </span>
      )}

      <span className="text-dim">
        ↓
      </span>

      <div className="h-3 w-px bg-line" />
    </div>
  );
}