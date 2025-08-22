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
      className="xlg:text-justify flex flex-col items-center px-16 text-center text-5xl text-gray-500 xl:w-4/6"
    >
      <h2 className="text-gunmetal-600 animation my-2 xl:text-8xl">
        Elevate your Brand
      </h2>
      <img
        className="animation my-8 w-1/4  xl:hidden"
        src={`${import.meta.env.BASE_URL}isotipo.svg`}
        alt="logo"
      />
      <h2 className="animation text-3xl xl:text-4xl my-2">With Strategic Marketing</h2>
      <p className="animation  hidden text-justify text-lg font-semibold md:block px-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quae
        deleniti, aperiam pariatur illo voluptate ab fugiat excepturi non?
        Tenetur doloremque, aliquid quasi odit cupiditate dicta neque sapiente
        libero mollitia! lorem
      </p>
    </section>
  );
}
