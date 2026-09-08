interface FeatureListProps {
  items: string[];
}

export function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-4 text-[15px] text-dim"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0 mt-2" />
          {item}
        </li>
      ))}
    </ul>
  );
}