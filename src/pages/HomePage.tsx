import { WorkSection } from "@/sections/WorkSection";
import { Nav } from "@/components/layout/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { Lang } from "@/types";
import { Page } from "@/App";

// ── Home page ─────────────────────────────────────────────────────────────────
export function HomePage({ lang, setLang, setPage }: { lang: Lang; setLang: (l: Lang) => void; setPage: (p: Page) => void }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-canvas text-ink min-h-screen">
      <Nav lang={lang} setLang={setLang} onScrollTo={scrollTo} onHome={() => {}} />
      <HeroSection lang={lang} onScrollTo={scrollTo} />
      <WorkSection lang={lang} setPage={setPage} />
      <ServicesSection lang={lang} />
      <ExperienceSection lang={lang} />
      <AboutSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} onHome={() => {}} />
    </div>
  )
}