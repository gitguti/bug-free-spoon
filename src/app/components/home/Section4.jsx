import React from 'react';
import Image from 'next/image';


const Section4 = () => {
  return (
    <div className="bg-dirty-grey"  id="hiw">
    <div className="px-px sm:px-8 md:px-0 py-16 md:py-20 lg:py-24 3xl:py-36 4xl:py-48 mx-auto w-11/12 4xl:w-9/12">
      <div className="mb-8 xl:mb-8 3xl:mb-12 4xl:mb-16">
        <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-semibold leading-none xl:leading-normal text-gradient3 font-tomato">How it works
        </h2>
      </div>
      <div className="scroll-purple flex flex-col space-y-4 md:flex-row md:overflow-x-scroll md:space-x-4 md:space-y-0 md:pb-8">
        <Card title="1. Pick" description="From the open bets section of your participant Sportsbook account, choose the bet you wish to mint by simply clicking on a button" titleColor="text-new-black" backgroundColor="#CDC0E9" image="/Pick.png" width="170" height="50" />
        <Card title="2. Mint" description="The  BetSell minting process will be executed, seamlessly transfroming your selected bet into a unique and certified asset in the form of an NFT. The newly minted NFT will then be allocated in the crypto wallet of your choice and automatically listed on BetSell’s Marketplace." titleColor="text-new-black" backgroundColor="#F4F4F4" image="/hiw2.png" width="70" height="70" />
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
      <div className="px-7 py-10 4xl:px-10 4xl:py-12 w-full md:min-w-96 min-h-44 3xl:h-[36rem] 4xl:h-[40rem] 4xl:min-w-[36rem] rounded-lg 2xl:rounded-2xl overflow-hidden flex flex-col justify-center " style={{ backgroundColor: `${backgroundColor}` }}>
        <div className="h-[79.8633px]">
        <Image src={image} priority={false} alt="Icon" width={width} height={height} />
        </div>
        <p className={`${titleColor}  font-tomato text-2xl 2xl:text-4xl font-semibold mt-4 mb-2 lg:mb-6 xl:mt-8`}>{title}</p>
        <p className={`${titleColor} text-sm md:leading-[22px] xl:text-base 3xl:text-xl  4xl:text-[1.75rem] 4xl:leading-[2.1rem] font-normal min-h-20 md:h-36 lg:h-28 xl:h-44 3xl:h-24 4xl:h-32`}>{description}</p>
      </div>
    </>

  );
};



export default Section4;
