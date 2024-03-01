"use client"
import React from 'react';
import Button from "../ui/Button.jsx";
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import { useState, useEffect } from 'react';

const Hero = () => {

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const images1 = [];
  for (let i = 1; i <= 18; i++) {
    images1.push(

<div class="max-w-xs rounded-lg shadow-lg bg-white flex flex-col  overflow-hidden">
  <div class=" w-full h-52 rounded-t-lg rounded-b-0 overflow-clip">
    {/* <div>
      <p class="text-white font-bold text-sm">TENNIS</p>
      <p class="text-white font-bold text-sm">ATP</p>
    </div> */}
    <Image
        src={`/Hero/${i}.png`}
        alt={`Image ${i}`}
        width={200}
        height={245}
        objectFit="cover" // Asegura que la imagen cubra el área sin perder su proporción
        className="w-full" // Asegura que la imagen sea responsive  
        priority={true}
        key={{ i }}
      />  </div>
      <div className='px-4 py-4'>
      <div className='whitespace-normal	'>
          <p className="text-new-black font-semibold text-lg mb-2">Carlos Alcaraz to win 2025 Australian Open</p>
          </div>
  <div class="flex justify-between">
    <div class="flex flex-col justify-between items-start ">
      <p class="text-gray-600 text-sm text-[##6B6B6B]">Floor Price</p>
      <p class="text-new-black font-bold text-sm">25.00 USD</p>
    </div>
    <div class="flex flex-col justify-between items-start ">
      <p class="text-gray-600 text-sm text-[##6B6B6B]">Odds</p>
      <p class="text-new-black font-bold text-sm">+255</p>
    </div>
    <div class="flex flex-col justify-between items-start">
      <p class="text-gray-600 text-sm text-[##6B6B6B]">Current</p>
      <p class="text-new-black font-bold text-sm self-end">-750</p>
    </div>
  </div>
  <div className=" w-full h-px bg-gray-200 my-2"></div>
  <div class="flex justify-between text-[##6B6B6B]">
  <div class="flex flex-col  justify-between items-start ">
      <p class="text-gray-600 text-sm ">Source</p>
      <p class="text-gray-600 text-sm">Sport </p>

    </div>
    <div class="flex flex-col justify-between items-end text-[##6B6B6B]">
    <p class="text-gray-900 text-sm">Dual Sportsbook</p>
      <p class="text-gray-900 text-sm">Tennis- ATP</p>
    </div>
  </div>
  </div>
</div>


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
        handleResize();
  
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);
  
    return size;
  }

  const [width] = useWindowSize();

  const breakpoint = 768;

  const style = {
    maxHeight: width < breakpoint ? '220px' : '100%',
    maxWidth: width < breakpoint ? '220px' : '100%', 
    margin: width < breakpoint ? '0.5rem' : '0'
  };

  return (
    <>
      <div className="mx-auto flex flex-col bg-new-white ">
      <div className='mt-[1.8rem] lg:mt-12 4xl:mt-24 flex flex-col md:gap-4'>
      <Marquee autoFill={true} style={ {gap: '1rem', marginRight: '1rem' } }>
          <ul className="lst-box">
            {shuffleArray(images1).map((image, index) => (
              <li key={`first-${index}`} style={style}>{image}</li>
            ))}
          </ul>
        </Marquee>
        <div className="px-px sm:px-8 w-11/12 lg:w-9/12 4xl:w-10/12 mx-auto flex justify-center mt-4 mb-4 2xl:mb-4 2xl:mt-12 4xl:mt-16  min-h-max animate-slideUp">
          <div className="text-center mx-auto 4xl:w-9/12">
            <h1 className="font-tomato text-[1.7rem] md:text-[3.25rem] md:leading-[3.6rem] 2xl:text-8xl 3xl:text-7xl 4xl:text-8xl font-semibold leading-8 2xl:leading-[1.1] 3xl:leading-[1.2] mb-[0.6rem] sm:mb-4 text-center text-gradient">The future of <span className="text-gradient3 font-bold">Bet </span> <br></br> Commerce using NFTs</h1>
            <p className="text-sm md:text-lg text-new-black mb-[0.8rem] sm:mb-2 2xl:text-[2rem] 3xl:text-[1.8rem] 4xl:text-[2rem]leadinng-[1.4rem] 2xl:leading-[2.8rem] 3xl:leading-[2.5rem] 4xl:leading-[2.8rem] md:w-9/12 lg:w-2/3 4xl:w-1/2 mx-auto ">Transform your bets into unique digital assets and trade on the first and only bet marketplace</p>
            {/* <Button variant="filled" className="text-red-500">Go to marketplace</Button> */}
          </div>
        </div>
        <Marquee direction='right' autoFill={true}>
          <ul className="lst-box">
            {shuffleArray(images1).map((image, index) => (
              <li key={`first-${index}`} style={style}>{image}</li>
              ))}
          </ul>
        </Marquee>
      </div>
      </div>
    </>
  );
};

export default Hero;
