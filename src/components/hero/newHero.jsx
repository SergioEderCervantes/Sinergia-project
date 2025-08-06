import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./newHero.module.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation() {
  const [active, setActive] = useState(true);
  const container = useRef();
  const image = useRef();

  const toggleClass = () => setActive(!active);

  useGSAP(
    () => {
      gsap.fromTo(
        image.current,
        { "--stop": "5%" },
        {
          "--stop": "80%",
          duration: 1,
          ease: "power3.out",
          onComplete: toggleClass,
        },
      );

      gsap.fromTo(
        image.current,
        { "--stop": "80%" },
        {
          "--stop": "5%",
          ease: "None",
          scrollTrigger:{
            trigger: image.current,
            start: "center center",
            end: "+=1000",
            pin: true,
            scrub: true,
          }
        },
      );
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
        className={`${active ? styles.fadeBottom : styles.fadeTop} w-full md:w-3/4 lg:w-1/2`}
        src="/sinergia.png"
        alt="logo"
      />
    </section>
  );
}
