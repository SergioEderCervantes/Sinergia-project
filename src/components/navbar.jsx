import { BiMenu } from "react-icons/bi";
import styles from "./navbar-footer.module.css";


export default function NavBar({ expand }) {
  return (
    <nav className="text-gunmetal border-gunmetal fixed bg-lavender-web z-100 flex w-full items-center justify-between border-b px-2 lg:py-4">
      <a className="logo-y-titulo flex items-center gap-3" href="#">
        <img className="w-15" src={`${import.meta.env.BASE_URL}isotipo.svg`} alt="logo" />
        <h1 className="hidden sm:inline text-3xl font-bold">SinergiaStudio</h1>
      </a>

      <div className="navegacion hidden gap-3 text-lg font-semibold lg:flex">
        <a className={`${styles.linkUnderline} hover:text-shock-pink`} href="#">
          Inicio
        </a>
        <a className={`${styles.linkUnderline} hover:text-shock-pink`} href="#about">
          Nosotros
        </a>
        <a className={`${styles.linkUnderline} hover:text-shock-pink`} href="#projects">
          Proyectos
        </a>
        <a className={`${styles.linkUnderline} hover:text-shock-pink`} href="#services">
          Servicios
        </a>
        <a className={`${styles.linkUnderline} hover:text-shock-pink `} href="#contact">
          Contacto
        </a>
      </div>

      <div className="lg:hidden">
        <BiMenu onClick={expand} className="text-4xl" />
      </div>
    </nav>
  );
}
