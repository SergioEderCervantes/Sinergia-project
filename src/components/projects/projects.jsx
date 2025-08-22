import Card from "./card";
import styles from "./project.module.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-lavender-web-200 hidden w-full flex-col items-center py-4 lg:flex"
    >
      <h3 className="text-4xl">Proyectos</h3>
      <span className="text-gunmetal-600 mb-8 w-full text-center text-xl md:w-1/2">
        Casos de exito que han traido multiples beneficios a nuestros clientes
      </span>
      <div className={`${styles.projectGroup} flex w-full`}>
        <div
          className={`${styles.projectItem} relative flex aspect-video w-1/3 flex-col  text-center transition-all duration-300`}
        >
          <img
            className="absolute w-full"
            src={`${import.meta.env.BASE_URL}proj/proj1.jpg`}
            alt="project"
          />
          <h4
            className={`${styles.text} text-shadow-lg mt-12 mb-4 text-3xl font-bold`}
          >
            Thriffthy Colosio
          </h4>
          <span
            className={`${styles.text} text-shadow-lg my-4 text-xl font-bold`}
          >
            Manejo de Redes sociales
          </span>
          <span
            className={`${styles.text} text-shadow-lg mt-4 mb-12 text-xl font-bold`}
          >
            Algo mas importante
          </span>
        </div>
        <div
          className={`${styles.projectItem} relative flex aspect-video w-1/3 flex-col  text-center text-gunmetal transition-all duration-300`}
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
          className={`${styles.projectItem} relative flex aspect-video w-1/3 flex-col  text-center text-gunmetal transition-all duration-300`}
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
