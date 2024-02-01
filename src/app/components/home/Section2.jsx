import React from 'react';
import SwitchHorizontal from '../icons/SwitchHorizontal';

const Section2 = () => {
  return (
    <div className="bg-lila">
    <div className="bg-lila px-8 md:px-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg py-16 lg:py-40 2xl:py-48 mx-auto 2xl:max-w-screen-3xl ">
      <div className="mb-12 flex items-center">
        <SwitchHorizontal />
        <p className="pl-2 sm:text-xs md:text-base 2xl:text-3xl text-new-black font-tomato inline-block align-center">Securely trade your bets with other users</p>
      </div>
      <div className="flex flex-col lg:flex-row space-between gap-4 md:gap-6">
        <Card title="Transform your bet into a blockchain certified ticket" backgroundImage="/section21.jpg" titleColor="text-white" />
        <Card title="Explore and trade on the marketplace" backgroundImage="/section22.jpg" titleColor="text-new-black" />
      </div>
    </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor }) => {
  const titleClasses = `absolute top-4 left-4 md:top-6 md:left-6 text-xl md:text-2xl 2xl:text-3xl 2xl:p-8 w-2/3 md:w-1/2 lg:w-2/3 font-tomato font-normal ${titleColor}`;

  return (
    <div className="card h-[20rem] md:h-[25rem] 2xl:h-[30rem] sm:w-full lg:w-1/2 rounded-lg 2xl:rounded-2xl overflow-hidden bg-cover bg-bottom relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className={`${titleClasses}`}>{title}</p>
    </div>
  );
};



export default Section2;
