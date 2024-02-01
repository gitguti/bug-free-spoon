import React from 'react';
import Button from "../ui/Button.jsx";
import Image from 'next/image';

const Hero = () => {

  function shuffleArray(array) {
    const shuffledArray = [...array]; // Copiar el array original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray; // Devolver la copia barajada
  }

 const images1 = [];
  for (let i = 1; i <= 7; i++) {
    images1.push(
      <div key={{i}}>
        <Image
          src={`/${i}.png`}
          alt={`Image ${i}`}
          width={279}
          height={245}
          loading="lazy"
        />
      </div>
    );
  }

  const images2 = [];
  for (let i = 8; i <= 14; i++) {
    images2.push(
      <div key={i}>
        <Image
          src={`/${i}.png`}
          alt={`Image ${i}`}
          width={279}
          height={245}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <>
<div className="flex flex-col overflow-hidden space-x-6 space-y-8 group mx-auto relative my-8 2xl:max-w-screen-3xl  2xl:mt-24 ">
     <div className="flex space-x-6 overflow-x-hidden animate-scroll-left whitespace-nowrap delay-0" style={{width: `${7 * 279}px`}}>
  {images2}
    </div>
    <div className="flex space-x-6 overflow-x-hidden animate-marquee2 whitespace-nowrap delay-0 absolute -top-8 " style={{width: `${7 * 279}px`}}>
  {images1}
    </div>
</div>
<div className="flex flex-col overflow-hidden space-x-6 space-y-8 group mx-auto relative 2xl:max-w-screen-3xl">

    <div className="flex space-x-6 overflow-x-hidden animate-marquee1  whitespace-nowrap delay-0" style={{width: `${7 * 279}px`}}>
    {shuffleArray(images2)}
    </div>
    <div className="flex row-reverse space-x-6 overflow-x-hidden animate-scroll-right whitespace-nowrap delay-0 absolute -top-[1.9rem] left-[10rem] " style={{width: `${7 * 279}px`}}>
    {shuffleArray(images1)}
    </div>
</div>

    <div className="flex justify-center mt-10 mb-24 px-2 2xl:mb-40 2xl:mt-32">
      <div className="text-center md:w-8/12 mx-auto">
        <h1 className="font-tomato text-3xl md:text-6xl 2xl:text-8xl font-semibold leading-normal mb-4 text-center text-gradient">Embrace the future of Bet Commerce using NFTs</h1>
        <p className="text-lg text-new-black mb-8 2xl:text-2xl ">Transform your bets into unique digital assets and trade on the first and only bet marketplace</p>
        <Button variant="filled" className="text-red-500">Go to marketplace</Button>
      </div>
    </div>
    </>
  );
};

export default Hero;
