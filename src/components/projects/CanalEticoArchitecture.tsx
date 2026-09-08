import { ArchitectureArrow } from "./ArchitectureArrow";
import { ArchitectureNode } from "./ArchitectureNode";

export function CanalEticoArchitecture() {
  return (
    <div className="bg-panel rounded-xl border border-line p-8 lg:p-10">

      {/* React */}
      <ArchitectureNode
        title="React + TypeScript"
        subtitle="Vercel"
      />

      <ArchitectureArrow label="HTTPS / REST" />

      {/* Spring */}
      <ArchitectureNode
        title="Java + Spring Boot"
        subtitle="OCI Compute · Linux · Nginx"
      />

      <ArchitectureArrow />

      <div className="grid md:grid-cols-2 gap-4">
        <ArchitectureNode
          title="PostgreSQL"
          subtitle="Application Data"
        />

        <ArchitectureNode
          title="Cloudflare R2"
          subtitle="File Storage"
        />
      </div>

    </div>
  );
}