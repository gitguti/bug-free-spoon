import Image from 'next/image';
import React from 'react';
import FeaturesCard from '../components/features/FeaturesCard';

export default function Features() {
  const featureInfo = [
    {
      title: "Easy Process",
      description: "Seamless one-click process to transform your bets into NFTs",
      image: "/footerImage.png",
      hoverColor: "bg-purple-500" // Ejemplo de clase de color para el hover
    },
    {
      title: "Ownership",
      description: "Mint your bet as an NFT for exclusive ownership and undeniable proof in your crypto wallet.",
      image: "/footerImage.png",
      hoverColor: "bg-purple-500" // Ejemplo de clase de color para el hover
    },
    {
      title: "Secure",
      description: "Each NFT represents a verified bet from licensed sportsbooks, ensuring authenticity and confidence",
      image: "/footerImage.png",
      hoverColor: "bg-purple-500" // Ejemplo de clase de color para el hover
    },
    {
      title: "Privacy",
      description: "Trade NFT bets anonymously in our secure marketplace, prioritizing your privacy and anonymity",
      image: "/footerImage.png",
      hoverColor: "bg-purple-500" // Ejemplo de clase de color para el hover
    },
    // Repite el objeto para las otras tarjetas, cambiando los valores según sea necesario
  ];
  
  return (
    <>
 <div className="mb-12">
        <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-semibold leading-normal mb-7 md:mb-14 text-gradient">Features</h2>
      </div>
      <div className="grid grid-cols-3">
  {featureInfo.map((card, index) => (
    <FeaturesCard
      key={index}
      title={card.title}
      description={card.description}
      image={card.image}
      hoverColor={card.hoverColor}
    />
  ))}
</div>


    </>
  );
}
