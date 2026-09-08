import Login from "@/assets/projects/pantteon/login.jpg";
import Controls from "@/assets/projects/pantteon/controls.jpg";
import Events from "@/assets/projects/pantteon/events.jpg";

export function PantteonPreview() {
  return (
    <div className="rounded-xl border border-line bg-panel/50 p-5 lg:p-7">
      <div className="flex items-end justify-center gap-3 lg:gap-4">
        <img
          src={Login}
          alt="Pantteon login screen"
          className="w-[28%] max-w-[150px] rounded-lg border border-line"
        />

        <img
          src={Controls}
          alt="Pantteon controls screen"
          className="w-[34%] max-w-[180px] rounded-lg border border-line"
        />

        <img
          src={Events}
          alt="Pantteon events screen"
          className="w-[28%] max-w-[150px] rounded-lg border border-line"
        />
      </div>
    </div>
  );
}