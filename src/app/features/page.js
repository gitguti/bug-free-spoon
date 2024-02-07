"use client"
import Image from 'next/image';
import React from 'react';
import FeaturesCard from '../components/features/FeaturesCard';
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
      hoverColor: "#2A2155", // Ejemplo de clase de color para el hover
      isDarkBackground: true
    },
    {
      title: "Ownership",
      description: "Mint your bet as an NFT for exclusive ownership and undeniable proof in your crypto wallet.",
      image: "/no-bg/ownership.png",
      hoverColor: "#E7E7FB", // Ejemplo de clase de color para el hover
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
      hoverColor: "#87ABF1", // Ejemplo de clase de color para el hover
      isDarkBackground: true
    },
    {
      title: "Ownership & Provenance",
      description: "Each NFT represents a unique bet, verifying its authenticity and boosting its tradable value.",
      image: "/no-bg/ownership.png",
      hoverColor: "#102400", // Ejemplo de clase de color para el hover
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
      image: "/no-bg/integration.png",
      hoverColor: "#21A0B2",
      isDarkBackground: true
    },
  ];
  
  return (
    <>
    <div>
    <div className="px-px sm:px-8 w-11/12 3xl:w-10/12 mx-auto flex flex-col justify-center mt-8 mb-16 2xl:mb-40 2xl:mt-16 3xl:mt-40 3xl:mb-48">
        <h2 className="font-tomato text-3xl md:text-5xl 2xl:text-7xl font-semibold leading-normal mb-7 md:mb-14 text-gradient">Features</h2>

      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 3xl:gap-24 relative">
  {featureInfo.map((card, index) => (
    <FeaturesCard
      key={index}
      title={card.title}
      description={card.description}
      image={card.image}
      hoverColor={card.hoverColor}
      isDarkBackground={card.isDarkBackground}

    />
  ))}
</div>
<div className="flex flex-col lg:flex-row space-between gap-4 md:gap-8 block md:hidden">
<FeaturesCarousel features={featureInfo} />
</div>
</div>
<div className='bg-lila '>
<div className="px-px sm:px-8 w-11/12 3xl:w-10/12 mx-auto flex flex-col justify-center pt-16 pb-16 2xl:pb-40 lg:pt-24 3xl:pt-48 3xl:pb-24">
<div className="flex items-center  text-center justify-center">
        <Charts />
        <p className="pl-2 sm:text-xs md:text-base 2xl:text-3xl text-new-black font-tomato inline-block align-center">Adding  value to your betting assets</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 3xl:gap-24 mt-8 md:mt-24 relative justify-center">
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
<Section5/>

    </>
  );
}
