import React from 'react';
import SwitchHorizontal from '../icons/SwitchHorizontal';

const Section2 = () => {
  return (
    <div className="bg-lila p-16 md:p-32">
      <div className="mb-12">
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-lila via-[#690F8D] to-[#190EAF] pointer-events-none">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#EEF0FF] rounded-md group-hover:bg-opacity-0 flex">
<SwitchHorizontal/>
  <p className="pl-6 text-new-black font-tomato inline-block">Securely trade your bets with other users</p>
</span>
</button>

      </div>
      <div className="flex flex-col md:flex-row space-between gap-8 md:gap-16">
        <Card title="Transform your bet into a blockchain certified ticket" backgroundImage="/section21.jpg"     titleColor="text-white"/>
        <Card title="Explore and trade on the marketplace" backgroundImage="/section22.jpg" titleColor="text-new-black" />
      </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor }) => {
  const titleClasses = `absolute top-6 left-6 p-2 text-3xl w-3/4 font-tomato font-normal ${titleColor}`;

  return (
    <div className="card h-96 sm:w-full md:w-1/2 rounded-lg overflow-hidden relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className={`${titleClasses}`}>{title}</p>
    </div>
  );
};

  

export default Section2;
