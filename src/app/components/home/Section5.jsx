import React from 'react';
import Image from 'next/image';
import Button from "../ui/Button";


const Section5 = ({ showCardCTA, showHeadline, showMap }) => {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 4xl:px-60  pt-10 pb-12 md:py-20 lg:py-24 3xl:pt-36 3xl:pb-28 bg-[#DADDF6] mx-auto">
        {showCardCTA && (
          <div className="flex  w-full overflow-x-auto pb-10 scrollbar-hide">
            <div className="flex flex-nowrap lg:justify-center xl:justify-start gap-3 3xl:gap-6 ">
              <div className="inline-block">
                <Card />
              </div>
              <div className="inline-block">
                <CTAApp />
              </div>
            </div>
          </div>
        )}

        {showHeadline && (
          <div className="mx-auto sm:w-11/12 lg:w-8/12 xl:w-1/2 4xl:w-2/5 mt-12 mb-0 text-center">
            <h2 className="font-tomato text-3xl md:text-5xl 3xl:text-[3.5rem] 3xl:leading-[4rem] 4xl:text-7xl font-semibold leading-9 md:leading-[3.5rem] 4xl:leading-[4.8rem] my-8 text-gradient">
              Make your bets accessible to players worldwide
            </h2>
            <div className="flex justify-center">
              <Button variant="filled">Go to marketplace</Button>
            </div>
          </div>
        )}

        {showMap && (
          <Image priority={false} alt="monkey placeholder" src="/mapHome.svg" width={600} height={300} className='w-11/12 md:w-3/4 mx-auto mt-8 md:mt-20' />
        )}
      </div>
    </>
  );
};



const Card = ({ }) => { 
return (
        <>
          <div className="min-w-64 max-w-80 h-full 4xl:min-w-[32rem] px-6 md:px-8 py-4 4xl:px-16 4xl:py-12 rounded-lg duration-300 ease-in-out 4xl:flex 4xl:flex-col  4xl:justify-between " style={{ backgroundColor: "#492C75" }}>
            <p className=" font-tomato text-2xl md:text-3xl 4xl:text-5xl  font-bold mt-4 mb-4 text-gradient2">Get the Mobile App</p>
            <p className=" text-[#c4c4c4] mt-4 mb-4 text-xs md:text-base 2xl:text-xl">Key features of our app:</p>
            <ul className='text-[#fafafa] text-xs md:text-sm 2xl:text-base 4xl:text-2xl  leading-normal mb-8 list-disc px-4'>
              <li className="mb-2">Get real-time notifications when buyers are interested in your bet</li>
              <li>Be the first to know when a bet is available for trade</li>
            </ul>
            <div className='flex gap-4'>
            <a href="https://betsell.io" target="_blank">
  <Image priority={true}  src="/playstore.png" alt="Icon" width={250} height={60} className='h-10 w-10 xl:h-12 xl:w-12 4xl:h-16 4xl:w-16' />
</a>

            <a href="https://betsell.io" target="_blank">
            <Image priority={true}  src="/appstore.png" alt="Icon" width={250} height={60} className='h-10 w-10 xl:h-12 xl:w-12 4xl:h-16 4xl:w-16' />
            </a>

            </div>

          </div>
        </>

        );
};

        const CTAApp = ({ }) => {
  return (
        <>
          <div className="min-w-[48rem] md:min-w-[57rem] lg:min-w-[58rem] 3xl:min-w-[87rem] 4xl:min-w-[95rem] min-h-full px-12 py-10 4xl:w-[80rem] 4xl:h-[36rem] overflow-hidden rounded-lg bg-cta-app bg-cover bg-center duration-300 ease-in-out">
          </div>
        </>
        )
}



        export default Section5;
