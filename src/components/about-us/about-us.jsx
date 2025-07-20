import { MdGroups } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import AboutCard from "./about-us-card";

export default function AboutUs() {
  return (
    <section className="flex flex-col items-center p-12">
      <h3 className="text-4xl">About Us</h3>
      <p className="w-full md:w-1/2 text-center text-xl">
        We're a dynamic marketing startup dedicated to helping buissnesses
        achieve extraordinary growtgh throught innovative strategies and
        data-driven solutions
      </p>
      <div className="my-8 flex w-full flex-wrap justify-around px-12">
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
