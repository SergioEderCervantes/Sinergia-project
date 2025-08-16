import Card from "./cardv1";
import { BiBadge } from "react-icons/bi";
export default function Services() {
  const ourServices = {
    services: [
      {
        title: "Gestión de redes sociales",
        color: "#3B82F6",
        bullets: [
          "Estrategias de contenido personalizadas.",
          "Calendarización y publicación constante.",
          "Optimización de perfiles para mayor alcance.",
          "Monitoreo e interacción con la comunidad.",
        ],
      },
      {
        title: "Creación de contenido profesional",
        color: "#EF4444",
        bullets: [
          "Fotografía y video para redes.",
          "Reels y TikToks con storytelling y tendencias.",
          "Producción y edición de videos publicitarios.",
          "Motion graphics y animaciones simples.",
        ],
      },
      {
        title: "Branding y diseño gráfico",
        color: "#FACC15",
        bullets: [
          "Diseño de logotipos y manuales de marca.",
          "Moodboards y paletas de color.",
          "Plantillas y artes para redes sociales.",
          "Material gráfico para campañas.",
        ],
      },
      {
        title: "Publicidad digital",
        color: "#F97316",
        bullets: [
          "Campañas en Meta Ads, Google Ads y TikTok Ads.",
          "Segmentación, píxel y retargeting.",
          "Optimización para ROI positivo.",
        ],
      },
      {
        title: "Páginas web y sistemas",
        color: "#1E3A8A",
        bullets: [
          "Desarrollo de sitios web responsivos.",
          "Tiendas en línea y plataformas de e-commerce.",
          "Sistemas personalizados para gestión empresarial.",
          "Integraciones con pasarelas de pago y CRMs.",
        ],
      },
      {
        title: "Estrategia y consultoría",
        color: "#7C3AED",
        bullets: [
          "Estudios de mercado y competencia.",
          "Análisis de métricas y reportes detallados.",
          "Propuestas de mejora y tendencias aplicables.",
          "Capacitación a empresas y equipos.",
        ],
      },
    ],
  };

  return (
    <section id="services" className="flex flex-col items-center py-5 xl:p-12">
      <h2 className="text-gunmetal-600 my-2 text-4xl">Nuestros Servicios</h2>
      <span className="text-gunmetal-600 w-full text-center text-xl md:w-1/2">
        Soluciones integrales de marketing diseñadas para escalar tu negocio y
        maximizar tu impacto en el mercado
      </span>
      <div className="flex w-10/12 gap-4 flex-wrap justify-evenly">
        {ourServices.services.map((service, idx) => (
          <Card
            key={idx}
            icon={BiBadge}
            service= {service}
          />
        ))}
      </div>
    </section>
  );
}
