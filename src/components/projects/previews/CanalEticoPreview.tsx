import Dashboard from "@/assets/projects/canal-etico/dashboard.png";

export function CanalEticoPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel">
      <img
        src={Dashboard}
        alt="Canal Ético administrative dashboard"
        className="block w-full h-auto"
      />
    </div>
  );
}