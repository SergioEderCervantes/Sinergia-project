import Card from "./card";
import styles from "./project.module.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-lavender-web-200 hidden lg:flex w-full flex-col items-center py-4"
    >
      <h3 className="text-4xl">Projects</h3>
      <span className="text-gunmetal-600 w-full text-center text-xl md:w-1/2 mb-8">
        Successful campaigns that drove to real results for our clients
      </span>
      <div className={`${styles.projectGroup} flex w-full`}>
        <div className={`${styles.projectItem} aspect-video grow-1 bg-red-500 transition-all duration-300`}></div>
        <div className={`${styles.projectItem} aspect-video grow-1 bg-violet-500 transition-all duration-300`}></div>
        <div className={`${styles.projectItem} aspect-video grow-1 bg-blue-500 transition-all duration-300`}></div>
      </div>
    </section>
  );
}
