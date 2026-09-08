import Hero from "@/assets/projects/rs-ingenieria/hero.png";

export function RsIngenieriaPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel">
      <img
        src={Hero}
        alt="RS Ingeniería corporate website homepage"
        className="block w-full h-auto"
      />
    </div>
  );
}