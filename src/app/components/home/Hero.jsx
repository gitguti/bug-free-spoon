"use client"
import React from 'react';
import Button from "../ui/Button.jsx";
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import { useState, useEffect } from 'react';

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
  for (let i = 1; i <= 14; i++) {
    images1.push(
      <Image
        src={`/${i}.png`}
        alt={`Image ${i}`}
        width={279}
        height={245}
        loading="lazy"
        key={{ i }}
      />
    );
  }
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const handleResize = () => {
          setSize([window.innerWidth, window.innerHeight]);
        };
  
        window.addEventListener('resize', handleResize);
        handleResize(); // Para establecer el tamaño inicial
  
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);
  
    return size;
  }

  const [width] = useWindowSize();

  const breakpoint = 768; // por ejemplo, para dispositivos sm

  const style = {
    maxHeight: width < breakpoint ? '220px' : '100%',
    maxWidth: width < breakpoint ? '220px' : '100%', 
    margin: width < breakpoint ? '0.5rem' : '0'
  };

  return (
    <>
      <div className="mx-auto flex flex-col ">
      <div className='lg:mt-12 3xl:mt-24 flex flex-col md:gap-4'>
      <Marquee autoFill={true}>
          <ul className="lst-box">
            {shuffleArray(images1).map((image, index) => (
              <li key={`first-${index}`} style={style}>{image}</li>
            ))}
          </ul>
        </Marquee>
        <Marquee direction='right' autoFill={true}>
          <ul className="lst-box">
            {shuffleArray(images1).map((image, index) => (
              <li key={`first-${index}`} style={style}>{image}</li>
              ))}
          </ul>
        </Marquee>
      </div>
        <div className="px-px sm:px-8 w-11/12 3xl:w-10/12 mx-auto flex justify-center mt-10 mb-24 2xl:mb-40 2xl:mt-16 3xl:mt-24">
          <div className="text-center mx-auto 3xl:w-9/12">
            <h1 className="font-tomato text-2xl md:text-6xl 2xl:text-8xl font-semibold leading-7 mb-4 text-center text-gradient">Embrace the future of Bet Commerce using NFTs</h1>
            <p className="text-sm md:text-lg text-new-black mb-8 2xl:text-2xl lg:w-1/3 3xl:w-1/2 mx-auto ">Transform your bets into unique digital assets and trade on the first and only bet marketplace</p>
            <Button variant="filled" className="text-red-500">Go to marketplace</Button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
