import { Lang } from "@/types";
import { MailIcon, LinkedinIcon, GithubIcon } from "../ui/icons";
import { contact } from "@/data/contact";


// ── Footer ────────────────────────────────────────────────────────────────────
export function Footer({ lang, onHome }: { lang: Lang; onHome: () => void }) {
  const en = lang === 'en'
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <button onClick={onHome} className="font-mono text-sm text-ink/70 hover:text-ink transition-colors mb-1">AB</button>
          <p className="text-dim text-[13px]">{en ? 'Full-Stack & Mobile Developer' : 'Desarrollador Full-Stack & Mobile'}</p>
        </div>
        <div className="flex items-center gap-5">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-dim hover:text-ink transition-colors" aria-label="GitHub"><GithubIcon /></a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-dim hover:text-ink transition-colors" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href={contact.email} className="text-dim hover:text-ink transition-colors" aria-label="Email"><MailIcon /></a>
        </div>
        <p className="text-dim text-[12px] font-mono">
        © {new Date().getFullYear()} Alejandro Berroteran
        </p>
      </div>
    </footer>
  )
}