import React from 'react';
import SwitchHorizontal from '../icons/SwitchHorizontal';

const Section2 = () => {
  return (
    <div className="bg-lila px-8 md:px-32 py-16 md:py-44 lg:py-52 lg:py-64 lg:px-64">
      <div className="mb-12">
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-lila via-[#690F8D] to-[#190EAF] pointer-events-none">
<span className="relative px-3 py-2.5 transition-all ease-in duration-75 bg-[#EEF0FF] rounded-md group-hover:bg-opacity-0 flex">
<SwitchHorizontal/>
  <p className="pl-2 sm:text-xs md:text-base lg:text-3xl text-new-black font-tomato inline-block">Securely trade your bets with other users</p>
</span>
</button>

      </div>
      <div className="flex flex-col lg:flex-row space-between gap-8 md:gap-16">
        <Card title="Transform your bet into a blockchain certified ticket" backgroundImage="/section21.jpg"     titleColor="text-white"/>
        <Card title="Explore and trade on the marketplace" backgroundImage="/section22.jpg" titleColor="text-new-black" />
      </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor }) => {
  const titleClasses = `absolute top-6 left-6 p-2 text-xl md:text-3xl xl:text-5xl xl:p-8 w-3/4 font-tomato font-normal ${titleColor}`;

  return (
    <div className="card h-[20rem] md:h-[30rem] xl:h-[40rem] sm:w-full lg:w-1/2 rounded-lg lg:rounded-2xl overflow-hidden bg-cover bg-bottom relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className={`${titleClasses}`}>{title}</p>
    </div>
  );
};

  

export default Section2;
