import React from 'react';
import Button from "../ui/Button.jsx";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-semibold leading-normal mb-4 text-center text-gradient">Embrace the future of Bet Commerce using NFTs</h1>
        <p className="text-lg text-new-black mb-8">Transform your bets into unique digital assets and trade on the first and only bet marketplace</p>
        <Button variant="filled" className="text-red-500">Go to marketplace</Button>
      </div>
    </div>
  );
};

export default Hero;
