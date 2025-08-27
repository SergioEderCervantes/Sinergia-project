import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function HeroDesc() {
  const container = useRef();
  useGSAP(
    () => {
      gsap.from(".animation", {
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".animation",
          start: "top 80%",
          end: "+=200",
          scrub: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="xlg:text-justify flex flex-col items-center xl:px-16 text-center text-5xl text-gray-500 xl:w-4/6"
    >
      <h1 className="text-gunmetal font-bold  text-3xl animation my-2 xl:text-5xl">
        Sinergia Studio: Agencia de Marketing Digital y Software
      </h1>
      <img
        className="animation my-8 w-1/4 xl:hidden"
        src={`${import.meta.env.BASE_URL}isotipo.svg`}
        alt="Isotipo de Sinergia Studio"
      />
      <h2 className="animation xl:w-3/4 my-2 text-2xl xl:text-4xl">
        Activa tu marca, reinventa tu escencia
      </h2>
      <p className="animation hidden xl:w-3/4 text-center text-lg font-semibold md:block">
        Diseñamos tu marca, creamos contenido, desarrollamos software y trazamos
        estrategias que convierten seguidores en clientes.
      </p>
    </section>
  );
}
