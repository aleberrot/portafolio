import { Project } from "@/types"

export const projects: Project[] = [
  {
    num: '01',
    slug: 'canal-etico',
    category: { en: 'Full-Stack Web Application', es: 'Aplicación Web Full-Stack' },
    title: 'Canal Ético',
    desc: {
      en: 'A multi-company whistleblowing platform for secure workplace reporting and centralized case management.',
      es: 'Plataforma multiempresa de denuncias para reportes seguros en el trabajo y gestión centralizada de casos.',
    },
    roles: { en: ['Full-Stack Development', 'UI/UX Design', 'Cloud Deployment'], es: ['Desarrollo Full-Stack', 'Diseño UI/UX', 'Despliegue en la Nube'] },
    tech: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'OCI'],
    layout: 'right',
  },
  {
    num: '02',
    slug: 'pantteon',
    category: { en: 'Mobile App Modernization', es: 'Modernización de App Móvil' },
    title: 'Pantteon',
    desc: {
      en: 'Modernizing an existing React Native application with a new interface, improved usability and cross-platform production delivery.',
      es: 'Modernización de una app React Native con nueva interfaz, mejor usabilidad y entrega multiplataforma en producción.',
    },
    roles: { en: ['Mobile Development', 'UI/UX Design', 'App Modernization'], es: ['Desarrollo Mobile', 'Diseño UI/UX', 'Modernización de App'] },
    tech: ['React Native', 'JavaScript', 'Expo', 'EAS', 'Figma'],
    layout: 'left',
  },
  {
    num: '03',
    slug: 'rs-ingenieria',
    category: { en: 'Corporate Website', es: 'Sitio Web Corporativo' },
    title: 'RS Ingeniería',
    desc: {
      en: 'A responsive corporate website designed to establish a strong digital presence and turn visitors into business inquiries.',
      es: 'Sitio web corporativo responsivo diseñado para establecer presencia digital y convertir visitantes en consultas de negocio.',
    },
    roles: { en: ['UI/UX Design', 'Frontend Development', 'Responsive Design'], es: ['Diseño UI/UX', 'Desarrollo Frontend', 'Diseño Responsivo'] },
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    layout: 'full',
  },
]