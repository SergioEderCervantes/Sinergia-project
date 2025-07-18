import { useState } from "react";
import NavBar from "../components/navbar";
import Hero from "../components/hero/hero";
import MobileNavBar from "../components/mobileNavBar";
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
    </>
  );
}
