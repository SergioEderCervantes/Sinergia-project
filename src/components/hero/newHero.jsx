import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function HeroAnimation() {
  const container = useRef();
  const svg = useRef();
  useGSAP(() => {
    // gsap.to(svg.current, { scale: 100, duration: 3, delay: 2, ease: 'power3.in', x: 1200,transformOrigin: "center center"});
  },{scope: container});
  //   const { contextSafe } = useGSAP({ scope: container });

  //   const handleClick = contextSafe(() => {
  //   });

  return (
    <section
      ref={container}
      id="heroAnimation"
      className="flex h-screen w-full flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* <button className="bg-white" onClick={handleClick}>click</button> */}
      <img
        ref={svg}
        className="w-1/3"
        src="/isotipo_blanco.svg"
        alt="isotipo"
      />
      <h1 className="-mt-12 text-4xl text-shadow-white text-white">Sinergia Studio</h1>
    </section>
  );
}
