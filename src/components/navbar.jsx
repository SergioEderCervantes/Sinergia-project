import { useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function NavBar({ expand }) {
  return (
    <nav className="text-gunmetal-600 border-gunmetal-800 fixed bg-lavender-web-200 z-100 flex w-full items-center justify-between border-b p-8 lg:py-4">
      <a className="logo-y-titulo flex items-center gap-3" href="#">
        <img className="w-15" src="/isotipo.svg" alt="logo" />
        <h1 className="hidden sm:inline text-3xl font-bold">SinergiaStudio</h1>
      </a>

      <div className="navegacion hidden gap-3 text-lg font-semibold lg:flex">
        <a className="link-underline hover:text-teal" href="#">
          Home
        </a>
        <a className="link-underline hover:text-teal" href="#about">
          About
        </a>
        <a className="link-underline hover:text-teal" href="#projects">
          Projects
        </a>
        <a className="link-underline hover:text-teal" href="#services">
          Services
        </a>
        <a className="link-underline hover:text-teal" href="#contact">
          Contact
        </a>
      </div>

      <div className="lg:hidden">
        <BiMenu onClick={expand} className="text-4xl" />
      </div>
    </nav>
  );
}
