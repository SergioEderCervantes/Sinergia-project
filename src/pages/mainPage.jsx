import { useState } from "react";
import NavBar from "../components/navbar";
import Hero from "../components/hero/hero";
import MobileNavBar from "../components/mobileNavBar";
import AboutUs from "../components/about-us/about-us";
import Projects from "../components/projects/projects";
import Services from "../components/services/services";
import Contact from "../components/contact/contact";
import Footer from "../components/footer";
import HeroAnimation from "../components/hero/newHero";
import Carousel from "../components/caroussel/carousel";

export default function MainPage() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  function toggleExpantion(){
    setIsMenuExpanded(!isMenuExpanded)
  }
  return (
    <main className="overflow-x-hidden">
      <NavBar expand={toggleExpantion} />
      <MobileNavBar isExpanded={isMenuExpanded} setIsExpanded={setIsMenuExpanded}/>
      <HeroAnimation/>
      <Hero />
      <Carousel/>
      <AboutUs/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer />
    </main>
  );
}
