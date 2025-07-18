import { useState } from "react";

export default function MobileNavBar({ isExpanded }) {
  return (
    <nav
      className={`absolute left-1/2 z-10 flex max-h-0 w-full -translate-x-1/2 transform flex-col items-center overflow-hidden bg-white text-3xl ${isExpanded ? "max-h-100" : ""}`}
    >
      <a className="hover:text-gunmetal-400 my-3 font-semibold" href="#">
        Home
      </a>
      <a className="hover:text-gunmetal-400 my-3 font-semibold" href="#">
        About
      </a>
      <a className="hover:text-gunmetal-400 my-3 font-semibold" href="#">
        Projects
      </a>
      <a className="hover:text-gunmetal-400 my-3 font-semibold" href="#">
        Services
      </a>
      <a className="hover:text-gunmetal-400 my-3 font-semibold" href="#">
        Contact
      </a>
    </nav>
  );
}
