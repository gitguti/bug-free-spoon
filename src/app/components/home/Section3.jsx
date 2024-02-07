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
    <div className="py-16 lg:py-40 2xl:py-48 mx-auto px-px sm:px-8  md:px-0  w-11/12 3xl:w-10/12">
    <div className="">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-tomato font-semibold leading-normal mb-7 md:mb-14 text-center text-gradient">The Marketplace</h2>
      </div>
      <div className="flex flex-col lg:flex-row space-between gap-4 md:gap-6 block md:hidden">
        <Carousel slides={slides} />
      </div>

      <div className="space-between gap-4 md:gap-6 xl:gap-12 hidden md:flex">
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
  const titleClasses = `absolute top-2 left-2 md:top-4 md:left-4 xl:p-8 md:text-xl xl:text-2xl 3xl:text-3xl w-2/3  ${titleColor}`;

  return (
    <div className="card h-80 lg:h-[20rem] xl:h-[25rem] 2xl:h-[36rem] sm:w-full 2xl:w-1/3 rounded-lg 2xl:rounded-2xl overflow-hidden relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <span className={titleClasses}>{title}</span>
    </div>
  );
};



export default Section3;
