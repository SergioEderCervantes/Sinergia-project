import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function MobileNavBar({ isExpanded, setIsExpanded }) {
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
      animationTL.current?.timeScale(1).restart();
    } else {
      animationTL.current?.timeScale(3).reverse();
    }
  }, [isExpanded]);

  const handleClick = () => {
    setIsExpanded(false);
  };

  return (
    <nav
      ref={container}
      className={`border-gunmetal fixed top-30 left-1/2 z-10 flex max-h-0 w-full -translate-x-1/2 transform flex-col items-center overflow-hidden bg-white text-3xl transition-all duration-1000 ${isExpanded ? "max-h-100 border-b" : ""}`}
    >
      <a
        onClick={handleClick}
        className="active:text-shock-pink transition-colors my-3 font-semibold"
        href="#"
      >
        Home
      </a>
      <a
        onClick={handleClick}
        className="active:text-shock-pink transition-colors my-3 font-semibold"
        href="#about"
      >
        About
      </a>
      <a
        onClick={handleClick}
        className="active:text-shock-pink transition-colors my-3 font-semibold"
        href="#projects"
      >
        Projects
      </a>
      <a
        onClick={handleClick}
        className="active:text-shock-pink transition-colors my-3 font-semibold"
        href="#services"
      >
        Services
      </a>
      <a
        onClick={handleClick}
        className="active:text-shock-pink transition-colors my-3 font-semibold"
        href="#contact"
      >
        Contact
      </a>
    </nav>
  );
}
