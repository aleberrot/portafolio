export type Lang = 'en' | 'es'



// ── Data ──────────────────────────────────────────────────────────────────────
export interface Project {
  num: string
  slug: string
  category: { en: string; es: string }
  title: string
  desc: { en: string; es: string }
  roles: { en: string[]; es: string[] }
  tech: string[]
  layout: 'right' | 'left' | 'full'
  timeline: {en: string; es: string}
  status: {en: string; es: string}
  platform: {en: string; es: string}
}
