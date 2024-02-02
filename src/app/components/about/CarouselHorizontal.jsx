import { useState, useEffect } from 'react'
import ChevronLeft from "../icons/ChevronLeft"
import ChevronRight from "../icons/ChevronRight"

export default function CarouselHorizontal({
  faqsContent,
  autoSlide = true,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? faqsContent.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === faqsContent.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [next, autoSlide, autoSlideInterval]);

  const slideWidth = 100 / faqsContent.length;
  const totalWidth = 100 * faqsContent.length;

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ width: `${totalWidth}%`, transform: `translateX(-${curr * slideWidth}%)` }}
      >
       {faqsContent.map((faq, index) => (
  <div key={index} className={`flex flex-col items-center justify-start relative rounded-lg ${faq.backgroundColor}`} style={{ width: `${slideWidth}%`, minHeight: "300px" }}>
    <h2 className={`px-8 text-base w-full pt-8 ${!faq.isDarkBackground ? "text-white" : "text-black"}`}>{faq.question}</h2>
    <img src={faq.image} alt={`Slide ${index}`} style={{ width: "180px", position: "absolute", bottom: 0, right: 0, zIndex: 1 }} />
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
