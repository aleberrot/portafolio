import { Lang } from "@/types";
import { Nav } from "@/components/layout/Navbar";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { FeatureList } from "@/components/projects/FeatureList";
import { ChallengeList } from "@/components/projects/ChallengeList";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { Footer } from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { CanalEticoArchitecture } from "@/components/projects/CanalEticoArchitecture";
import Hero from "@/assets/projects/canal-etico/hero.png";
import ReportForm from "@/assets/projects/canal-etico/report-form.png";
import ReportSuccess from "@/assets/projects/canal-etico/report-success.png";
import Status from "@/assets/projects/canal-etico/status.png";
import Tracking from "@/assets/projects/canal-etico/tracking.png";
import Dashboard from "@/assets/projects/canal-etico/dashboard.png";

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export function CanalEticoPage({
  lang,
  setLang,
}: Props) {
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  const goToHomeSection = (id: string) => {
  navigate(`/#${id}`);
  };

  const content = projects.find(({slug}) => slug === "canal-etico")!;

  const copy = {
  en: {
    overviewTitle: "Overview",
    overview:
      "Canal Ético is a multi-company web platform that allows organizations to receive and manage workplace reports through dedicated reporting channels and centralized administration. Each company can operate its own branded channel while administrators manage cases from a centralized dashboard.",

    challengeTitle: "The Challenge",
    challenge:
      "The platform needed to support multiple organizations from the same application while providing each company with its own reporting experience and visual identity. Reports also needed to be submitted without requiring a user account and later accessed securely for follow-up.",

    roleTitle: "My Role",
    role:
      "I was responsible for the complete product lifecycle, from interface design in Figma to frontend and backend development, database integration, infrastructure configuration and production deployment.",

    solutionTitle: "The Solution",
    solution:
      "I built a React and TypeScript frontend connected to a Java Spring Boot REST API. Application data is stored in PostgreSQL, while supporting evidence and attachments are stored in Cloudflare R2. The backend runs on an OCI Linux instance and is exposed through Nginx.",

    featuresTitle: "Key Features",

    features: [
      "Multi-company reporting platform",
      "Company-specific branding and reporting channels",
      "Anonymous or optionally identified reporting",
      "Report tracking using a unique code and password",
      "Supporting document and file uploads",
      "Centralized administrative dashboard",
      "Report status and follow-up management",
      "Support for general workplace reports and Ley Karin complaints",
    ],

    reportingTitle: "Reporting Experience",
    reporting:
      "Users can access a company-specific reporting channel, choose the type of report, describe the incident, identify people involved and witnesses, provide optional contact information and attach supporting documentation. After submitting the report, the platform generates a unique tracking code.",

    trackingTitle: "Report Tracking",
    tracking:
      "No account is required to follow a report. Users can return to the platform using the tracking code together with the password created during submission. From there, they can review the report status and provide additional information or supporting files.",

    adminTitle: "Administrative Experience",
    admin:
      "Administrators can select a company, review report totals and statuses, inspect individual cases, update their status, add responses and download supporting attachments from the centralized management interface.",

    architectureTitle: "System Architecture",

    challengesTitle: "Technical Challenges",

    challenges: [
      {
        title: "Dynamic multi-company branding",
        description:
          "The application identifies the organization through the reporting URL and dynamically loads the corresponding company information and visual identity.",
      },
      {
        title: "Production deployment on OCI",
        description:
          "The Spring Boot backend was deployed to an Oracle Cloud Infrastructure Linux instance, configured as a service and exposed through Nginx.",
      },
      {
        title: "Database infrastructure cost",
        description:
          "PostgreSQL was initially hosted on NeonDB and was later migrated to the OCI environment to reduce recurring infrastructure costs.",
      },
    ],

    securityTitle: "Security",
    security:
      "Administrative endpoints are protected using HTTP Basic Authentication. Report passwords are stored securely using password hashing, and communication between the frontend and backend is served over HTTPS.",

    resultTitle: "Result",
    result:
      "The platform was successfully deployed to production and is currently in use. After launch, only minor adjustments were requested by the client.",
  },

  es: {
    overviewTitle: "Visión General",
    overview:
      "Canal Ético es una plataforma web multiempresa que permite a distintas organizaciones recibir y gestionar denuncias laborales mediante canales dedicados y una administración centralizada. Cada empresa dispone de su propio canal con identidad visual mientras los casos se gestionan desde un panel administrativo común.",

    challengeTitle: "El Desafío",
    challenge:
      "La plataforma debía soportar múltiples organizaciones desde una misma aplicación, proporcionando a cada empresa su propia experiencia de denuncia e identidad visual. Además, las denuncias debían poder realizarse sin crear una cuenta y consultarse posteriormente de forma segura.",

    roleTitle: "Mi Rol",
    role:
      "Fui responsable del ciclo completo del producto, desde el diseño de interfaces en Figma hasta el desarrollo frontend y backend, integración de base de datos, configuración de infraestructura y despliegue en producción.",

    solutionTitle: "La Solución",
    solution:
      "Desarrollé un frontend en React y TypeScript conectado a una API REST construida con Java y Spring Boot. Los datos de la aplicación se almacenan en PostgreSQL, mientras que los documentos y archivos adjuntos se almacenan en Cloudflare R2. El backend funciona en una instancia Linux de OCI y se expone mediante Nginx.",

    featuresTitle: "Funcionalidades Clave",

    features: [
      "Plataforma de denuncias multiempresa",
      "Branding y canales específicos para cada empresa",
      "Denuncias anónimas o con identificación opcional",
      "Seguimiento mediante código único y contraseña",
      "Carga de documentos y archivos de respaldo",
      "Panel administrativo centralizado",
      "Gestión de estados y seguimiento de denuncias",
      "Soporte para denuncias generales y denuncias asociadas a Ley Karin",
    ],

    reportingTitle: "Experiencia de Denuncia",
    reporting:
      "Los usuarios pueden acceder al canal específico de una empresa, seleccionar el tipo de denuncia, describir el incidente, indicar personas involucradas y testigos, proporcionar información de contacto opcional y adjuntar documentación de respaldo. Al enviar la denuncia, la plataforma genera un código único de seguimiento.",

    trackingTitle: "Seguimiento de Denuncias",
    tracking:
      "No es necesario crear una cuenta para consultar una denuncia. El usuario puede regresar a la plataforma utilizando el código de seguimiento junto con la contraseña creada al momento de enviar el reporte. Desde allí puede revisar el estado y añadir información o archivos adicionales.",

    adminTitle: "Experiencia Administrativa",
    admin:
      "Los administradores pueden seleccionar una empresa, revisar totales y estados de las denuncias, consultar casos individuales, modificar su estado, añadir respuestas y descargar los archivos adjuntos desde una interfaz centralizada.",

    architectureTitle: "Arquitectura del Sistema",

    challengesTitle: "Desafíos Técnicos",

    challenges: [
      {
        title: "Branding dinámico multiempresa",
        description:
          "La aplicación identifica la organización mediante la URL del canal de denuncias y carga dinámicamente la información e identidad visual correspondiente.",
      },
      {
        title: "Despliegue en producción sobre OCI",
        description:
          "El backend de Spring Boot fue desplegado en una instancia Linux de Oracle Cloud Infrastructure, configurado como servicio y expuesto mediante Nginx.",
      },
      {
        title: "Costo de infraestructura de base de datos",
        description:
          "PostgreSQL estuvo inicialmente alojado en NeonDB y posteriormente fue migrado al entorno de OCI para reducir costos recurrentes de infraestructura.",
      },
    ],

    securityTitle: "Seguridad",
    security:
      "Los endpoints administrativos están protegidos mediante HTTP Basic Authentication. Las contraseñas utilizadas para consultar denuncias se almacenan utilizando hashing y la comunicación entre frontend y backend se realiza mediante HTTPS.",

    resultTitle: "Resultado",
    result:
      "La plataforma fue desplegada exitosamente en producción y actualmente se encuentra en uso. Después del lanzamiento, el cliente solo solicitó modificaciones menores.",
  },
  }[lang];
  return (
    <div className="min-h-screen bg-canvas text-ink p-16">
      <Nav lang={lang} setLang={setLang} onScrollTo={goToHomeSection} onHome={goHome}/>
        <ProjectHero
        category={content.category[lang]}
        title={content.title}
        tagline={content.desc[lang]}
        role={content.roles[lang].join(" · ")}
        timeline={content.timeline[lang]}
        platform={content.platform[lang]}
        status={content.status[lang]}
        tech={content.tech}
        />

        <main className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
            {/* Hero visual */}
            <ProjectGallery
              images={[
                {
                  src: Hero,
                  alt: "Company-specific Canal Ético reporting portal",
                },
              ]}
              columns={1}
            />

            {/* Overview / Challenge / Role */}
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

              <ProjectSection title={copy.solutionTitle}>
                <p>{copy.solution}</p>
              </ProjectSection>

            </div>

            {/* Form submission */}
            <div className="my-16 lg:my-24">
              <ProjectGallery
                images={[
                  {
                    src: ReportForm,
                    alt: "Workplace report submission form",
                  },
                  {
                    src: ReportSuccess,
                    alt: "Successful report submission with tracking code",
                  },
                ]}
                columns={2}
              />
            </div>

            {/* Features */}
            <div className="max-w-3xl">

              <ProjectSection title={copy.featuresTitle}>
                <FeatureList items={copy.features} />
              </ProjectSection>

              <ProjectSection title={copy.reportingTitle}>
                <p>{copy.reporting}</p>
              </ProjectSection>

            </div>

            {/* Tracking */}
            <div className="my-16 lg:my-24">
              <ProjectGallery
                images={[
                  {
                    src: Tracking,
                    alt: "Report tracking using code and password",
                  },
                  {
                    src: Status,
                    alt: "Report status and follow-up screen",
                  },
                ]}
                columns={2}
              />
            </div>

            <div className="max-w-3xl">

              <ProjectSection title={copy.trackingTitle}>
                <p>{copy.tracking}</p>
              </ProjectSection>

              <ProjectSection title={copy.adminTitle}>
                <p>{copy.admin}</p>
              </ProjectSection>

            </div>

            {/* Admin dashboard */}
            <div className="my-16 lg:my-24">
              <ProjectGallery
                images={[
                  {
                    src: Dashboard,
                    alt: "Canal Ético centralized administrative dashboard",
                  },
                ]}
                columns={1}
              />
            </div>

            {/* Architecture */}
            <div className="max-w-4xl">

              <ProjectSection title={copy.architectureTitle}>
                <CanalEticoArchitecture />
              </ProjectSection>

            </div>

            {/* Engineering details */}
            <div className="max-w-3xl mt-20">

              <ProjectSection title={copy.challengesTitle}>
                <ChallengeList items={copy.challenges} />
              </ProjectSection>

              <ProjectSection title={copy.securityTitle}>
                <p>{copy.security}</p>
              </ProjectSection>

              <ProjectSection title={copy.resultTitle}>
                <p>{copy.result}</p>
              </ProjectSection>

            </div>

            {/* Navigation */}
            <ProjectNavigation
              lang={lang}
              nextSlug="pantteon"
              nextTitle="Pantteon"
            />
        </main>
      <Footer  lang={lang} onHome={goHome}/>
    </div>
  );
}