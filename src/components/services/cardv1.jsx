import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";

gsap.registerPlugin(useGSAP);

export default function Card({ icon: Icon, title = "", bullets = [] }) {
  const container = useRef();
  const hoverTL = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      // Crear la timeline una sola vez
      hoverTL.current = gsap.timeline({ paused: true }).from("li", {
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
      });
    },
    { scope: container },
  );

  const onHoverStart = contextSafe(() => hoverTL.current?.restart());

  const onHoverLeave = contextSafe(() => hoverTL.current?.timeScale(2).reverse());

  return (
    <div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverLeave}
      className="group bg-lavender-web-100 my-2 h-fit w-1/4 min-w-2xs rounded-xl p-4"
    >
      <div className="icon-container bg-gunmetal -mt-12 mb-4 grid aspect-square w-15 place-items-center rounded-2xl">
        <Icon className="text-4xl text-white" />
      </div>
      <h4 className="text-center text-2xl font-semibold">{title}</h4>
      <ul
        ref={container}
        className="max-h-0 list-none space-y-3 overflow-hidden pl-0 transition-all duration-1000 ease-out group-hover:max-h-100"
      >
        {bullets.map((bullet, idx) => (
          <li
            key={idx}
            className="from-lavender-web-200 to-lavender-web-100 text-gunmetal-700 flex items-center gap-3 rounded-xl bg-gradient-to-r px-4 py-3 text-base shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="bg-gunmetal-400 inline-block h-3 w-3 rounded-full shadow-sm"></span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
