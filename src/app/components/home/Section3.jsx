import React from 'react';
import Button from "../ui/Button.jsx";

const Section3 = () => {
  return (
    <div className="bg-white p-16 md:p-32">
      <div className="mb-12">
      <Button variant="outlined" className="text-red-500">Securely trade your bets with other users</Button>
      </div>
      <div className="flex flex-col md:flex-row space-between gap-8 md:gap-16">
        <Card title="List your NFTs" backgroundImage="/section31.jpg"     titleColor="text-white"/>
        <Card title="Cashout" backgroundImage="/section32.jpg" titleColor="text-white" />
        <Card title="Buy, sell and auction" backgroundImage="/section33.jpg" titleColor="text-white" />
      </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor }) => {
  const titleClasses = `absolute top-6 left-6 p-2 text-xl w-3/4 ${titleColor}`;

  return (
    <div className="card h-96 sm:w-full md:w-1/3 rounded-lg overflow-hidden relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <span className={titleClasses}>{title}</span>
    </div>
  );
};

  

export default Section3;
