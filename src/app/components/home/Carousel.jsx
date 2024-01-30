import { useState, useEffect } from 'react'
import ChevronLeft from "../icons/ChevronLeft"
import ChevronRight from "../icons/ChevronRight"


export default function Carousel({
    slides,
    autoSlide = true,
    autoSlideInterval = 3000,
  }) {
    const [curr, setCurr] = useState(0);
  
    const prev = () =>
      setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () =>
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  
    useEffect(() => {
      if (!autoSlide) return;
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }, []);
  
    const slideWidth = 100 / slides.length;
    const totalWidth = 100 * slides.length; 
  
    return (
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ width: `${totalWidth}%`, transform: `translateX(-${curr * slideWidth}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col items-center justify-center relative" style={{ width: `${slideWidth}%` }}>
              <img src={slide.src} alt={`Slide ${index}`} />
              <h2 className={`${slide.titleColor} absolute top-6 left-6 p-2 text-xl md:text-3xl 2xl:text-5xl 2xl:p-8 w-3/4 font-tomato font-normal`}>{slide.title}</h2>
            </div>
          ))}
        </div>
            <div className="inset-0 flex items-center p-4 justify-end">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-purple text-white ml-6"
        >
        <ChevronRight />
        </button>
      </div>
    </div>
  )
}