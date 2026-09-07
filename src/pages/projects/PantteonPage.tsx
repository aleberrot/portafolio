import { Lang } from "@/types";

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export function PantteonPage({
  lang,
  setLang,
}: Props) {
  return (
    <main className="min-h-screen bg-canvas text-ink p-16">
      <h1 className="font-display text-6xl">
        Pantteon
      </h1>
    </main>
  );
}