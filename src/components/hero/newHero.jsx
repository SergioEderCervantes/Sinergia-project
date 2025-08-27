import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./newHero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation() {
  const [active, setActive] = useState(true);
  const container = useRef();
  const image = useRef();

  const toggleClass = () => setActive((prev) => !prev);

  useGSAP(
    () => {
      // Primera animación de entrada
      const intro = gsap.fromTo(
        image.current,
        { "--stop": "5%" },
        {
          "--stop": "100%",
          duration: 1,
          ease: "power3.out",
          onComplete: () => {
            toggleClass();
            ScrollTrigger.refresh(); // 👈 recalcula scroll después de intro
          },
        },
      );

      // Animación de scroll
      gsap.fromTo(
        image.current,
        { "--stop": "100%" },
        {
          "--stop": "5%",
          ease: "none",
          scrollTrigger: {
            trigger: image.current,
            start: "center center",
            end: "+=400dvh",
            pin: true,
            scrub: true,
          },
        },
      );

      return () => {
        intro.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="heroAnimation"
      className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-white"
    >
      <img
        ref={image}
        style={{ "--stop": "100%" }} // valor inicial seguro
        className={`${active ? styles.fadeBottom : styles.fadeTop} w-full md:w-3/4 lg:w-1/2`}
        src={`${import.meta.env.BASE_URL}logotipo_gunmetal.svg`}
        alt="Animación del logotipo de Sinergia Studio"
      />
    </section>
  );
}
