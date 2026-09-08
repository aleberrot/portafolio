import { Lang } from "@/types";

import { Nav } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { FeatureList } from "@/components/projects/FeatureList";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";

import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

// Ajusta a los nombres reales de tus capturas
import Hero from "@/assets/projects/rs-ingenieria/hero.png";
import About from "@/assets/projects/rs-ingenieria/about.png";
import Services from "@/assets/projects/rs-ingenieria/services.png";
import Sectors from "@/assets/projects/rs-ingenieria/sectors.png";
import QuoteCta from "@/assets/projects/rs-ingenieria/cta.png";
interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export function RsIngenieriaPage({
  lang,
  setLang,
}: Props) {
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  const goToHomeSection = (id: string) => {
    navigate(`/#${id}`);
  };

  const project = projects.find(
    (project) => project.slug === "rs-ingenieria"
  )!;

  const copy = {
  en: {
    overviewTitle: "Overview",
    overview:
      "RS Ingeniería needed a professional digital presence where potential clients could understand its technical services, explore its solutions and quickly contact the company to request information or a quotation. I handled the project from initial design in Figma through frontend development and production deployment.",

    challengeTitle: "The Challenge",
    challenge:
      "The company did not have a website that clearly communicated what it offered or provided potential clients with a direct path to get in touch. The objective was to create a professional corporate presence focused on credibility, service discovery and quotation requests.",

    roleTitle: "My Role",
    role:
      "I was responsible for the complete project, including UI/UX design in Figma, frontend development, responsive implementation and production deployment to the client's hosting environment.",

    designTitle: "Design Approach",
    design:
      "I designed the complete website in Figma with a modern corporate direction, strong visual hierarchy and clear service presentation. The interface was structured to help visitors quickly understand the company, explore its solutions and reach a contact or quotation action.",

    solutionTitle: "The Solution",
    solution:
      "I developed the site using HTML, CSS and vanilla JavaScript, keeping the implementation lightweight and focused on responsive behavior, clear information architecture and reliable performance across desktop and mobile devices.",

    featuresTitle: "Key Features",

    features: [
      "Responsive layout for desktop and mobile",
      "Clear presentation of services and technical solutions",
      "Dedicated company and about sections",
      "Multiple WhatsApp contact points",
      "Quotation-focused calls to action",
      "Highlighted products and solutions",
      "Sliders and carousels for visual content",
      "Basic on-page SEO",
    ],

    conversionTitle: "Conversion-Focused Experience",
    conversion:
      "The website was designed around a simple commercial flow: understand the company, explore its services and solutions, build trust and move toward direct contact or a quotation request. WhatsApp buttons and quotation calls to action were placed throughout the experience to reduce friction for potential clients.",

    responsiveTitle: "Responsive Experience",
    responsive:
      "The interface was developed to adapt across desktop and mobile devices, preserving clear navigation, readable content and access to the main contact actions regardless of screen size.",

    seoTitle: "SEO Fundamentals",
    seo:
      "I implemented basic on-page SEO practices, including page titles, descriptions and semantic HTML structure to give the website a stronger technical foundation for search visibility.",

    deploymentTitle: "Production Deployment",
    deployment:
      "After development, I deployed the website to the client's own hosting environment through cPanel and connected it to its production domain.",

    resultTitle: "Result",
    result:
      "RS Ingeniería gained a dedicated online presence where it could professionally present its services and solutions and provide potential clients with direct channels for contact and quotation requests.",
  },

  es: {
    overviewTitle: "Visión General",
    overview:
      "RS Ingeniería necesitaba una presencia digital profesional donde potenciales clientes pudieran comprender sus servicios técnicos, conocer sus soluciones y contactar rápidamente a la empresa para solicitar información o una cotización. Me encargué del proyecto desde el diseño inicial en Figma hasta el desarrollo frontend y despliegue en producción.",

    challengeTitle: "El Desafío",
    challenge:
      "La empresa no contaba con un sitio web que comunicara claramente lo que ofrecía ni proporcionara a los potenciales clientes un camino directo para contactarla. El objetivo fue crear una presencia corporativa profesional enfocada en credibilidad, descubrimiento de servicios y solicitudes de cotización.",

    roleTitle: "Mi Rol",
    role:
      "Fui responsable del proyecto completo, incluyendo diseño UI/UX en Figma, desarrollo frontend, implementación responsive y despliegue en producción dentro del hosting del cliente.",

    designTitle: "Enfoque de Diseño",
    design:
      "Diseñé el sitio completo en Figma con una dirección corporativa moderna, jerarquía visual clara y una presentación ordenada de los servicios. La interfaz fue estructurada para permitir que los visitantes entendieran rápidamente la empresa, exploraran sus soluciones y llegaran fácilmente a una acción de contacto o cotización.",

    solutionTitle: "La Solución",
    solution:
      "Desarrollé el sitio utilizando HTML, CSS y JavaScript vanilla, manteniendo una implementación liviana y enfocada en comportamiento responsive, arquitectura de información clara y un funcionamiento confiable tanto en escritorio como en dispositivos móviles.",

    featuresTitle: "Funcionalidades Clave",

    features: [
      "Diseño responsive para escritorio y dispositivos móviles",
      "Presentación clara de servicios y soluciones técnicas",
      "Secciones dedicadas a empresa y quiénes somos",
      "Múltiples puntos de contacto mediante WhatsApp",
      "Llamados a la acción orientados a cotización",
      "Productos y soluciones destacadas",
      "Sliders y carruseles para contenido visual",
      "SEO on-page básico",
    ],

    conversionTitle: "Experiencia Orientada a Conversión",
    conversion:
      "El sitio fue diseñado alrededor de un flujo comercial sencillo: conocer la empresa, explorar sus servicios y soluciones, generar confianza y avanzar hacia un contacto directo o solicitud de cotización. Los botones de WhatsApp y llamados a cotizar fueron distribuidos a lo largo de la experiencia para reducir fricción al potencial cliente.",

    responsiveTitle: "Experiencia Responsive",
    responsive:
      "La interfaz fue desarrollada para adaptarse a escritorio y dispositivos móviles, manteniendo navegación clara, contenido legible y acceso a las acciones principales de contacto independientemente del tamaño de pantalla.",

    seoTitle: "Fundamentos SEO",
    seo:
      "Implementé prácticas básicas de SEO on-page, incluyendo títulos de página, descripciones y estructura HTML semántica para entregar al sitio una base técnica más adecuada para visibilidad en buscadores.",

    deploymentTitle: "Despliegue en Producción",
    deployment:
      "Después del desarrollo, desplegué el sitio en el hosting propio del cliente mediante cPanel y lo conecté a su dominio de producción.",

    resultTitle: "Resultado",
    result:
      "RS Ingeniería obtuvo una presencia digital propia donde puede presentar profesionalmente sus servicios y soluciones y ofrecer a potenciales clientes canales directos para contacto y solicitudes de cotización.",
  },
}[lang];

  return (
  <div className="min-h-screen bg-canvas text-ink">

    <Nav
      lang={lang}
      setLang={setLang}
      onScrollTo={goToHomeSection}
      onHome={goHome}
    />

    <ProjectHero
      category={project.category[lang]}
      title={project.title}
      tagline={project.desc[lang]}
      role={project.roles[lang].join(" · ")}
      timeline={lang === "en" ? "Less than 2 weeks" : "Menos de 2 semanas"}
      platform={lang === "en" ? "Responsive Website" : "Sitio Web Responsive"}
      status={lang === "en" ? "Live in Production" : "En Producción"}
      tech={project.tech}
    />

    <main className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24">

  {/* Main website */}
  <ProjectGallery
    images={[
      {
        src: Hero,
        alt: "RS Ingeniería corporate website homepage",
      },
    ]}
    columns={1}
  />

  {/* Context */}
  <div className="max-w-3xl mt-20 lg:mt-28">

    <ProjectSection title={copy.overviewTitle}>
      <p>{copy.overview}</p>
    </ProjectSection>

    <ProjectSection title={copy.challengeTitle}>
      <p>{copy.challenge}</p>
    </ProjectSection>

    <ProjectSection title={copy.roleTitle}>
      <p>{copy.role}</p>
    </ProjectSection>

    <ProjectSection title={copy.designTitle}>
      <p>{copy.design}</p>
    </ProjectSection>

  </div>

  {/* Website design */}
  <div className="my-16 lg:my-24">
    <ProjectGallery
      images={[
        {
          src: About,
          alt: "RS Ingeniería company presentation section",
        },
        {
          src: Services,
          alt: "RS Ingeniería services section",
        },
      ]}
      columns={2}
    />
  </div>

  <div className="max-w-3xl">

    <ProjectSection title={copy.solutionTitle}>
      <p>{copy.solution}</p>
    </ProjectSection>

    <ProjectSection title={copy.featuresTitle}>
      <FeatureList items={copy.features} />
    </ProjectSection>

    <ProjectSection title={copy.conversionTitle}>
      <p>{copy.conversion}</p>
    </ProjectSection>

  </div>

  {/* Commercial flow */}
  <div className="my-16 lg:my-24">
    <ProjectGallery
      images={[
        {
          src: Sectors,
          alt: "RS Ingeniería solutions by sector carousel",
        },
        {
          src: QuoteCta,
          alt: "RS Ingeniería project quotation call to action",
        },
      ]}
      columns={2}
    />
  </div>

  <div className="max-w-3xl">

    <ProjectSection title={copy.responsiveTitle}>
      <p>{copy.responsive}</p>
    </ProjectSection>

    <ProjectSection title={copy.seoTitle}>
      <p>{copy.seo}</p>
    </ProjectSection>

    <ProjectSection title={copy.deploymentTitle}>
      <p>{copy.deployment}</p>
    </ProjectSection>

    <ProjectSection title={copy.resultTitle}>
      <p>{copy.result}</p>
    </ProjectSection>

  </div>

  <ProjectNavigation
    lang={lang}
    nextSlug="canal-etico"
    nextTitle="Canal Ético"
  />

  </main>

    <Footer
      lang={lang}
      onHome={goHome}
    />

  </div>
);
}