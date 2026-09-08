interface Challenge {
  title: string;
  description: string;
}

interface ChallengeListProps {
  items: Challenge[];
}

export function ChallengeList({
  items,
}: ChallengeListProps) {
  return (
    <div className="flex flex-col gap-10">
      {items.map((item) => (
        <div
          key={item.title}
          className="border-l-2 border-lime pl-6"
        >
          <h3 className="text-ink font-medium mb-3">
            {item.title}
          </h3>

          <p className="text-dim text-[15px] leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}