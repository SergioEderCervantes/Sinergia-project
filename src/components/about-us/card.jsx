import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

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
        <LazyLoadImage src={`${import.meta.env.BASE_URL}abt/${image}`} alt="Img" effect="blur"/>
      </div>
    </div>
  );
}
