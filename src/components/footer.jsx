import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import styles from "./navbar-footer.module.css"

export default function Footer() {
  return (
    <footer className="bg-gunmetal w-full p-4 lg:p-16 lg:px-24">
      <div className="flex w-full justify-around text-white">
        <div>
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <img className="w-20" src={`${import.meta.env.BASE_URL}isotipo.svg`} alt="logo" />
            <h4 className="text-2xl font-bold">Sinergia</h4>
          </div>
          <span>Elevating brand with strategic marketing solutions.</span>
        </div>
        <div className="hidden flex-col gap-1 font-semibold lg:flex">
          <h4 className="text-2xl font-bold">Services</h4>
          <span className={`${styles.linkUnderline} cursor-pointer`}>
            Digital Marketig
          </span>
          <span className={`${styles.linkUnderline} cursor-pointer`}>Brand Strategy</span>
        </div>
        <div className="hidden flex-col gap-1 font-semibold lg:flex">
          <h4 className="text-2xl font-bold">Company</h4>
          <span className={`${styles.linkUnderline} cursor-pointer`}>About us</span>
          <span className={`${styles.linkUnderline} cursor-pointer`}>Our Team</span>
          <span className={`${styles.linkUnderline} cursor-pointer`}>Contact</span>
        </div>
        <div className="hidden flex-col gap-1 font-semibold lg:flex">
          <h4 className="text-2xl font-bold">Connect</h4>
          <div className="flex flex-col justify-start  text-lg ">
            <div className={`${styles.linkUnderline} flex items-center gap-2`}>
              <a href="https://www.instagram.com/sinergia.studio.mx?igsh=NjBkdmRmOGppM3py" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer" />
              </a>
              <a className="pb-1" href="https://www.instagram.com/sinergia.studio.mx?igsh=NjBkdmRmOGppM3py" target="_blank" rel="noopener noreferrer">sinergia.studio.mx</a>
            </div>
            <div className={`${styles.linkUnderline} flex items-center gap-2 -ml-[1px]`}>
              <a href="https://www.tiktok.com/@sinergia.studio.mx?_t=ZS-8ynJynjDNas&_r=1" target="_blank" rel="noopener noreferrer">
                <AiFillTikTok className="cursor-pointer text-xl" />
              </a>
              <a className="pb-1" href="https://www.tiktok.com/@sinergia.studio.mx?_t=ZS-8ynJynjDNas&_r=1" target="_blank" rel="noopener noreferrer">sinergia.studio.mx</a>
            </div>
            <div className={`${styles.linkUnderline} flex items-center gap-2`}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="cursor-pointer text-md"/>
              </a>
              <a className="pb-1" href="#" target="_blank" rel="noopener noreferrer">sinergia.studio.mx</a>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-lavender-web/80 my-4" />
      <div className="text-lavender-web/80 text-center">
        <span>c 2025 Sinergia Studio. All rights reserved </span>
      </div>
    </footer>
  );
}
