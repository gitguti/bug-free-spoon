import React, { useState, useEffect } from 'react';
import FeaturesCardMobile from './FeaturesCardMobile';
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";

const FeaturesCarousel = ({ features, autoSlide = true, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr(curr => curr === 0 ? features.length - 1 : curr - 1);
    const next = () => setCurr(curr => curr === features.length - 1 ? 0 : curr + 1);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [next, autoSlide, autoSlideInterval]);

    const slideWidth = 100 / features.length;
    const totalWidth = 100 * features.length;

    return (
        <div className="overflow-hidden relative flex flex-col pb-4">
            <div className="flex transition-transform ease-out duration-500" style={{ width: `${totalWidth}%`, transform: `translateX(-${curr * slideWidth}%)` }}>
                {features.map((feature, index) => (
                    <div key={index} className="w-full flex justify-center" style={{ width: `${slideWidth}%` }}>
                        <FeaturesCardMobile {...feature} />
                    </div>
                ))}
            </div>
            <div className="inline-flex mt-2 p-2 justify-end bg-white rounded-full shadow-md self-end">
        <button
          onClick={prev}
          className="p-1 text-[#909090]"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-[#3C0D9F] text-white ml-4"
        >
        <ChevronRight />
        </button>
      </div>
        </div>
    );
};

export default FeaturesCarousel;
