import { useState, useEffect } from 'react'
import ChevronLeft from "../icons/ChevronLeft"
import ChevronRight from "../icons/ChevronRight"
import Image from 'next/image'; 

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
  const totalWidth = 90 * faqsContent.length;

  return (
    <div className="overflow-hidden relative  flex flex-col pb-4">
      <div
        className="flex gap-4 transition-transform ease-out duration-500"
        style={{ width: `${totalWidth}%`, transform: `translateX(-${curr * slideWidth}%)` }}
      >
       {faqsContent.map((faq, index) => (
  <div key={index} className={`flex flex-col items-center overflow-hidden justify-start relative rounded-lg ${faq.backgroundColor}`} style={{ width: `${slideWidth}%`, minHeight: "300px" }}>
    <h2 className={`px-8 text-base w-full pt-8 font-normal ${!faq.isDarkBackground ? "text-white" : "text-new-black"}`}>{faq.question}</h2>
    <Image src={faq.image} width={800} height={120} alt={`Slide ${index}`} style={{ position: "absolute", right: 0, zIndex: 1 }} className={faq.question ? "w-1/2 h-auto -bottom-4" : "w-full object-cover -bottom-28 fill-available"}/>
  </div>
))}

      </div>
      <div className="inline-flex mt-2 p-2 justify-end bg-white rounded-full shadow-md self-end">
        <button
          onClick={prev}
          className="p-1 text-[#909090]"
          aria-label='previous question'
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-[#3C0D9F] text-white ml-4"
          aria-label='next question'

        >
        <ChevronRight />
        </button>
      </div>
    </div>
  )
}
