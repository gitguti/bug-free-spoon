"use client"
import React from 'react';
import Image from 'next/image';
import Faqs from '../components/about/faqs';
import Section2 from '../components/about/Section2';
import Section3 from '../components/about/Section3';
import World from '../components/icons/World';
import Button from '../components/ui/Button';
import CarouselHorizontal from '../components/about/CarouselHorizontal';
import Marquee from "react-fast-marquee";
import { useState, useEffect } from 'react';
import Section5 from '../components/home/Section5';


export default function About() {

 const images1 = [];
  for (let i = 1; i <= 3; i++) {
    images1.push(
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

  const images2 = [];
  for (let i = 4; i <= 7; i++) {
    images2.push(
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

  const contentToDisplay = faqsContent.slice(0, -1);

    
  return (
    <>
    <div className='bg-new-white'>
<div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 items-center gap-4 px-px sm:px-8 md:px-0 pt-12 mb-16 2xl:mb-40 2xl:pt-16 4xl:pt-40 4xl:mb-48 mx-auto w-11/12 4xl:w-9/12 ">
      <div className="col-span-2 lg:col-span-1 text-center lg:text-left w-3/4 mx-auto">
      <h2 className="font-tomato text-2xl md:text-4xl 2xl:text-5xl font-semibold leading-normal 3xl:leading-[3.4rem]  mb-4 text-gradient3 shrink-0">Why should you consider trading your bets?</h2>
      </div>
<div className="w-full grid grid-cols-2 gap-3 col-span-2 min-h-full">
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
    <div className="flex flex-col px-4 sm:px-8 md:px-0 lg:flex-row space-between gap-4 md:gap-6 md:hidden pt-12 pb-4">
    <h2 className="font-tomato text-3xl md:text-4xl 2xl:text-5xl font-semibold leading-9 mb-4 text-gradient3 shrink-0">Why should you consider trading your bets?</h2>
<CarouselHorizontal faqsContent={contentToDisplay} />
</div>
    <Section2/>
    <Section3/>
<div className='bg-[#DADDF6] mx-auto'>
    <div className="pt-16 lg:pt-24 2xl:pt-48 mx-auto ">
      <div className="px-8 md:px-0 mb-6 md:mb-8 xl:mb-12 3xl:mb-10 4xl:mb-20 flex items-start md:items-center justify-center">
        <World />
        <p className="pl-2 sm:text-xs md:text-base lg:text-xl xl:text-[1.8rem] 3x:text-[2.3rem] xl:leading-[2.3rem] 4xl:text-[2.5rem] 4xl:leading-[4.9rem] text-new-black font-tomato inline-block align-left md:align-center">All major events from all major sportsbooks in one place</p>
      </div>
      <div className="mx-auto flex flex-col md:max-w-screen-sm justify-center lg:max-w-screen-md xl:max-w-screen-lg  2xl:max-w-screen-3xl">
      <div className='flex flex-col gap-4 lg:gap-8'>
      <Marquee autoFill={true}>
          <ul className="lst-box">
            {images2.map((image, index) => (
              <li key={`first-${index}`} className='w-36 h-32 lg:w-64 lg:h-48 3xl:w-96 3xl:h-60 mr-4' >{image}</li>
            ))}
          </ul>
        </Marquee>
        <Marquee direction='right' className='' autoFill={true}>
          <ul className="lst-box">
            {images1.map((image, index) => (
              <li key={`first-${index}`} className='w-36 h-32 lg:w-64 lg:h-48 3xl:w-96 3xl:h-60 mr-4' >{image}</li>
              ))}
          </ul>
        </Marquee>
        </div>
        </div>

</div>
</div>
<Section5 showCardCTA={false} showHeadline={true} showMap={true} />
      </div>
    </>
  );
}
