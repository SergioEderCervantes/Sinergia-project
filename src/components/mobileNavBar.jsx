import { useState } from "react";

export default function MobileNavBar({ isExpanded }) {
  return (
    <nav
      className={`border-gunmetal absolute left-1/2 z-10 flex max-h-0 w-full -translate-x-1/2 transform flex-col items-center overflow-hidden border-b bg-white text-3xl ${isExpanded ? "max-h-100" : ""}`}
    >
      <a className="hover:text-gunmetal-400 my-3 font-semibold" href="#hero">
        Home
      </a>
      <a className="hover:text-gunmetal-400 my-3 font-semibold" href="#about">
        About
      </a>
      <a className="hover:text-gunmetal-400 my-3 font-semibold" href="#projects">
        Projects
      </a>
      <a className="hover:text-gunmetal-400 my-3 font-semibold" href="#services">
        Services
      </a>
      <a className="hover:text-gunmetal-400 my-3 font-semibold" href="#contact">
        Contact
      </a>
    </nav>
  );
}
