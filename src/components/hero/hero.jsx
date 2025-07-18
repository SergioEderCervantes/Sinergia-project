import HeroDesc from "./heroDesc";
import HeroImg from "./heroImg";

export default function Hero() {
  return (
    <div className="bg-lavender-web-200 flex justify-around py-5 lg:p-12">
      <HeroDesc />
      <HeroImg />
    </div>
  );
}
