import React from 'react';
import Image from 'next/image';
import Button from "../ui/Button";


const Section5 = () => {
  return (
    <>
      <div className="px-4 md:px-8 py-16 md:py-32  bg-lila mx-auto">
      <div
        class="flex overflow-x-scroll pb-10 scrollbar-hide">
        <div
          class="flex flex-nowrap lg:justify-center w-full gap-3 sm:gap-4 md:gap-6">
          <div class="inline-block">
            <Card />
          </div>
          <div class="inline-block">
            <CTAApp />
          </div>
        </div>
      </div>
      <div className="mx-auto sm:w-11/12 lg:w-8/12 xl:w-1/2 3xl:w-2/5 my-12 text-center">
      <h2 className="text-3xl md:text-5xl 3xl:text-7xl font-semibold leading-9 md:leading-normal 3xl:leading-[4.6rem]  my-8 text-gradient">
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
          <div className="min-w-64 max-w-80 h-full 3xl:min-w-[32rem] px-6 md:px-8 py-4 3xl:px-16 3xl:py-12 rounded-xl  transition-shadow duration-300 ease-in-out 3xl:flex 3xl:flex-col  3xl:justify-between " style={{ backgroundColor: "#492C75" }}>
            <p className="text-2xl md:text-3xl 3xl:text-5xl  font-bold mt-4 mb-4 text-gradient2">Get the Mobile App</p>
            <p className=" text-[#c4c4c4] mt-4 mb-4 text-xs md:text-base 2xl:text-xl">Key features of our app:</p>
            <ul className='text-[#fafafa] text-xs md:text-sm 2xl:text-base 3xl:text-2xl  leading-normal mb-8 list-disc'>
              <li>Get real-time notifications when buyers are interested in your bet</li>
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
          <div className="min-w-96 md:min-w-[40rem] min-h-full px-12 py-10 3xl:w-[80rem] 3xl:h-[36rem] overflow-hidden rounded-xl shadow-md bg-cta-app bg-cover  hover:shadow-xl transition-shadow duration-300 ease-in-out">
          </div>
        </>
        )
}



        export default Section5;
