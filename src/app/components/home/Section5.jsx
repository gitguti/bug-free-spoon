import React from 'react';
import Image from 'next/image';
import Button from "../ui/Button";


const Section5 = () => {
  return (
    <>
      <div className="px-4 md:px-8 pt-16 pb-12 md:py-20 lg:py-24 3xl:pt-36 3xl:pb-28  bg-lila mx-auto">
      <div
        class="flex overflow-x-scroll pb-10 scrollbar-hide">
        <div
          class="flex flex-nowrap lg:justify-start xl:justify-center w-full gap-3 4xl:gap-8 sm:gap-4 md:gap-6">
          <div class="inline-block">
            <Card />
          </div>
          <div class="inline-block">
            <CTAApp />
          </div>
        </div>
      </div>
      <div className="mx-auto sm:w-11/12 lg:w-8/12 xl:w-1/2 4xl:w-2/5 mt-12 mb-0 text-center">
      <h2 className="font-tomato text-3xl md:text-5xl 3xl:text-[3.5rem] 3xl:leading-[4rem] 4xl:text-7xl font-semibold leading-9 md:leading-[3.5rem] 4xl:leading-[4.6rem]  my-8 text-gradient">
        Make your bets accessible to players worldwide
      </h2>
      <div className="flex justify-center">
        <Button variant="filled">Go to marketplace</Button>
        </div>
      </div>
      </div>
    </>
  );
};


const Card = ({ }) => { 
return (
        <>
          <div className="min-w-64 max-w-80 h-full 4xl:min-w-[32rem] px-6 md:px-8 py-4 4xl:px-16 4xl:py-12 rounded-xl duration-300 ease-in-out 4xl:flex 4xl:flex-col  4xl:justify-between " style={{ backgroundColor: "#492C75" }}>
            <p className=" font-tomato text-2xl md:text-3xl 4xl:text-5xl  font-bold mt-4 mb-4 text-gradient2">Get the Mobile App</p>
            <p className=" text-[#c4c4c4] mt-4 mb-4 text-xs md:text-base 2xl:text-xl">Key features of our app:</p>
            <ul className='text-[#fafafa] text-xs md:text-sm 2xl:text-base 4xl:text-2xl  leading-normal mb-8 list-disc px-4'>
              <li className="mb-2">Get real-time notifications when buyers are interested in your bet</li>
              <li>Be the first to know when a bet is available for trade</li>
            </ul>

            <Image src="/downloadIOS.png" alt="Icon" width={250} height={60} />

          </div>
        </>

        );
};

        const CTAApp = ({ }) => {
  return (
        <>
          <div className="min-w-[48rem] md:min-w-[55rem] lg:min-w-[55rem] min-h-full px-12 py-10 4xl:w-[80rem] 4xl:h-[36rem] overflow-hidden rounded-xl bg-cta-app bg-cover duration-300 ease-in-out">
          </div>
        </>
        )
}



        export default Section5;
