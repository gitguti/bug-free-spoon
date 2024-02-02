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
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ width: `${totalWidth}%`, transform: `translateX(-${curr * slideWidth}%)` }}>
                {features.map((feature, index) => (
                    <div key={index} className="w-full flex justify-center" style={{ width: `${slideWidth}%` }}>
                        <FeaturesCardMobile {...feature} />
                    </div>
                ))}
            </div>
            <div className="inset-0 flex items-center p-4 justify-end">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronLeft />
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-purple text-white ml-6">
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default FeaturesCarousel;
