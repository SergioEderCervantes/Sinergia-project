import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function MobileNavBar({ isExpanded }) {
  const container = useRef();
  const animationTL = useRef(null);
  const { contextSafe } = useGSAP(
    () => {
      animationTL.current = gsap.timeline({ paused: true }).from("a", {
        x: 200,
        opacity: 0.2,
        stagger: 0.2,
        duration: 1,
      });
    },
    { scope: container },
  );

  useEffect(() => {
    if (isExpanded) {
      animationTL.current?.restart();
    } else {
      animationTL.current?.reverse();
    }
  }, [isExpanded]);

  return (
    <nav
      ref={container}
      className={`border-gunmetal fixed left-1/2 z-10 flex max-h-0 w-full -translate-x-1/2 transform flex-col items-center overflow-hidden border-b bg-white text-3xl transition-all duration-1000 ${isExpanded ? "max-h-100" : ""}`}
    >
      <a className="hover:text-gunmetal-400 my-3 font-semibold" href="#hero">
        Home
      </a>
      <a className="hover:text-gunmetal-400 my-3 font-semibold" href="#about">
        About
      </a>
      <a
        className="hover:text-gunmetal-400 my-3 font-semibold"
        href="#projects"
      >
        Projects
      </a>
      <a
        className="hover:text-gunmetal-400 my-3 font-semibold"
        href="#services"
      >
        Services
      </a>
      <a className="hover:text-gunmetal-400 my-3 font-semibold" href="#contact">
        Contact
      </a>
    </nav>
  );
}
