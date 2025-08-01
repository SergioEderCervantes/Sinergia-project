import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./hola.css"

gsap.registerPlugin(useGSAP);

export default function GsapAnimation() {
  const container = useRef();
  const circle = useRef();

  useGSAP(
    () => {
      gsap.to(".box", { rotation: "+=360", duration: 3 });
      gsap.to(circle.current, { rotation: "-=360", duration: 3 });
    },
    { scope: container },
  );

  return (
    <div className="hola">
      <div ref={container} className="container">
        <div className="box gradient-blue">selector</div>
        <div className="circle gradient-green" ref={circle}>
          Ref
        </div>
      </div>
      <div className="box gradient-blue">selector</div>
    </div>
  );
}
