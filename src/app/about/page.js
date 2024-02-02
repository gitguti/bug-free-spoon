import React from 'react';
import Image from 'next/image';
import Faqs from '../components/about/faqs';

export default function About() {
  const faqsContent = [
    {
      question: "Do you have an early future bet with improved and appealing odds compared to the current market conditions?",
      answer: "",
      image: "",
      backgroundColor: "bg-purple",
      textColor: "text-white"
    },
    {
      question: "Would you like to sell your original stake at a discounted price to clear it from your account?",
      answer: "",
      image: "",
      backgroundColor: "bg-[#87ABF1]",
      textColor: "text-white"
    },
    {
      question: "Is your pending parlay bet just a few legs away from the potential to win a significant payout?",
      answer: "",
      image: "",
      backgroundColor: "bg-[#CDC0E9]",
      textColor: "text-new-black"
    },
    {
      question: "Do you wish to cash out early on your bet securing a guaranteed win?",
      answer: "",
      image: "",
      backgroundColor: "bg-[#F4F4F4]",
      textColor: "text-new-black"
    },
    {
      question: "Have the odds for your pending bet undergone drastic changes in the market, now favouring your original stake?",
      answer: "",
      image: "",
      backgroundColor: "bg-[#907BCB]",
      textColor: "text-white"
    },
    {
      question: "Are you looking for a way to leverage your bet for a higher return on investment?",
      answer: "",
      image: "",
      backgroundColor: "bg-purple",
      textColor: "text-white"
    }
  ];
    
  return (
    <>
    <div className="flex">
      <div className="w-1/2">
      <h2 className="font-tomato text-3xl md:text-6xl 2xl:text-8xl font-semibold leading-normal mb-4 text-gradient">Why should you consider trading your bets?</h2>
      </div>
      <Faqs faqs={faqsContent} />
    </div>
    <div className='bg-lila h-10rem text-center flex flex-col justify-center mx-auto lg:max-w-md'>
        <p>For these and many other reasons, whe have created Betsell, a platform that allows gamblers to sell their bets to other players in a secure and privacy preserving marketplace</p>
      <Image src="/about.png" width={800} height={300}/>
      </div>
    </>
  );
}
