import React from 'react';
import SwitchHorizontal from '../icons/SwitchHorizontal';

const Section2 = () => {
  return (
    <div className="bg-lila">
    <div className="bg-lila px-px sm:px-8 md:px-0 py-12 lg:py-24 4xl:py-36 mx-auto w-11/12 4xl:w-9/12 4xl:w-9/12">
      <div className="mb-6 md:mb-8 xl:mb-12 3xl:mb-10 4xl:mb-20 flex items-start md:items-center">
        <SwitchHorizontal/>
        <p className="pl-4 sm:text-xs md:text-base lg:text-2xl xl:text-[2rem] 4xl:text-[3rem] text-new-black font-tomato inline-block align-left md:align-center">Securely trade your bets with other users</p>
      </div>
      <div className="flex flex-col md:flex-row space-between gap-4 md:gap-[1.5rem] md:gap-12">
        <Card title="Transform your bet into a blockchain certified ticket" backgroundImage="/section21.webp" titleColor="text-white" />
        <Card title="Explore and trade on the marketplace" backgroundImage="/section22.webp" titleColor="text-new-black" />
      </div>
    </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor }) => {
  const titleClasses = `absolute top-4 xl:top-[2.2rem] left-4 md:top-6 md:left-6 xl:left-[2.2rem]  text-xl md:text-base lg:text-2xl xl:text-[2.5rem] xl:leading-[3rem] 3xl:leading-[4rem] 4xl:text-[3.5rem] 2xl:p-8 w-2/3 lg:w-1/2 lg:w-2/3 xl:w-3/4 3xl:w-4/5 font-tomato font-medium ${titleColor}`;

  return (
    <div className="card lg:w-1/2 rounded-lg 2xl:rounded-2xl overflow-hidden bg-cover bg-bottom relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className={`${titleClasses}`}>{title}</p>
    </div>
  );
};



export default Section2;
