import React from 'react';
import Image from 'next/image';
import Button from "../ui/Button";


const Section5 = () => {
  return (
    <>
      <div className="px-8 py-24 md:py-36 2xl:py-64  bg-lila mx-auto">
      <div
        className="flex overflow-x-scroll pb-10 scrollbar-hide">
        <div
          className="flex flex-nowrap w-full gap-4 md:gap-16 md:justify-start lg:justify-center">
          <div className="inline-block">
            <Card />
          </div>
          <div className="inline-block">
            <CTAApp />
          </div>
        </div>
      </div>
      <div className="mx-auto w-11/12 md:w-9/12 2xl:w-8/12 my-12 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-semibold leading-8 md:leading-normal my-8 text-gradient">
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
          <div className="w-72 md:w-96 h-80 px-8 md:px-12 py-4 md:py-8 md:h-96 2xl:h-[30rem] max-w-xs md:max-w-md 2xl:max-w-2xl overflow-hidden rounded-xl  bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out  justify-content-start" style={{ backgroundColor: "#492C75" }}>
            <p className="text-2xl md:text-3xl 2xl:text-5xl font-bold mt-4 mb-4 text-gradient2">Get the Mobile App</p>
            <p className=" text-[#c4c4c4] mt-4 mb-4 text-xs md:text-base 2xl:text-2xl">Key features of our app:</p>
            <ul className='text-[#fafafa] text-xs md:text-sm 2xl:text-lg mb-8 list-disc'>
              <li>Get real-time notifications when buyers are interested in your bet</li>
              <li>Be the first to know when a bet is available for trade</li>
            </ul>

            <Image src="/downloadIOS.png" alt="Icon" width={200} height={60} />

          </div>
        </>

        );
};

        const CTAApp = ({ }) => {
  return (
        <>
          <div className="w-96 md:w-[120rem] h-80  px-12 py-10 md:h-96 2xl:h-[30rem] max-w-4xl 2xl:max-w-6xl overflow-hidden rounded-xl shadow-md bg-cta-app bg-cover  hover:shadow-xl transition-shadow duration-300 ease-in-out">
          </div>
        </>
        )
}



        export default Section5;
