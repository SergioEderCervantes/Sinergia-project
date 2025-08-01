import HeroDesc from "./heroDesc";
import HeroImg from "./heroImg";

export default function Hero() {
  return (
    <div id="hero" className="bg-lavender-web-200 flex flex-col xl:flex-row xl:justify-around py-5 xl:p-12">
      <HeroDesc />
      <HeroImg />
    </div>
  );
}
