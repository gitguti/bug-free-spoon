import React, { useState, useEffect, useRef } from 'react';
import SwitchHorizontal from '../icons/SwitchHorizontal';
import Card from './Card';

const Section2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="bg-lila" ref={ref}>
      <div className="bg-lila px-px sm:px-8 md:px-0 py-12 lg:py-24 4xl:py-36 mx-auto w-11/12 4xl:w-9/12">
        <div className="mb-6 md:mb-8 xl:mb-12 3xl:mb-10 4xl:mb-20 flex items-start md:items-center">
          <SwitchHorizontal />
          <p className="pl-4 sm:text-xs md:text-base lg:text-2xl xl:text-[1.8rem] 3x:text-[2.3rem] 4xl:text-[2.5rem] text-new-black font-tomato inline-block align-left md:align-center font-semibold">Securely trade your bets with other users</p>
        </div>
        <div className="flex flex-col md:flex-row space-between gap-4 md:gap-[1.5rem]">
          <Card title="Transform your bet into a blockchain certified ticket" backgroundImage="/section21.webp" titleColor="text-white" isVisible={isVisible} />
          <Card title="Explore and trade on the marketplace" backgroundImage="/section22.webp" titleColor="text-new-black" isVisible={isVisible} delay="left" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
