import Card from "./card";
import styles from "./project.module.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-lavender-web hidden w-full flex-col items-center py-4 lg:flex"
    >
      <h3 className="text-gunmetal text-4xl font-semibold">Proyectos</h3>
      <span className="text-gunmetal mb-8 w-full text-center text-xl font-semibold md:w-1/2">
        Casos de exito que han traido multiples beneficios a nuestros clientes
      </span>
      <div className={`${styles.projectGroup} flex w-full`}>
        <div
          className={`${styles.projectItem} relative flex aspect-video w-1/3 flex-col text-center transition-all duration-300`}
        >
          <img
            className="absolute w-full"
            src={`${import.meta.env.BASE_URL}proj/proj1.jpg`}
            alt="project"
          />
          <h4
            className={`${styles.text} mt-12 mb-4 text-3xl font-bold text-shadow-lg`}
          >
            Thriffthy Colosio
          </h4>
          <span
            className={`${styles.text} my-4 text-xl font-bold text-shadow-lg`}
          >
            Manejo de Redes sociales
          </span>
          <span
            className={`${styles.text} mt-4 mb-12 text-xl font-bold text-shadow-lg`}
          >
            Algo mas importante
          </span>
        </div>
        <div
          className={`${styles.projectItem} text-gunmetal relative flex aspect-video w-1/3 flex-col text-center transition-all duration-300`}
        >
          <img
            className="absolute w-full"
            src={`${import.meta.env.BASE_URL}proj/proj1.jpg`}
            alt="project"
          />
          <h4
            className={`${styles.text} text-shadow-xl mt-12 mb-4 text-3xl font-bold`}
          >
            Empresa
          </h4>
          <span
            className={`${styles.text} text-shadow-xl my-4 text-xl font-bold`}
          >
            Servicio provisto
          </span>
          <span
            className={`${styles.text} text-shadow-xl mt-4 mb-12 text-xl font-bold`}
          >
            Algo mas importante
          </span>
        </div>
        <div
          className={`${styles.projectItem} text-gunmetal relative flex aspect-video w-1/3 flex-col text-center transition-all duration-300`}
        >
          <img
            className="absolute w-full"
            src={`${import.meta.env.BASE_URL}proj/proj1.jpg`}
            alt="project"
          />
          <h4
            className={`${styles.text} text-shadow-xl mt-12 mb-4 text-3xl font-bold`}
          >
            Empresa
          </h4>
          <span
            className={`${styles.text} text-shadow-xl my-4 text-xl font-bold`}
          >
            Servicio provisto
          </span>
          <span
            className={`${styles.text} text-shadow-xl mt-4 mb-12 text-xl font-bold`}
          >
            Algo mas importante
          </span>
        </div>
      </div>
    </section>
  );
}
