import Card from "./card";
import styles from "./project.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Projects() {
  const projects = [
    {
      titulo: "Kate's Bienes y Raices",
      imagen: `${import.meta.env.BASE_URL}proj/proj3.jpg`,
      link: "https://www.instagram.com/katebienesyraices/"
    },
    {
      titulo: "Thriffthy Colosio",
      imagen: `${import.meta.env.BASE_URL}proj/proj2.png`,
      link: "https://www.instagram.com/thriftycolosio/"
    },
    {
      titulo: "Kate's Bienes y Raices",
      imagen: `${import.meta.env.BASE_URL}proj/proj3.jpg`,
      link: "https://www.instagram.com/katebienesyraices/"
    }
  ];

  return (
    <section
      id="projects"
      className="bg-lavender-web hidden w-full flex-col items-center py-4 lg:flex"
    >
      <h3 className="text-gunmetal text-4xl font-semibold">Proyectos</h3>
      <span className="text-gunmetal mb-8 w-full text-center text-xl font-semibold md:w-1/2">
        Casos de exito que han traido multiples beneficios a nuestros clientes
      </span>
      <div className={`${styles.projectGroup} flex min-h-80 w-full`}>
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.projectItem} relative flex w-1/3 flex-col text-center transition-all duration-300`}
          >
            <LazyLoadImage
              className="absolute top-1/2 left-1/2 w-2/3 -translate-1/2"
              src={project.imagen}
              alt={`Imagen del proyecto ${project.titulo}`}
            />
            <h4 className={`${styles.text} mx-auto w-1/2 text-3xl font-bold`}>
              {project.titulo}
            </h4>
          </a>
        ))}
      </div>
    </section>
  );
}
