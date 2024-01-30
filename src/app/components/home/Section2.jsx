import React from 'react';
import SwitchHorizontal from '../icons/SwitchHorizontal';

const Section2 = () => {
  return (
    <div className="bg-lila">
    <div className="bg-lila px-8 md:px-32 py-16 md:py-44 lg:py-48 2xl:py-64 lg:px-0 mx-auto 2xl:max-w-screen-3xl ">
      <div className="mb-12 flex items-center">
        <SwitchHorizontal />
        <p className="pl-2 sm:text-xs md:text-base 2xl:text-3xl text-new-black font-tomato inline-block align-center">Securely trade your bets with other users</p>
      </div>
      <div className="flex flex-col lg:flex-row space-between gap-8 md:gap-16">
        <Card title="Transform your bet into a blockchain certified ticket" backgroundImage="/section21.jpg" titleColor="text-white" />
        <Card title="Explore and trade on the marketplace" backgroundImage="/section22.jpg" titleColor="text-new-black" />
      </div>
    </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor }) => {
  const titleClasses = `absolute top-6 left-6 p-2 text-xl md:text-3xl 2xl:text-5xl 2xl:p-8 w-3/4 font-tomato font-normal ${titleColor}`;

  return (
    <div className="card h-[20rem] md:h-[30rem] 2xl:h-[40rem] sm:w-full lg:w-1/2 rounded-lg 2xl:rounded-2xl overflow-hidden bg-cover bg-bottom relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className={`${titleClasses}`}>{title}</p>
    </div>
  );
};



export default Section2;
