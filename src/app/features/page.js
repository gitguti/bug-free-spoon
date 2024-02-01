"use client"
import Image from 'next/image';
import React from 'react';
import FeaturesCard from '../components/features/FeaturesCard';

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
    // Repite el objeto para las otras tarjetas, cambiando los valores según sea necesario
  ];
  
  return (
    <>
 <div className="mb-12">
        <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-semibold leading-normal mb-7 md:mb-14 text-gradient">Features</h2>
      </div>
      <div className="grid grid-cols-4">
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


    </>
  );
}
