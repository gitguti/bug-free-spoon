"use client"
import React from 'react';
import Image from 'next/image';
import Faqs from '../components/about/faqs';
import Section2 from '../components/about/Section2';
import World from '../components/icons/World';
import Button from '../components/ui/Button';
import CarouselHorizontal from '../components/about/CarouselHorizontal';
import Marquee from "react-fast-marquee";
import { useState, useEffect } from 'react';


export default function About() {


  function shuffleArray(array) {
    const shuffledArray = [...array]; // Copiar el array original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray; // Devolver la copia barajada
  }

 const images = [];
  for (let i = 1; i <= 7; i++) {
    images.push(
      <div className='bg-white p-16 rounded-lg object-fit flex items-center justify-center h-full'>
        <Image
          src={`/events/${i}.png`}
          alt={`Image ${i}`}
          width={300}
          height={100}
          className='max-h-16 max-w-16 md:max-h-24 md:max-w-24 2xl:max-h-32 2xl:max-w-32'
          loading="lazy"
          key={{i}}
        />
      </div>
    );
  }

  const faqsContent = [
    {
      question: "Do you have an early future bet with improved and appealing odds compared to the current market conditions?",
      image: "/no-bg/secure.png",
      backgroundColor: "bg-purple",
      isDarkBackground: false

    },
    {
      question: "Would you like to sell your original stake at a discounted price to clear it from your account?",
      image: "/no-bg/sell.png",
      backgroundColor: "bg-[#87ABF1]",
      isDarkBackground: false
    },
    {
      question: "Is your pending parlay bet just a few legs away from the potential to win a significant payout?",
      image: "/no-bg/comunist.png",
      backgroundColor: "bg-[#CDC0E9]",
      isDarkBackground: true
    },
    {
      question: "Do you wish to cash out early on your bet securing a guaranteed win?",
      image: "/no-bg/privacy.png",
      backgroundColor: "bg-[#F4F4F4]",
      isDarkBackground: true
    },
    {
      question: "Have the odds for your pending bet undergone drastic changes in the market, now favouring your original stake?",
      image: "/no-bg/easyProcess.png",
      backgroundColor: "bg-[#907BCB]",
      isDarkBackground: false
    },
    {
      question: "",
      image: "/faqsMonkeys.png",
      backgroundColor: "bg-purple",
      isDarkBackground: false
    }
  ];
    
  return (
    <>
<div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 items-center gap-4 px-px sm:px-8 md:px-0 mt-8 mb-16 2xl:mb-40 2xl:mt-16 3xl:mt-40 3xl:mb-48 mx-auto w-11/12 3xl:w-9/12 3xl:w-9/12">
      <div className="col-span-2 lg:col-span-1 text-center lg:text-left w-3/4 mx-auto">
      <h2 className="font-tomato text-2xl md:text-4xl 2xl:text-5xl font-semibold leading-normal mb-4 text-gradient shrink-0">Why should you consider trading your bets?</h2>
      </div>
<div className="w-full grid grid-cols-2 gap-3 col-span-2 min-h-0 min-h-full">
  {faqsContent.map((faq, index) => (
    <Faqs
      key={index}
      question={faq.question}
      image={faq.image}
      backgroundColor={faq.backgroundColor}
      isDarkBackground={faq.isDarkBackground}

    />
  ))}
</div>
    </div>
    <div className="flex flex-col px-4 sm:px-8 md:px-0 lg:flex-row space-between gap-4 md:gap-6 block md:hidden mt-12 mb-4">
    <h2 className="font-tomato text-3xl md:text-4xl 2xl:text-5xl font-semibold leading-normal mb-4 text-gradient shrink-0">Why should you consider trading your bets?</h2>
<CarouselHorizontal faqsContent={faqsContent} />
</div>
    <Section2/>
<div className='bg-lila mx-auto'>
    <div className="  md:max-w-screen-sm justify-center lg:max-w-screen-md xl:max-w-screen-lg pt-16 lg:pt-24 2xl:pt-48 2xl:pb-36 mx-auto 2xl:max-w-screen-3xl ">
      <div className="px-8 md:px-0 mb-12 flex items-center justify-center">
        <World />
        <p className="pl-4 sm:text-xs md:text-base lg:text-2xl 2xl:text-3xl 3xl:text-4xl text-new-black font-tomato inline-block align-center">All major events from all major sportsbooks in one place</p>
      </div>
      <div className="mx-auto flex flex-col ">
      <div className='lg:mt-12 3xl:mt-24 flex flex-col gap-4 lg:gap-8'>
      <Marquee autoFill={true}>
          <ul className="lst-box">
            {shuffleArray(images).map((image, index) => (
              <li key={`first-${index}`} >{image}</li>
            ))}
          </ul>
        </Marquee>
        <Marquee direction='right' autoFill={true}>
          <ul className="lst-box">
            {shuffleArray(images).map((image, index) => (
              <li key={`first-${index}`} >{image}</li>
              ))}
          </ul>
        </Marquee>
        </div>
        </div>

</div>
</div>
<div className='bg-lila '>
<div className="mx-auto w-11/12 md:w-9/12 2xl:w-8/12  py-16 lg:py-48 text-center">
      <h2 className="font-tomato text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-semibold leading-8 md:leading-normal my-8 text-gradient md:max-w-screen-md lg:max-w-screen-lg mx-auto">
        Make your bets accessible to players worldwide
      </h2>
      <div className="flex justify-center">
        <Button variant="filled">Go to marketplace</Button>
        </div>
      </div>
      </div>
    </>
  );
}
