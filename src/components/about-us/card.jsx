import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Card({ title, image, description }) {
  const container = useRef();
  const imgContainer = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        imgContainer.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          }
        },
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="about-card my-8 min-h-120 w-full bg-white sm:w-3/4 md:w-2/4 md:min-w-80 lg:mx-10 lg:w-1/4"
    >
      <div
        ref={imgContainer}
        className="img-container grid aspect-square origin-bottom place-items-center bg-gray-600"
      >
        {/* <img src="{image}" alt="Img" /> */}
        <span className="text-xl text-white">Image placeholder</span>
      </div>
      <div className="info flex flex-col justify-evenly p-4 text-center">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
