"use client"
import Image from 'next/image';
import React from 'react';
import FeaturesCard from '../components/features/FeaturesCard';
import FeaturesCardHero from '../components/features/FeaturesCardHero';
import FeaturesCardMobile from '../components/features/FeaturesCardMobile';
import Section5 from '../components/home/Section5';
import Charts from '../components/icons/Charts';
import FeaturesCarousel from '../components/features/FeaturesCarousel';

export default function Features() {
  const featureInfo = [
    {
      title: "Easy Process",
      description: "Seamless one-click process to transform your bets into NFTs",
      image: "/no-bg/easyProcess.png",
      hoverColor: "#2A2155", 
      isDarkBackground: true
    },
    {
      title: "Ownership",
      description: "Mint your bet as an NFT for exclusive ownership and undeniable proof in your crypto wallet.",
      image: "/no-bg/ownership.png",
      hoverColor: "#E7E7FB", 
      isDarkBackground: false

    },
    {
      title: "Secure",
      description: "Each NFT represents a verified bet from licensed sportsbooks, ensuring authenticity and confidence",
      image: "/no-bg/secure.png",
      hoverColor: "#87ABF1",
      isDarkBackground: true
    },
    {
      title: "Privacy",
      description: "Trade NFT bets anonymously in our secure marketplace, prioritizing your privacy and anonymity",
      image: "/no-bg/privacy.png",
      hoverColor: "#1941A6",
      isDarkBackground: true
    },
  ];

  const value = [
    {
      title: "Tangible Value",
      description: "NFTs provides a unique digital identity that can be bought, sold and traded like a collectable item.",
      image: "/no-bg/tangible.png",
      hoverColor: "#87ABF1", 
      isDarkBackground: true
    },
    {
      title: "Ownership & Provenance",
      description: "Each NFT represents a unique bet, verifying its authenticity and boosting its tradable value.",
      image: "/no-bg/ownership.png",
      hoverColor: "#102400", 
      isDarkBackground: true

    },
    {
      title: "Open Market Opportunities",
      description: "Minting your sportsbets as NFTs gives you access to a global marketplace and unlocks revenue-generating opportunities.",
      image: "/no-bg/openMarket.png",
      hoverColor: "#2A2155",
      isDarkBackground: true
    },
    {
      title: "Exclusivity",
      description: "NFTs add scarcity and exclusivity to bets, making your original stake more valuable and appealing to gamblers who seek unique market opportunities",
      image: "/no-bg/exclusivity.png",
      hoverColor: "#0052B3",
      isDarkBackground: true
    },
    {
      title: "Transparency & Verification",
      description: "The unchanging nature of the blockchain ensures that anyone can easily track and confirm the authenticity of your bets, promoting trust in the authenticity of your NFTs.",
      image: "/no-bg/secure.png",
      hoverColor: "#6D83D2",
      isDarkBackground: true
    },
    {
      title: "Integration of Technology",
      description: "Integrating sports betting with blockchain technology through NFTs adds a futuristic edge, attracting tech-savvy users and demonstrating your commitment to innovation.",
      image: "/no-bg/tiger.png",
      hoverColor: "#21A0B2",
      isDarkBackground: true
    },
  ];
  
  return (
    <>
    <div className="bg-new-white">
    <div className="px-px sm:px-8 w-11/12 4xl:w-10/12 mx-auto flex flex-col justify-center py-10 md:py-16 lg:py-20">
        <h2 className="font-tomato text-3xl md:text-5xl 2xl:text-7xl font-semibold leading-normal mb-8 3xl:mb-12 4xl:mb-16 text-gradient3">Features</h2>

      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-4 4xl:gap-[1.8rem] relative justify-center">
  {featureInfo.map((card, index) => (
    <FeaturesCardHero
      key={index}
      title={card.title}
      description={card.description}
      image={card.image}
      hoverColor={card.hoverColor}
      isDarkBackground={card.isDarkBackground}

    />
  ))}
</div>
<div className="flex flex-col lg:flex-row space-between gap-4 md:gap-4 md:hidden">
<FeaturesCarousel features={featureInfo} />
</div>
</div>
<div className='bg-lila '>
<div className="px-px sm:px-8 w-11/12 4xl:w-10/12 mx-auto flex flex-col justify-center py-12 lg:py-24 4xl:py-36">
<div className="flex items-center text-center justify-center mb-6 md:mb-8 xl:mb-12 3xl:mb-10 4xl:mb-20 ">
        <Charts />
        <p className="pl-2 sm:text-xs md:text-base lg:text-xl xl:text-[1.8rem] 3x:text-[2.3rem] 4xl:text-[2.5rem] text-new-black font-tomato inline-block align-center font-semibold">Adding value to your betting assets</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-4 4xl:gap-[1.8rem] relative justify-center">
  {value.map((card, index) => (
    <>
      {/* FeaturesCard para dispositivos no móviles */}
      <div key={index} className="hidden md:block">
        <FeaturesCard
          title={card.title}
          description={card.description}
          image={card.image}
          hoverColor={card.hoverColor}
          isDarkBackground={card.isDarkBackground}
        />
      </div>

      {/* FeaturesCardMobile para dispositivos móviles */}
      <div key={index} className="block md:hidden">
        <FeaturesCardMobile
          title={card.title}
          description={card.description}
          image={card.image}
          hoverColor={card.hoverColor}
          isDarkBackground={card.isDarkBackground}
        />
      </div>
    </>
  ))}
</div>
</div>

</div>


</div>
<Section5 showCardCTA={true} showHeadline={false} showMap={false} />
    </>
  );
}
