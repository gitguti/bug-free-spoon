import React from 'react';
import Image from 'next/image';
import Button from "../ui/Button";


const Section5 = () => {
  return (
    <div className="p-12 md:p-16 bg-lila mx-auto">
      <div className="flex gap-8 md:gap-16">
        <Card />
        <CTAApp/>
      </div>
      <div className="mx-auto w-11/12 md:w-1/2 my-12 text-center">
  <h2 className="text-3xl md:text-5xl font-semibold leading-normal my-8 text-gradient">
    Make your bets accessible to players worldwide
  </h2>
  <div className="flex justify-center">
    <Button variant="filled">Go to marketplace</Button>
  </div>
</div>

    </div>

  );
};

const Card = ({ title, backgroundImage, titleColor, description, backgroundColor, image, width, height }) => {

  return (
    <>
      <div className=" px-7 py-10 h-96 w-1/3 rounded-lg overflow-hidden justify-content-start" style={{ backgroundColor: "#492C75" }}>
        <p className="text-2xl font-bold mt-4 mb-4">Get the Mobile App</p>
        <p className=" font-bold mt-4 mb-4">Key features of our app:</p>
        <ul>
          <li>Get real-time notifications when buyers are interested in your bet</li>
          <li>Be the first to know when a bet is available for trade</li>
        </ul>

        <Image src="/downloadIOS.png" alt="Icon" width={200} height={60} />

      </div>
    </>

  );
};

const CTAApp = ({}) => {
  return (
    <>
    <div className="w-2/3 bg-cta-app bg-cover	h-96 rounded-lg">
    </div>
    </>
  )
}



export default Section5;
