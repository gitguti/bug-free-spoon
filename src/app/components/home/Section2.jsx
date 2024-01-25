import React from 'react';
import Button from "../ui/Button.jsx";

const Section2 = () => {
  return (
    <div className="bg-lila p-16 md:p-32">
      <div className="mb-12">
      <Button variant="outlined" className="text-red-500">Securely trade your bets with other users</Button>
      </div>
      <div className="flex flex-col md:flex-row space-between gap-8 md:gap-16">
        <Card title="Transform your bet into a blockchain certified ticket" backgroundImage="/section21.jpg"     titleColor="text-white"/>
        <Card title="Explore and trade on the marketplace" backgroundImage="/section22.jpg" titleColor="text-new-black" />
      </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor }) => {
  const titleClasses = `absolute top-6 left-6 p-2 text-3xl w-3/4 ${titleColor}`;

  return (
    <div className="card h-96 sm:w-full md:w-1/2 rounded-lg overflow-hidden relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <span className={titleClasses}>{title}</span>
    </div>
  );
};

  

export default Section2;
