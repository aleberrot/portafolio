import { Lang } from "@/types";

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export function RsIngenieriaPage({
  lang,
  setLang,
}: Props) {
  return (
    <main className="min-h-screen bg-canvas text-ink p-16">
      <h1 className="font-display text-6xl">
        Rs Ingenieria
      </h1>
    </main>
  );
}