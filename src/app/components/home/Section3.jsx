import React from 'react';
import Button from "../ui/Button.jsx";

const Section3 = () => {
  return (
    <div className="bg-white px-8 py-16 md:px-20 xl:px-32 md:py-48 2xl:py-64">
      <div className="mb-12">
      <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-semibold leading-normal mb-7 md:mb-14 text-center text-gradient">The Marketplace</h2>
      </div>
      <div className="flex flex-col lg:flex-row space-between gap-8 lg:gap-16">
        <Card title="List your NFTs" backgroundImage="/section31.png"     titleColor="text-white"/>
        <Card title="Cashout" backgroundImage="/section32.png" titleColor="text-white" />
        <Card title="Buy, sell and auction" backgroundImage="/section33.png" titleColor="text-white" />
      </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor }) => {
  const titleClasses = `absolute top-6 left-6 p-2 xl:p-8 text-2xl w-3/4 2xl:text-5xl  ${titleColor}`;

  return (
    <div className="card h-80 lg:h-[30rem] 2xl:h-[50rem] sm:w-full 2xl:w-1/3 rounded-lg 2xl:rounded-2xl overflow-hidden relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <span className={titleClasses}>{title}</span>
    </div>
  );
};

  

export default Section3;
