import { useState } from "react";
import NavBar from "../components/navbar";
import Hero from "../components/hero/hero";
import MobileNavBar from "../components/mobileNavBar";
import AboutUs from "../components/about-us/about-us";
import Projects from "../components/projects/projects";
export default function MainPage() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  function toggleExpantion(){
    setIsMenuExpanded(!isMenuExpanded)
    
  }
  return (
    <>
      <NavBar expand={toggleExpantion} />
      <MobileNavBar isExpanded={isMenuExpanded}/>
      <Hero />
      <AboutUs/>
      <Projects/>
    </>
  );
}
