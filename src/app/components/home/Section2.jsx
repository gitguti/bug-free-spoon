import React from 'react';
import SwitchHorizontal from '../icons/SwitchHorizontal';

const Section2 = () => {
  return (
    <div className="bg-lila">
    <div className="bg-lila px-px sm:px-8 md:px-0 py-16 lg:py-48 2xl:py-64 mx-auto w-11/12 3xl:w-9/12 3xl:w-9/12">
      <div className="mb-12 xl:mb-16 3xl:mb-20 flex items-center">
        <SwitchHorizontal />
        <p className="pl-4 sm:text-xs md:text-base lg:text-2xl 2xl:text-3xl 3xl:text-4xl text-new-black font-tomato inline-block align-center">Securely trade your bets with other users</p>
      </div>
      <div className="flex flex-col md:flex-row space-between gap-4 md:gap-12">
        <Card title="Transform your bet into a blockchain certified ticket" backgroundImage="/section21.jpg" titleColor="text-white" />
        <Card title="Explore and trade on the marketplace" backgroundImage="/section22.jpg" titleColor="text-new-black" />
      </div>
    </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor }) => {
  const titleClasses = `absolute top-4 left-4 md:top-6 md:left-6 text-xl md:text-base lg:text-2xl 2xl:text-3xl 3xl:text-5xl 2xl:p-8 w-2/3 lg:w-1/2 lg:w-2/3 font-tomato font-normal ${titleColor}`;

  return (
    <div className="card lg:w-1/2 rounded-lg 2xl:rounded-2xl overflow-hidden bg-cover bg-bottom relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className={`${titleClasses}`}>{title}</p>
    </div>
  );
};



export default Section2;
