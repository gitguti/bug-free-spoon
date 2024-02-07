"use client"
import React from 'react';
import Image from 'next/image';
import Faqs from '../components/about/faqs';
import Section2 from '../components/about/Section2';
import SwitchHorizontal from '../components/icons/SwitchHorizontal';
import Button from '../components/ui/Button';
import CarouselHorizontal from '../components/about/CarouselHorizontal';

export default function About() {

  function shuffleArray(array) {
    const shuffledArray = [...array]; // Copiar el array original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray; // Devolver la copia barajada
  }

 const images1 = [];
  for (let i = 1; i <= 3; i++) {
    images1.push(
      <div className='bg-white p-20 rounded-lg object-fit flex items-center justify-center h-12 w-12'>
      <div key={{i}}>
        <Image
          src={`/events/${i}.png`}
          alt={`Image ${i}`}
          width={200}
          height={100}
          className='max-h-12 max-w-14'
          loading="lazy"
        />
      </div>
      </div>
    );
  }

  const images2 = [];
  for (let i = 4; i <= 6; i++) {
    images2.push(
      <div className='bg-white p-20 rounded-lg object-fit flex items-center justify-center h-12 w-12'>
      <div key={i}>
        <Image
          src={`/events/${i}.png`}
          alt={`Image ${i}`}
          width={200}
          height={100}
          loading="lazy"
          className='max-h-10 max-w-14'
          />
      </div>
      </div>
    );
  }

  const faqsContent = [
    {
      question: "Do you have an early future bet with improved and appealing odds compared to the current market conditions?",
      image: "/transparency.png",
      backgroundColor: "bg-purple",
      isDarkBackground: false

    },
    {
      question: "Would you like to sell your original stake at a discounted price to clear it from your account?",
      image: "/sell.png",
      backgroundColor: "bg-[#87ABF1]",
      isDarkBackground: false
    },
    {
      question: "Is your pending parlay bet just a few legs away from the potential to win a significant payout?",
      image: "/comunist.png",
      backgroundColor: "bg-[#CDC0E9]",
      isDarkBackground: true
    },
    {
      question: "Do you wish to cash out early on your bet securing a guaranteed win?",
      image: "/privacy.png",
      backgroundColor: "bg-[#F4F4F4]",
      isDarkBackground: true
    },
    {
      question: "Have the odds for your pending bet undergone drastic changes in the market, now favouring your original stake?",
      image: "/easyProcess.png",
      backgroundColor: "bg-[#907BCB]",
      isDarkBackground: false
    },
    {
      question: "",
      image: "",
      backgroundColor: "bg-purple",
      isDarkBackground: false
    }
  ];
    
  return (
    <>
<div className="hidden md:grid grid-cols-1 md:grid-cols-2 grid-rows-1 px-8 md:px-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto 2xl:max-w-screen-3xl py-16 lg:py-24mx-auto items-center">
      <div className="col-span-1">
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
    <div className="flex flex-col px-8 lg:flex-row space-between gap-4 md:gap-6 block md:hidden">
<CarouselHorizontal faqsContent={faqsContent} />
</div>
    <Section2/>
<div className='bg-lila mx-auto'>
    <div className=" px-8 md:px-0 md:max-w-screen-sm justify-center lg:max-w-screen-md xl:max-w-screen-lg pt-16 lg:pt-24 2xl:py-48 mx-auto 2xl:max-w-screen-3xl ">
      <div className="mb-12 flex items-center justify-center">
        <SwitchHorizontal />
        <p className="pl-2 sm:text-xs md:text-base 2xl:text-3xl text-new-black font-tomato inline-block align-center">All major events from all major sportsbooks in one place</p>
      </div>
<div className="flex flex-col overflow-hidden gap-6 space-y-8 group mx-auto relative my-8 max-w-screen-md">
     <div className="flex gap-6 overflow-x-hidden animate-scroll-left whitespace-nowrap delay-0" style={{width: `${3 * 200}px`}}>
  {images2}
    </div>
    <div className="flex gap-6 overflow-x-hidden animate-marquee2 whitespace-nowrap delay-0 absolute -top-8 -left-10 " style={{width: `${3 * 200}px`}}>
  {images1}
    </div>
</div>
<div className="flex flex-col overflow-hidden gap-6 space-y-8 group mx-auto relative my-8 max-w-screen-md  2xl:mt-24 ">
     <div className="flex gap-6 overflow-x-hidden animate-scroll-left whitespace-nowrap delay-0" style={{width: `${3 * 200}px`}}>
  {images1}
    </div>
    <div className="flex gap-6 overflow-x-hidden animate-marquee2 whitespace-nowrap delay-0 absolute -top-8 -left-10 " style={{width: `${3 * 200}px`}}>
  {images2}
    </div>
</div>
</div>
<div className="mx-auto w-11/12 md:w-9/12 2xl:w-8/12 text-center my-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-semibold leading-8 md:leading-normal my-8 text-gradient">
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
