"use client"
import Image from 'next/image';
import React from 'react';
import FeaturesCard from '../components/features/FeaturesCard';
import Section5 from '../components/home/Section5';
import Charts from '../components/icons/Charts';

export default function Features() {
  const featureInfo = [
    {
      title: "Easy Process",
      description: "Seamless one-click process to transform your bets into NFTs",
      image: "/easyProcess.png",
      hoverColor: "#2A2155", // Ejemplo de clase de color para el hover
      isDarkBackground: true
    },
    {
      title: "Ownership",
      description: "Mint your bet as an NFT for exclusive ownership and undeniable proof in your crypto wallet.",
      image: "/ownership.png",
      hoverColor: "#E7E7FB", // Ejemplo de clase de color para el hover
      isDarkBackground: false

    },
    {
      title: "Secure",
      description: "Each NFT represents a verified bet from licensed sportsbooks, ensuring authenticity and confidence",
      image: "/secure.png",
      hoverColor: "#87ABF1",
      isDarkBackground: true
    },
    {
      title: "Privacy",
      description: "Trade NFT bets anonymously in our secure marketplace, prioritizing your privacy and anonymity",
      image: "/privacy.png",
      hoverColor: "#1941A6",
      isDarkBackground: true
    },
  ];

  const value = [
    {
      title: "Tangible Value",
      description: "NFTs provides a unique digital identity that can be bought, sold and traded like a collectable item.",
      image: "/tangible.png",
      hoverColor: "#87ABF1", // Ejemplo de clase de color para el hover
      isDarkBackground: true
    },
    {
      title: "Ownership & Provenance",
      description: "Each NFT represents a unique bet, verifying its authenticity and boosting its tradable value.",
      image: "/ownership.png",
      hoverColor: "#102400", // Ejemplo de clase de color para el hover
      isDarkBackground: true

    },
    {
      title: "Open Market Opportunities",
      description: "Minting your sportsbets as NFTs gives you access to a global marketplace and unlocks revenue-generating opportunities.",
      image: "/openMarket.png",
      hoverColor: "#2A2155",
      isDarkBackground: true
    },
    {
      title: "Exclusivity",
      description: "NFTs add scarcity and exclusivity to bets, making your original stake more valuable and appealing to gamblers who seek unique market opportunities",
      image: "/exclusivity.png",
      hoverColor: "#0052B3",
      isDarkBackground: true
    },
    {
      title: "Transparency & Verification",
      description: "The unchanging nature of the blockchain ensures that anyone can easily track and confirm the authenticity of your bets, promoting trust in the authenticity of your NFTs.",
      image: "/transparency.png",
      hoverColor: "#6D83D2",
      isDarkBackground: true
    },
    {
      title: "Integration of Technology",
      description: "Integrating sports betting with blockchain technology through NFTs adds a futuristic edge, attracting tech-savvy users and demonstrating your commitment to innovation.",
      image: "/integration.png",
      hoverColor: "#21A0B2",
      isDarkBackground: true
    },
  ];
  
  return (
    <>
    <div>
    <div className="px-8 md:px-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-xl py-16 lg:py-40 2xl:py-48 mx-auto 2xl:max-w-screen-3xl ">
        <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-semibold leading-normal mb-7 md:mb-14 text-gradient">Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 gap-8 relative">
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
</div>
<div className='bg-lila '>
<div className='px-8 md:px-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg py-16 lg:py-40 2xl:py-48 mx-auto 2xl:max-w-screen-3xl '>
<div className="mb-12 flex items-center">
        <Charts />
        <p className="pl-2 sm:text-xs md:text-base 2xl:text-3xl text-new-black font-tomato inline-block align-center">Adding  value to your betting assets</p>
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8 relative">
  {value.map((card, index) => (
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
</div>

</div>


</div>
<Section5/>

    </>
  );
}
