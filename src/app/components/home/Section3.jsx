"use client"
import React from 'react';
import Button from "../ui/Button.jsx";
import Carousel from "../home/Carousel.jsx";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image.js';
import ChevronDown from '../icons/ChevronDown.jsx';
import ChevronUp from '../icons/ChevronUp.jsx';

const Section3 = () => {

  const [cardPositions, setCardPositions] = useState({ left: '', center: '', right: '' });
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardPositions({ left: 'left', center: 'center', right: 'right' });
          }
        });
      },
      { threshold: 0.7 }
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

  const slides = [
    { src: "/section31.png", title: "List your NFTs", titleColor: "text-white" },
    { src: "/section32.png", title: "Cashout", titleColor: "text-white" },
    { src: "/section33.png", title: "Buy, sell and auction", titleColor: "text-white" },

  ];

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
    <div className="bg-white" ref={ref}>
    <div className="py-12 md:py-20 lg:py-24 3xl:py-36 4xl:py-48 mx-auto px-px sm:px-8  md:px-0  w-11/12 4xl:w-10/12">
    <div className="mx-auto">
      <div className="mb-8 lg:mb-12 3xl:mb-12 4xl:mb-16">
        <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-tomato font-semibold leading-normal text-center text-gradient3">The Marketplace - BetSell.io</h2>
      </div>
      <div className="flex flex-col lg:flex-row space-between gap-4 md:gap-6 md:hidden">
        <Carousel slides={slides} />
      </div>

{/* <div className="space-between gap-4 md:gap-[0.8rem] xl:gap-4 4xl:gap-6 hidden md:flex md:flex-col">
  <Card 
    title="List your NFTs" 
    backgroundImage="/section31.png" 
    titleColor="text-white"  
    position={cardPositions.left} 
    description="Showcase your bet to a vast community of millions of gamblers eagerly seeking bets with desirable characteristics. Our platform categorizes NFT bets by sport, league, and other relevant attributes, making it effortless for users to discover and engage with your NFT bet."
  />
  <Card 
    title="Buy, sell and auction" 
    backgroundImage="/section32.png" 
    titleColor="text-white" 
    position={cardPositions.center}
    description="By simply registering your crypto wallet on our marketplace, our platform seamlessly detects eligible and certified BetSell NFT bets associated with your wallet account. With full control over your account settings, you can easily configure and showcase your NFT bets to potential buyers. Enjoy the convenience of anonymous and secure interactions as you explore other listings giving you the opportunity to purchase other NFT bets that align with your interests."
  />
  <Card 
    title="Cashout" 
    backgroundImage="/section33.png" 
    titleColor="text-white" 
    position={cardPositions.right}
    description="Securely trade your NFT bet and automatically receive your payment directly into your registered crypto wallet, as your NFT bets are successfully purchased. BetSell's trading process ensures the safe and seamless distribution of your purchase, as well as the smooth transfer of your asset to its new owner."
  />
    <Card 
    title="Trusted" 
    backgroundImage="/section34.png" 
    titleColor="text-white" 
    position={cardPositions.right}
    description="BetSell's Marketplace guarantees the authenticity of its listings by verifying each NFT directly through its sportsbook source. Users are also rated based on their history of buying and selling bets."
  />
</div> */}
<div className='mx-auto hidden md:flex'>
      <Accordion data={data} />
      </div>
      </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ title, content, index, isOpen, setOpenIndex }) => {
  return (
    <div className="accordion-panel">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="flex justify-between items-center w-full px-4 py-8 text-left border-b border-gray-200"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-xl text-new-black">{title}</span>
        <span className="text-xl text-gray-400 font-normal">
          {isOpen ? <ChevronDown /> : <ChevronUp />}
        </span>
      </button>
      <div
        className="accordion-content"
        aria-hidden={!isOpen}
      >
        <div className="px-4 pt-4 text-[#6B6B6B]">
          {content}
        </div>
      </div>
    </div>
  );
};


// Componente Acordeón principal
const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0); // Por defecto, el primer ítem está abierto

  return (
    <div className="w-3/4 mx-auto flex flex-col gap-36 md:flex-row">
      <div className="flex-1">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            index={index}
            isOpen={openIndex === index}
            setOpenIndex={() => setOpenIndex(index === openIndex ? (index + 1) % data.length : index)}
          />
        ))}
      </div>
      <div className="flex-1 relative">
        {data.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              width={480}
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
