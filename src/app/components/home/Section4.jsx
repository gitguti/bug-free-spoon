import React from 'react';
import Image from 'next/image';


const Section4 = () => {
  return (
    <div className="bg-dirty-grey p-12 md:p-16">
      <div className="mb-12">
      <h2 className="text-[3.5rem] md:text-[8.75rem] text-4xl font-semibold leading-normal mb-4 text-center text-gradientfont-semibold leading-normal mb-4 text-center text-gradient">How it works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
        <Card title="1. Pick" description="Choose the bet you wish to mint by simply clicking a button"  titleColor="text-new-black" backgroundColor="#CDC0E9" image="/hiw1.png" width="170" height="50"/>
        <Card title="2. Mint" description="Transform your bet into a certified asset in form of an NFT"  titleColor="text-new-black" backgroundColor="#F4F4F4" image="/hiw2.png" width="70" height="70"/>
        <Card title="3. Trade" description="Your NFT is now ready to be traded on the global marketplace"  titleColor="text-new-white" backgroundColor=" #2B213E" image="/hiw3.png" width="70" height="70"/>
        <Card title="4.Redeem" description="Get your payout effortlessly in the ‘redeem’ section of your sportsbook"  titleColor="text-new-white" backgroundColor=" #6D5E8B" image="/hiw4.png" width="70" height="70"/>
      </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor, description, backgroundColor,image, width, height }) => {
  // const titleClasses = `${titleColor}`;
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: backgroundColor, // Color de fondo personalizado
  };

  return (
    <>
    <div className="card px-7 py-10 h-72 w-full rounded-lg overflow-hidden justify-content-start" style={{ backgroundColor: `${backgroundColor}` }}>
      <Image src={image} alt="Icon" width={width} height={height} />
      <p className={`${titleColor}  + "text-2xl font-bold mt-4 mb-4"`}>{title}</p>
      <p className={`${titleColor} + "text-base font-bold"`}>{description}</p>
    </div>
    </>

  );
};

  

export default Section4;