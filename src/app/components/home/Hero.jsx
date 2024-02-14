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
  for (let i = 1; i <= 18; i++) {
    images1.push(
      <Image
        src={`/Hero/${i}.png`}
        alt={`Image ${i}`}
        width={279}
        height={245}
       // priority={true}
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
      <div className='mt-[1.8rem] lg:mt-12 4xl:mt-24 flex flex-col md:gap-4'>
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
        <div className="px-px sm:px-8 w-11/12 lg:w-9/12 4xl:w-10/12 mx-auto flex justify-center mt-10 mb-12 2xl:mb-24 2xl:mt-16 4xl:mt-24">
          <div className="text-center mx-auto 4xl:w-9/12">
            <h1 className="font-tomato text-[1.7rem] md:text-[3.25rem] md:leading-[3.6rem] 2xl:text-8xl 3xl:text-7xl 4xl:text-8xl font-semibold leading-8 2xl:leading-[1.1] 3xl:leading-[1.2] mb-[0.6rem] sm:mb-4 text-center text-gradient">Embrace the future of Bet <br></br> Commerce using NFTs</h1>
            <p className="text-sm md:text-lg text-new-black mb-[1.8rem] sm:mb-8 2xl:text-[2rem] 3xl:text-[1.8rem] 4xl:text-[2rem]leadinng-[1.4rem] 2xl:leading-[2.8rem] 3xl:leading-[2.5rem] 4xl:leading-[2.8rem] md:w-9/12 lg:w-2/3 4xl:w-1/2 mx-auto ">Transform your bets into unique digital assets and trade on the first and only bet marketplace</p>
            <Button variant="filled" className="text-red-500">Go to marketplace</Button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
