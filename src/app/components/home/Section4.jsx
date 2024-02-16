import React from 'react';
import Image from 'next/image';


const Section4 = () => {
  return (
    <div className="bg-dirty-grey">
    <div className="px-px sm:px-8 md:px-0 py-16 md:py-20 lg:py-24 3xl:py-36 4xl:py-48 mx-auto w-11/12 4xl:w-9/12 4xl:w-9/12">
      <div className="mb-12 xl:mb-8 3xl:mb-12 4xl:mb-16">
        <h2 className="text-[3.5rem] md:text-[6.5rem] 2xl:text-[8.75rem] text-center text-gradient font-semibold leading-none xl:leading-normal text-center text-gradient font-tomato">How it works
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 2xl:gap-8">
        <Card title="1. Pick" description="Choose the bet you wish to mint by simply clicking a button" titleColor="text-new-black" backgroundColor="#CDC0E9" image="/Pick.png" width="170" height="50" />
        <Card title="2. Mint" description="Transform your bet into a certified asset in form of an NFT" titleColor="text-new-black" backgroundColor="#F4F4F4" image="/hiw2.png" width="70" height="70" />
        <Card title="3. Trade" description="Your NFT is now ready to be traded on the global marketplace" titleColor="text-new-white" backgroundColor=" #2B213E" image="/hiw3.png" width="70" height="70" />
        <Card title="4.Redeem" description="Get your payout effortlessly in the ‘redeem’ section of your sportsbook" titleColor="text-new-white" backgroundColor=" #6D5E8B" image="/hiw4.png" width="70" height="70" />
      </div>
    </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor, description, backgroundColor, image, width, height }) => {
  // const titleClasses = `${titleColor}`;
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: backgroundColor, // Color de fondo personalizado
  };

  return (
    <>
      <div className="px-7 py-10 h-72 w-full 2xl:h-96 rounded-lg 2xl:rounded-2xl overflow-hidden justify-content-start" style={{ backgroundColor: `${backgroundColor}` }}>
        <div className="h-[79.8633px]">
        <Image src={image} alt="Icon" width={width} height={height} />
        </div>
        <p className={`${titleColor}  font-tomato text-2xl 2xl:text-4xl font-semibold mt-4 mb-2 xl:mt-8`}>{title}</p>
        <p className={`${titleColor} text-base 2xl:text-2xl font-normal`}>{description}</p>
      </div>
    </>

  );
};



export default Section4;
