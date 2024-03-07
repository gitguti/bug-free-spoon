"use client"
import React from 'react';
import Button from "../ui/Button.jsx";
import Carousel from "../home/Carousel.jsx";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image.js';
import ChevronDown from '../icons/ChevronDown.jsx';
import ChevronUp from '../icons/ChevronUp.jsx';

const Section3 = () => {

  const data = [
    {
      title: 'List your NFTs',
      content: 'Showcase your bet to a vast community of millions of gamblers eagerly seeking bets with desirable characteristics. Our platform categorizes NFT bets by sport, league, and other relevant attributes, making it effortless for users to discover and engage with your NFT bet.',
      backgroundImage: "/section31.png" 
    },
    {
      title: 'Buy, Sell and Auction',
      content: 'By simply registering your crypto wallet on our marketplace, our platform seamlessly detects eligible and certified BetSell NFT bets associated with your wallet account. With full control over your account settings, you can easily configure and showcase your NFT bets to potential buyers. Enjoy the convenience of anonymous and secure interactions as you explore other listings giving you the opportunity to purchase other NFT bets that align with your interests.',
      backgroundImage:"/section32.png" 

    },
    {
      title: 'Cashout',
      content: 'Securely trade your NFT bet and automatically receive your payment directly into your registered crypto wallet, as your NFT bets are successfully purchased. BetSell\'s trading process ensures the safe and seamless distribution of your purchase, as well as the smooth transfer of your asset to its new owner.',
      backgroundImage: "/section33.png"
    },
    {
      title: 'Trusted',
      content: 'BetSell\'s Marketplace guarantees the authenticity of its listings by verifying each NFT directly through its sportsbook source. Users are also rated based on their history of buying and selling bets.',
      backgroundImage: "/section34.png"
    }
  ];

  return (
    <div className="bg-white" >
    <div className="py-12 md:py-20 lg:py-24 3xl:py-36 4xl:py-48 mx-auto px-px sm:px-8  md:px-0  w-11/12 4xl:w-9/12 flex justify-center flex-col">
    <div className="mx-auto ">
      <div className="mb-8 lg:mb-14 3xl:mb-16 4xl:mb-16">
        <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-tomato font-semibold leading-normal text-center text-gradient3">The Marketplace - BetSell.io</h2>
      </div>
<div className='mx-auto flex justify-center'>
      <Accordion data={data} />
      </div>
      </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ title, content, index, isOpen, setOpenIndex, backgroundImage }) => {
  return (
    <div className="accordion-panel">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="flex justify-between items-center w-full px-4 py-8 text-left border-b border-gray-200"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-xl text-new-black 3xl:text-3xl font-tomato">{title}</span>
        <span className="text-xl text-gray-400 font-normal">
          {isOpen ? <ChevronUp /> :  <ChevronDown />}
        </span>
      </button>
      <div
        className="accordion-content"
        aria-hidden={!isOpen}
      >
        <div className="px-4 pt-4 text-[#6B6B6B] mb-4 text-sm md:leading-[22px] xl:text-base 3xl:text-xl  4xl:text-[1.75rem] 4xl:leading-[2.1rem] mx-auto">
          <>
          {content}
          {isOpen && (
          <div className={`flex my-8 lg:hidden mx-auto justify-center self-center transition-opacity duration-1000 delay-100 opacity-0 h-0  ${isOpen ? "opacity-100 h-auto " :  "opacity-0 "}
          `}>
            <Image
              width={200}
              height={300}
              src={backgroundImage}
              alt={title}
              className="rounded-lg shadow-md"
            />
          </div>
        )}
          </>
        </div>
      </div>
    </div>
  );
};


// Componente Acordeón principal
const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0); // Por defecto, el primer ítem está abierto

  return (
    <div className="w-11/12 md:w-11/12 mx-auto flex flex-col gap-8 xl:gap-16 3xl:gap-20 md:flex-row">
      <div className="flex-1 flex justify-end flex-col">
        {data.map((item, index) => (
          <>
           <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            backgroundImage={item.backgroundImage}
            index={index}
            isOpen={openIndex === index}
            setOpenIndex={() => setOpenIndex(index === openIndex ? (index + 1) % data.length : index)}
            />
          </>
        ))}
      </div>
      <div className="hidden lg:flex mx-auto flex-1 justify-center relative lg:justify-center 4xl:justify-end lg:items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-500 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              width={500}
              height={300}
              src={item.backgroundImage}
              alt={item.title}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

    </div>
  );
};




export default Section3;
