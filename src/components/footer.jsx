import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gunmetal w-full p-4  lg:p-16 lg:px-24">
      <div className="flex w-full justify-around text-white">
        <div >
          <div className="flex justify-center lg:justify-start items-center gap-4  ">
            <img className="w-20" src="/isotipo.svg" alt="logo" />
            <h4 className="text-2xl font-bold ">MarketPro</h4>
          </div>
          <span>Elevating brand with strategic marketing solutions.</span>
        </div>
        <div className="hidden flex-col gap-1 font-semibold lg:flex">
          <h4 className="text-2xl font-bold">Services</h4>
          <span className="cursor-pointer hover:font-bold">
            Digital Marketig
          </span>
          <span className="cursor-pointer hover:font-bold">Brand Strategy</span>
        </div>
        <div className="hidden flex-col gap-1 font-semibold lg:flex">
          <h4 className="text-2xl font-bold">Company</h4>
          <span className="cursor-pointer hover:font-bold">About us</span>
          <span className="cursor-pointer hover:font-bold">Our Team</span>
          <span className="cursor-pointer hover:font-bold">Contact</span>
        </div>
        <div className="hidden flex-col gap-1 font-semibold lg:flex">
          <h4 className="text-2xl font-bold">Connect</h4>
          <div className="flex justify-start gap-2 text-lg">
            <a href="#">
              <AiFillTikTok className="cursor-pointer" />
            </a>
            <a href="#">
              <FaInstagram className="cursor-pointer" />
            </a>
            <a href="#">
              <FaLinkedin className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-lavender-web/80 my-4" />
      <div className="text-lavender-web/80 text-center">
        <span>c 2025 MarketPro. All rights reserved </span>
      </div>
    </footer>
  );
}
