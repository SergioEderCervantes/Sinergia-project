import Card from "./card";
import { BiBadge } from "react-icons/bi";
export default function Services(props) {
  return (
    <section className=" flex flex-col items-center py-5 xl:p-12">
      <h2 className="text-gunmetal-600 my-2 text-4xl">Our Services</h2>
      <span className="text-gunmetal-600 w-full text-center text-xl md:w-1/2">
        Comprehensive marketing solutions designed to scale your buissness and maximize your market impact
      </span>
      <div className="flex w-full justify-evenly flex-wrap">
        <Card icon={BiBadge} title={"Digital Marketing"} />
        <Card icon={BiBadge} title={"Brand Strategy"}/>
      </div>
    </section>
  );
}
