import { Lang } from "@/types";
import { Nav } from "@/components/layout/Navbar";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { projects } from "@/data/projects";
import { useNavigate } from "react-router-dom";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { ChallengeList } from "@/components/projects/ChallengeList";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectSection } from "@/components/projects/ProjectSection";
import Language from "@/assets/projects/pantteon/language.jpg";
import Controls from "@/assets/projects/pantteon/controls.jpg";
import ControlDetail from "@/assets/projects/pantteon/control-detail.jpg";
import Login from "@/assets/projects/pantteon/login.jpg";
import Events from "@/assets/projects/pantteon/events.jpg";

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export function PantteonPage({
  lang,
  setLang,
}: Props) {
  const content = projects.find(({slug}) => slug == "pantteon")!;
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  const goToHomeSection = (id: string) => {
  navigate(`/#${id}`);
  }

  const copy = {
  en: {
    overviewTitle: "Overview",
    overview:
      "Pantteon is a React Native mobile application used to manage and review operational controls for hotels and buildings. I joined an existing functional codebase and focused on modernizing the mobile experience, improving usability and preparing the application for reliable production delivery on Android and iOS.",

    startingPointTitle: "The Starting Point",
    startingPoint:
      "When I joined the project, the application was already functional but contained legacy code, outdated dependencies and an interface that felt visually dated. The main objective was to modernize the product without rebuilding the existing backend or authentication system.",

    roleTitle: "My Role",
    role:
      "I worked independently on the mobile application, focusing on UI/UX design and frontend development. I designed the new interface in Figma, implemented the redesigned screens in React Native, refactored parts of the existing codebase and handled the mobile production delivery process.",

    redesignTitle: "UI/UX Redesign",
    redesign:
      "I redesigned the main application experience in Figma, including loading, login, home, controls and other core screens. The goal was to make the application feel more modern, accessible and intuitive while preserving its existing business functionality.",

    navigationTitle: "Navigation Modernization",
    navigation:
      "I introduced a Drawer + Stack navigation structure to create a clearer and more modern mobile experience. I also fixed navigation issues and improved visual consistency across screens.",

    existingCodeTitle: "Working with an Existing Codebase",
    existingCode:
      "Part of the work involved understanding and refactoring legacy React Native code. Some older libraries were causing compatibility problems on newer devices, so I replaced or updated dependencies where necessary while keeping the existing application behavior intact.",

    offlineTitle: "Offline Usability",
    offline:
      "The application previously became unusable when there was no internet connection. I improved this experience by allowing users to access information that had already been loaded previously, even while offline.",

    multilingualTitle: "Multilingual Support",
    multilingual:
      "I implemented multilingual support for Spanish, English and Portuguese using a dictionary-based structure that allowed the interface text to change dynamically according to the selected language.",

    interactionTitle: "Onboarding & Interaction",
    interaction:
      "I added a tutorial to help users understand how to use the application and introduced lightweight animations in the home and start screens to make the interface feel more dynamic and engaging.",

    productionTitle: "Cross-Platform Production Delivery",
    production:
      "I worked on both Android and iOS, using Expo and EAS for testing and production builds. I generated development builds, configured production builds and handled the application publication process for Google Play and the App Store, including signing keys, testing and release preparation.",

    challengeTitle: "Technical Challenges",

    challenges: [
      {
        title: "Modernizing legacy dependencies",
        description:
          "Some libraries in the existing React Native project were outdated and produced compatibility problems on current devices. I replaced or updated them while preserving the app's existing functionality.",
      },
      {
        title: "Cross-platform testing",
        description:
          "The application needed to work reliably on both Android and iOS. Since I did not have direct access to an iPhone, I coordinated testing on iOS devices while continuing development and validation across both platforms.",
      },
      {
        title: "Production signing and store delivery",
        description:
          "Publishing required handling production builds, application signing and store requirements. During the Google Play release process, I also resolved a signing-key issue by updating the required keys.",
      },
    ],

    resultTitle: "Result",
    result:
      "The redesigned version reached real users and was successfully delivered to production on Android and iOS. The application gained a more modern and accessible interface while preserving the existing backend and core business functionality.",
  },

  es: {
    overviewTitle: "Visión General",
    overview:
      "Pantteon es una aplicación móvil desarrollada en React Native utilizada para gestionar y revisar controles operacionales en hoteles y edificios. Me incorporé sobre una aplicación ya funcional y me enfoqué en modernizar la experiencia móvil, mejorar la usabilidad y preparar la aplicación para su entrega en producción en Android e iOS.",

    startingPointTitle: "El Punto de Partida",
    startingPoint:
      "Cuando me incorporé al proyecto, la aplicación ya funcionaba, pero contenía código legacy, dependencias antiguas y una interfaz visualmente desactualizada. El objetivo principal era modernizar el producto sin reconstruir el backend ni modificar el sistema de autenticación existente.",

    roleTitle: "Mi Rol",
    role:
      "Trabajé de forma independiente sobre la aplicación móvil, enfocándome en diseño UI/UX y desarrollo frontend. Diseñé la nueva interfaz en Figma, implementé las pantallas rediseñadas en React Native, refactoricé partes del código existente y gestioné el proceso de entrega móvil a producción.",

    redesignTitle: "Rediseño UI/UX",
    redesign:
      "Rediseñé en Figma la experiencia principal de la aplicación, incluyendo las pantallas de carga, login, home, controles y otros flujos principales. El objetivo fue hacer que la aplicación se sintiera más moderna, accesible e intuitiva sin alterar su funcionalidad empresarial existente.",

    navigationTitle: "Modernización de la Navegación",
    navigation:
      "Implementé una estructura de navegación basada en Drawer + Stack para crear una experiencia móvil más clara y moderna. También corregí problemas de navegación y mejoré la consistencia visual entre las distintas pantallas.",

    existingCodeTitle: "Trabajo con Código Existente",
    existingCode:
      "Parte del trabajo consistió en comprender y refactorizar código legacy en React Native. Algunas librerías antiguas estaban generando problemas de compatibilidad en dispositivos actuales, por lo que actualicé o reemplacé dependencias cuando fue necesario sin alterar el comportamiento principal de la aplicación.",

    offlineTitle: "Uso Offline",
    offline:
      "Anteriormente, la aplicación dejaba de ser utilizable cuando no había conexión a internet. Mejoré esta experiencia permitiendo que los usuarios pudieran acceder a información que ya había sido cargada previamente incluso sin conexión.",

    multilingualTitle: "Soporte Multiidioma",
    multilingual:
      "Implementé soporte para español, inglés y portugués utilizando una estructura basada en diccionarios que permitía cambiar dinámicamente los textos de la interfaz según el idioma seleccionado.",

    interactionTitle: "Onboarding e Interacción",
    interaction:
      "Agregué un tutorial para facilitar el aprendizaje de uso de la aplicación e incorporé animaciones ligeras en las pantallas de inicio y home para darle más dinamismo e interacción a la experiencia.",

    productionTitle: "Entrega Multiplataforma a Producción",
    production:
      "Trabajé tanto en Android como en iOS utilizando Expo y EAS para pruebas y builds de producción. Generé builds de desarrollo, configuré las versiones de producción y gestioné el proceso de publicación en Google Play y App Store, incluyendo firmas, pruebas y preparación de releases.",

    challengeTitle: "Desafíos Técnicos",

    challenges: [
      {
        title: "Modernización de dependencias legacy",
        description:
          "Algunas librerías del proyecto React Native estaban desactualizadas y generaban problemas de compatibilidad en dispositivos actuales. Fue necesario actualizarlas o reemplazarlas manteniendo la funcionalidad existente.",
      },
      {
        title: "Pruebas multiplataforma",
        description:
          "La aplicación debía funcionar correctamente tanto en Android como en iOS. Al no contar directamente con un iPhone, coordiné pruebas en dispositivos iOS mientras continuaba el desarrollo y validación en ambas plataformas.",
      },
      {
        title: "Firma y publicación en stores",
        description:
          "La publicación requirió gestionar builds de producción, firmas y requerimientos de las tiendas. Durante el proceso de Google Play también resolví un problema relacionado con las claves de firma actualizando las keys necesarias.",
      },
    ],

    resultTitle: "Resultado",
    result:
      "La versión rediseñada llegó a usuarios reales y fue entregada exitosamente a producción en Android e iOS. La aplicación obtuvo una interfaz más moderna y accesible manteniendo intactos el backend existente y la funcionalidad principal del negocio.",
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

  {/* Main mobile screens */}
  <ProjectGallery variant="mobile"
    images={[
      {
        src: Login,
        alt: "Pantteon redesigned login interface",
      },
      {
        src: Controls,
        alt: "Pantteon operational controls screen",
      },
      {
        src: Events,
        alt: "Pantteon events interface",
      },
    ]}
    columns={3}
  />

  {/* Overview */}
  <div className="max-w-3xl mt-20 lg:mt-28">

    <ProjectSection title={copy.overviewTitle}>
      <p>{copy.overview}</p>
    </ProjectSection>

    <ProjectSection title={copy.startingPointTitle}>
      <p>{copy.startingPoint}</p>
    </ProjectSection>

    <ProjectSection title={copy.roleTitle}>
      <p>{copy.role}</p>
    </ProjectSection>

    <ProjectSection title={copy.redesignTitle}>
      <p>{copy.redesign}</p>
    </ProjectSection>

  </div>

  {/* UI details */}
  <div className="my-16 lg:my-24 max-w-[360px]">
    <ProjectGallery
      images={[
        {
          src: Controls,
          alt: "Pantteon controls list",
        },
        {
          src: ControlDetail,
          alt: "Pantteon control detail interface",
        },
      ]}
      columns={2}
    />
  </div>

  {/* Modernization */}
  <div className="max-w-3xl">

    <ProjectSection title={copy.navigationTitle}>
      <p>{copy.navigation}</p>
    </ProjectSection>

    <ProjectSection title={copy.existingCodeTitle}>
      <p>{copy.existingCode}</p>
    </ProjectSection>

    <ProjectSection title={copy.offlineTitle}>
      <p>{copy.offline}</p>
    </ProjectSection>

    <ProjectSection title={copy.multilingualTitle}>
      <p>{copy.multilingual}</p>
    </ProjectSection>

    <ProjectSection title={copy.interactionTitle}>
      <p>{copy.interaction}</p>
    </ProjectSection>

  </div>

  {/* Language / profile */}
  <div className="my-16 lg:my-24 max-w-[320px]">
    <ProjectGallery
      images={[
        {
          src: Language,
          alt: "Pantteon language selection interface",
        },
      ]}
      columns={1}
    />
  </div>

  {/* Production */}
  <div className="max-w-3xl">

    <ProjectSection title={copy.productionTitle}>
      <p>{copy.production}</p>
    </ProjectSection>

    <ProjectSection title={copy.challengeTitle}>
      <ChallengeList items={copy.challenges} />
    </ProjectSection>

    <ProjectSection title={copy.resultTitle}>
      <p>{copy.result}</p>
    </ProjectSection>

  </div>

  <ProjectNavigation
    lang={lang}
    nextSlug="rs-ingenieria"
    nextTitle="RS Ingeniería"
  />

  </main>
  </div>
  );
}