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
    <div className="px-8 py-16 md:px-20 xl:px-32 2xl:px-0 md:py-48 2xl:py-64 mx-auto 2xl:max-w-screen-3xl ">
    <div className="">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-semibold leading-normal mb-7 md:mb-14 text-center text-gradient">The Marketplace</h2>
      </div>
      <div className="flex flex-col lg:flex-row space-between gap-8 lg:gap-16 block md:hidden">
        <Carousel slides={slides} />
      </div>

      <div className="space-between gap-8 lg:gap-16 hidden md:flex">
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
  const titleClasses = `absolute top-6 left-6 p-2 xl:p-8 text-2xl w-3/4 2xl:text-5xl  ${titleColor}`;

  return (
    <div className="card h-80 lg:h-[30rem] 2xl:h-[50rem] sm:w-full 2xl:w-1/3 rounded-lg 2xl:rounded-2xl overflow-hidden relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <span className={titleClasses}>{title}</span>
    </div>
  );
};



export default Section3;
