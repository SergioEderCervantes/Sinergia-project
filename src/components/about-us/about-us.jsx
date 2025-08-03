import { MdGroups } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import AboutCard from "./about-us-card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const container = useRef();
  useGSAP(()=>{
    gsap.from(".about-card",{
      y:300,
      opacity: 0,
      duration: 3,
      ease: "power2.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".about-card",
        start: "top 80%"
      }
    });
  }, {scope: container})

  return (
    <section id="about" className="flex flex-col items-center p-12">
      <h3 className="text-4xl">About Us</h3>
      <p className="w-full md:w-1/2 text-center text-xl">
        We're a dynamic marketing startup dedicated to helping buissnesses
        achieve extraordinary growtgh throught innovative strategies and
        data-driven solutions
      </p>
      <div ref={container} className="my-8 flex w-full flex-wrap justify-around px-12">
        <AboutCard
          icon={FaLightbulb}
          title={"Innovation"}
          desc={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque"
          }
        />
        <AboutCard
          icon={GoGraph}
          title={"Results"}
          desc={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque"
          }
        />
        <AboutCard
          icon={MdGroups}
          title={"Partnership"}
          desc={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque"
          }
        />
      </div>
    </section>
  );
}
