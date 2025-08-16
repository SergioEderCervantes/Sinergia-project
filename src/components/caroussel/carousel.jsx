import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

gsap.registerPlugin(useGSAP);
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef();
  const startX = useRef(0);
  const isDragging = useRef(false);
  const deltaX = useRef(0);
  const autoPlayTime = 3000;
  const items = [
    { name: "Slide 1", img: "https://placehold.co/1400x400", alt: "Imagen 1" },
    { name: "Slide 2", img: "https://placehold.co/1400x400", alt: "Imagen 2" },
    { name: "Slide 3", img: "https://placehold.co/1400x400", alt: "Imagen 3" },
    { name: "Slide 4", img: "https://placehold.co/1400x400", alt: "Imagen 4" },
  ];

  // 🔹 GSAP animación en cada cambio de slide
  useGSAP(() => {
    const slides = containerRef.current.children;
    gsap.fromTo(
      slides[currentIndex],
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" },
    );
  }, [currentIndex]);

  // 🔹 Auto-play con pausa en hover
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayTime);
    return () => clearInterval(interval);
  }, [isHovering, currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // 🔹 Drag / Swipe handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    deltaX.current = (e.pageX || e.touches[0].pageX) - startX.current;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    if (deltaX.current > 50) {
      prevSlide();
    } else if (deltaX.current < -50) {
      nextSlide();
    }
    isDragging.current = false;
    deltaX.current = 0;
  };

  return (
    <div
      className="relative mx-auto w-full overflow-hidden select-none xl:h-[60vh]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Contenedor slides */}
      <div
        ref={containerRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-shrink-0 items-center justify-center text-2xl font-bold text-white"
          >
            <img src={item.img} alt={item.alt} className="w-full " />
          </div>
        ))}
      </div>

      {/* Botón prev */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 hidden -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white hover:bg-black/70 sm:block"
      >
        <IoIosArrowBack className="text-2xl" />
      </button>

      {/* Botón next */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 hidden -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white hover:bg-black/70 sm:block"
      >
        <IoIosArrowForward className="text-2xl" />
      </button>

      {/* Paginación (dots) */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 gap-2 sm:flex">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 cursor-pointer rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
