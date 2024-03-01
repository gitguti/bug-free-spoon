"use client"
import React from 'react';
import Button from "../ui/Button.jsx";
import Carousel from "../home/Carousel.jsx";
import { useState, useEffect, useRef } from 'react';

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

  return (
    <div className="bg-white" ref={ref}>
    <div className="py-12 md:py-20 lg:py-24 3xl:py-36 4xl:py-48 mx-auto px-px sm:px-8  md:px-0  w-11/12 4xl:w-10/12">
    <div className="">
      <div className="mb-8 lg:mb-12 3xl:mb-12 4xl:mb-16">
        <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-tomato font-semibold leading-normal text-center text-gradient">The Marketplace</h2>
      </div>
      <div className="flex flex-col lg:flex-row space-between gap-4 md:gap-6 md:hidden">
        <Carousel slides={slides} />
      </div>

<div className="space-between gap-4 md:gap-[0.8rem] xl:gap-4 4xl:gap-6 hidden md:flex">
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
</div>

      </div>
      </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor, position, description }) => {
  const titleClasses = `absolute z-10 top-2 left-2 md:top-4 md:left-4 lg:top-8 lg:left-[2.2rem] 3xl:top-16 3xl:left-[2.5rem] 4xl:top-20 4xl:left-14 md:text-xl xl:text-3xl xl:top-12 w-2/3 lg:text-2xl 3xl:text-[2.5rem] 4xl:text-[2.9rem] 4xl:leading-[3.4rem] lg:w-full font-tomato font-medium ${titleColor}`;
  const descriptionClasses = `absolute z-10 text-xs top-2 left-2 md:top-4 md:left-4 lg:top-8 lg:left-[2.2rem] 3xl:top-16 3xl:left-[2.5rem] 4xl:top-20 4xl:left-14 xl:top-12 w-2/3 lg:w-full font-tomato font-medium ${titleColor}`;


  const animationClass = position === 'left' ? 'animate-moveLeft' : position === 'right' ? 'animate-moveRight' : position === 'center' ? 'animate-moveCenter' : ''

  return (
    <div className={`card h-80 lg:h-[20rem] xl:h-[25rem] 2xl:h-[36rem] sm:w-full 2xl:w-1/3 rounded-lg 2xl:rounded-2xl overflow-hidden opacity-0  relative ${animationClass}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <span className={titleClasses}>{title}</span>
      <span className={descriptionClasses}>{description}</span>
    </div>
  );
};



export default Section3;
