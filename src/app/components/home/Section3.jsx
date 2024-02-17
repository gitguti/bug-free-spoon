"use client"
import React from 'react';
import Button from "../ui/Button.jsx";
import Carousel from "../home/Carousel.jsx";

const Section3 = () => {
  const slides = [
    { src: "/section31.png", title: "List your NFTs", titleColor: "text-white" },
    { src: "/section32.png", title: "Cashout", titleColor: "text-white" },
    { src: "/section33.png", title: "Buy, sell and auction", titleColor: "text-white" },

  ];


  return (
    <div className="bg-white">
    <div className="py-12 md:py-20 lg:py-24 3xl:py-36 4xl:py-48 mx-auto px-px sm:px-8  md:px-0  w-11/12 4xl:w-10/12">
    <div className="">
      <div className="mb-8 lg:mb-12 3xl:mb-12 4xl:mb-16">
        <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-tomato font-semibold leading-normal text-center text-gradient">The Marketplace</h2>
      </div>
      <div className="flex flex-col lg:flex-row space-between gap-4 md:gap-6 md:hidden">
        <Carousel slides={slides} />
      </div>

      <div className="space-between gap-4 md:gap-[0.8rem] xl:gap-4 4xl:gap-6 hidden md:flex">
        <Card title="List your NFTs" backgroundImage="/section31.png" titleColor="text-white" />
        <Card title="Cashout" backgroundImage="/section32.png" titleColor="text-white" />
        <Card title="Buy, sell and auction" backgroundImage="/section33.png" titleColor="text-white" />
      </div>
      </div>
      </div>
    </div>
  );
};

const Card = ({ title, backgroundImage, titleColor }) => {
  const titleClasses = `absolute top-2 left-2 md:top-4 md:left-4 lg:top-8 lg:left-[2.2rem] 3xl:top-16 3xl:left-[2.5rem] 4xl:top-20 4xl:left-14 md:text-xl xl:text-3xl xl:top-12 w-2/3 lg:text-2xl 3xl:text-[2.5rem] 4xl:text-[2.9rem] 4xl:leading-[3.4rem] lg:w-full font-tomato font-medium  ${titleColor}`;

  return (
    <div className="card h-80 lg:h-[20rem] xl:h-[25rem] 2xl:h-[36rem] sm:w-full 2xl:w-1/3 rounded-lg 2xl:rounded-2xl overflow-hidden relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <span className={titleClasses}>{title}</span>
    </div>
  );
};



export default Section3;
