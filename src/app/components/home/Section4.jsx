import React from 'react';
import Image from 'next/image';


const Section4 = () => {
  return (
    <div className="bg-dirty-grey">
    <div className="px-px sm:px-8 md:px-0 py-16 md:py-20 lg:py-24 3xl:py-36 4xl:py-48 mx-auto w-11/12 4xl:w-9/12">
      <div className="mb-12 xl:mb-8 3xl:mb-12 4xl:mb-16">
        <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-semibold leading-none xl:leading-normal text-gradient3 font-tomato">How it works
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 2xl:gap-8">
        <Card title="1. Pick" description="From the open bets section of your participant Sportsbook account, choose the bet you wish to mint by simply clicking on a button" titleColor="text-new-black" backgroundColor="#CDC0E9" image="/Pick.png" width="170" height="50" />
        <Card title="2. Mint" description="The  BetSell minting process will be executed, seamlessly transfroming your selected bet into a unique and certified asset in the form of an NFT. The newly minted NFT will then be allocated in the crypto wallet o your choice and automatically listed on BetSell’s Marketplace." titleColor="text-new-black" backgroundColor="#F4F4F4" image="/hiw2.png" width="70" height="70" />
        <Card title="3. Trade" description="Your minted bet is now available on the BetSell Marketplace, enabling individuals  from around the world to buy,sell and make offers on your NFT." titleColor="text-new-white" backgroundColor=" #2B213E" image="/hiw3.png" width="70" height="70" />
        <Card title="4.Redeem" description='NFT bets are digital certified tickets, ready to be cashed by their holders. By simply entering the "Redeem" section of the corresponding sportsbook, the holder can easily receive the payout deposited into their sportsbook account without any further inquiries.' titleColor="text-new-white" backgroundColor=" #6D5E8B" image="/hiw4.png" width="70" height="70" />
      </div>
    </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor, description, backgroundColor, image, width, height }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: backgroundColor,
  };

  return (
    <>
      <div className="px-7 py-10 w-full h-96 3xl:h-[30rem] rounded-lg 2xl:rounded-2xl overflow-hidden flex flex-col justify-end" style={{ backgroundColor: `${backgroundColor}` }}>
        <div className="h-[79.8633px]">
        <Image src={image} priority={true} alt="Icon" width={width} height={height} />
        </div>
        <p className={`${titleColor}  font-tomato text-2xl 2xl:text-4xl font-semibold mt-4 mb-2 xl:mt-8`}>{title}</p>
        <p className={`${titleColor} text-xs md:text-base 2xl:text-2xl font-normal h-28 md:h-44 lg:h-32`}>{description}</p>
      </div>
    </>

  );
};



export default Section4;
