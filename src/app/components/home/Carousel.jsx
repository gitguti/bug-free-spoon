import { useState, useEffect } from 'react'
import ChevronLeft from "../icons/ChevronLeft"
import ChevronRight from "../icons/ChevronRight"
import Image from 'next/image';


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
    const totalWidth = 90 * slides.length; 
  
    return (
      <div className="overflow-hidden relative flex flex-col pb-2">
        <div
          className="flex gap-4 transition-transform ease-out duration-500"
          style={{ width: `${totalWidth}%`, transform: `translateX(-${curr * slideWidth}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col items-center justify-center relative" style={{ width: `${slideWidth}%` }}>
              <Image width={300} height={200} src={slide.src} alt={`Slide ${index}`} />
              <h2 className={`${slide.titleColor} absolute top-6 left-6 p-2 text-xl md:text-3xl 2xl:text-5xl 2xl:p-8 w-3/4 font-tomato font-normal`}>{slide.title}</h2>
            </div>
          ))}
        </div>
            <div className="inline-flex mt-2 p-2 justify-end bg-white rounded-full shadow-md self-end">
        <button
          onClick={prev}
          className="p-1 text-[#909090]"
          aria-label='previous feature'
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-[#3C0D9F] text-white ml-4"
          aria-label='next feature'
        >
        <ChevronRight />
        </button>
      </div>
    </div>
  )
}