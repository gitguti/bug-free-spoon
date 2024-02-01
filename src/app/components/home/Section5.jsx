import React from 'react';
import Image from 'next/image';
import Button from "../ui/Button";


const Section5 = () => {
  return (
    <>
      <div className="bg-lila mx-auto">
      <div className="px-8 py-24 md:py-36 2xl:px-0 2xl:max-w-screen-3xl 2xl:py-64 mx-auto">
      <div
        className="flex overflow-x-scroll lg:overflow-x-auto pb-10 scrollbar-hide md:hidden">
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
      <div className="hidden md:grid w-full h-full grid-cols-3 gap-4 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto 2xl:max-w-screen-3xl">
        <div className='col-start-1'>
      <Card />
      </div>
      <div className='h-full col-start-2 col-span-2'>
      <CTAApp />
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
      </div>
    </>
  );
};


const Card = ({ }) => { 
return (
        <>
          <div className="w-full h-full px-8 py-4 max-w-xs md:max-w-md lg:max-w-screen-md 2xl:max-w-2xl overflow-hidden rounded-xl  bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out  justify-content-start" style={{ backgroundColor: "#492C75" }}>
            <p className="text-2xl md:text-3xl 2xl:text-5xl font-bold mt-4 mb-4 text-gradient2">Get the Mobile App</p>
            <div className='md:hidden lg:flex flex-col'>
            <p className=" text-[#c4c4c4] mt-4 mb-4 text-xs md:text-base 2xl:text-xl">Key features of our app:</p>
            <ul className='text-[#fafafa] text-xs md:text-sm 2xl:text-lg mb-8 list-disc'>
              <li>Get real-time notifications when buyers are interested in your bet</li>
              <li>Be the first to know when a bet is available for trade</li>
            </ul>
            </div>

            <Image src="/downloadIOS.png" alt="Icon" width={200} height={60} />

          </div>
        </>

        );
};

        const CTAApp = ({ }) => {
  return (
        <>
          <div className="relative h-full w-full hover:shadow-xl transition-shadow duration-300 ease-in-out object-fit-cover">
          <Image
        src="/CTAApp.png"
        alt="Descripción"
        fill
      />
          </div>
        </>
        )
}



        export default Section5;
