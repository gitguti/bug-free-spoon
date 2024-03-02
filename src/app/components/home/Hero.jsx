"use client"
import React from 'react';
import Button from "../ui/Button.jsx";
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import { useState, useEffect } from 'react';

const Hero = () => {
  const cardsData = [
    {
      sport: "Auto Racing",
      league: "F1",
      sportImage: "/sports/f1.png",
      prediction: "Max Verstappen to win 2024 Driver's Championship",
      odds: "+120",
      current: "-415",
      source: "Kings Sportsbook",
      imagen: "/Hero/11.png",
      index:1,
      floorPrice: "15.00",
      isWhite: true 
    },
    {
      sport: "Tennis",
      league: "ATP",
      prediction: "Carlos Alcaraz to win 2025 Australian Open",
      sportImage: "/sports/atp.png",
      odds: "+255",
      current: "-750",
      source: "Dual Sportsbook",
      imagen: "/Hero/3.png",
      index:2,
      floorPrice: "25.00",
      isWhite: true 
    },
    {
      sport: "Football",
      league: "NFL",
      sportImage: "/sports/nfl.png",
      prediction: "Mahomes to win NFL MVP 2025",
      odds: "+375",
      current: "+105",
      source: "Hill Sportsbook",
      imagen: "/Hero/12.png",
      index:3,
      floorPrice: "75.00",
      isWhite: true 
    },
    {
      sport: "Soccer",
      league: "MLS",
      sportImage: "/sports/mls.png",
      prediction: "Inter Miami to reach Playoffs",
      odds: "+800",
      current: "+215",
      source: "HRock Sportsbook",
      imagen: "/Hero/18.png",
      index:4,
      floorPrice: "300.00",
      isWhite: false 
    },
    {
      sport: "Soccer",
      league: "UEFA Champions League",
      sportImage: "/sports/uefa.png",
      prediction: "Real Madrid to reach UEFA Finals",
      odds: "+175",
      current: "-425",
      source: "365 Sportsbook",
      imagen: "/Hero/10.png",
      index:5,
      floorPrice: "42.00",
      isWhite: true 
    },
    {
      sport: "Golf",
      league: "PGA",
      sportImage: "/sports/pga.png",
      prediction: "Rory Mcllroy to win 2025 PGA Tour",
      odds: "-325",
      current: "-860",
      source: "Kings Sportsbook",
      imagen: "/Hero/17.png",
      index:6,
      floorPrice: "56.00",
      isWhite: true
    },
    {
      sport: "Golf",
      league: "PGA",
      sportImage: "/sports/pga.png",
      prediction: "USA to win 2025 Presidents Cup",
      odds: "-700",
      current: "-3000",
      source: "365 Sportsbook",
      imagen: "/Hero/15.png",
      index:7,
      floorPrice: "200.00",
      isWhite: true 
    },
    {
      sport: "Hockey",
      league: "NHL",
      sportImage: "/sports/nhl.png",
      prediction: "Bruins to win 2025 Stanley Cup",
      odds: "-2450",
      current: "-8000",
      source: "Fred Sportsbook",
      imagen: "/Hero/14.png",
      index:8,
      floorPrice: "90.00",
      isWhite: true 
    },
    {
      sport: "Basketball",
      league: "NBA",
      sportImage: "/sports/nba.png",
      prediction: "Stephne Curry to score 35 points in a single season game",
      odds: "-750",
      current: "-500",
      source: "Power Sportsbook",
      imagen: "/Hero/16.png",
      index:9,
      floorPrice: "33.00",
      isWhite: true 
    },
    {
      sport: "Baseball",
      league: "MLB",
      sportImage: "/sports/mlb.png",
      prediction: "Astros to win 2024 World Series",
      odds: "+800",
      current: "-375",
      source: "365 Sportsbook",
      imagen: "/Hero/9.png",
      index:10,
      floorPrice: "21.00",
      isWhite: true 
    },
    {
      sport: "MMA",
      league: "UFC",
      sportImage: "/sports/ufc.png",
      prediction: "Jon Jones to lose UFC title in 2024",
      odds: "+160",
      current: "-200",
      source: "FOX Sportsbook",
      imagen: "/Hero/2.png",
      index:11,
      floorPrice: "15.00",
      isWhite: true 
    },
    {
      sport: "Aussie Rules",
      league: "AFL",
      sportImage: "/sports/afl.png",
      prediction: "Sydney Swans to reach 2024 playoffs",
      odds: "-500",
      current: "+100",
      source: "Brokes Sportsbook",
      imagen: "/Hero/13.png",
      index:12,
      floorPrice: "15.00",
      isWhite: false 
    },
    {
      sport: "Football",
      league: "NCAA",
      sportImage: "/sports/ncaa.png",
      prediction: "Oklahoma to win Big 12 2024-25 Conference",
      odds: "+575",
      current: "-120",
      source: "Kings Sportsbook",
      imagen: "/Hero/4.png",
      index:13,
      floorPrice: "105.00",
      isWhite: true
    },
    {
      sport: "Auto Racing",
      league: "F1",
      sportImage: "/sports/f1.png",
      prediction: "Mercedes Benz to win 2024 Constructor",
      odds: "+600",
      current: "-900",
      source: "X Sportsbook",
      imagen: "/Hero/1.png",
      index:14,
      floorPrice: "55.00",
      isWhite: false
    }
  ];
  
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  
  const Card = ({ card }) => (
        <div key={card.index} className="max-w-52 md:max-w-xs rounded-lg shadow-lg bg-white flex flex-col overflow-hidden mb-0 md:mb-4">
      <div className="w-full h-32 md:h-52 rounded-t-lg overflow-hidden relative">
        <Image
          src={card.imagen}
          alt={card.prediction}
          width={400}
          height={200}
          priority={true}
        />
            <div className='absolute top-4 left-4'>
            <p className={`${card.isWhite ? 'text-white' : 'text-new-black'} font-semibold text-[0.5rem] md:text-xs font-tomato uppercase`}>{card.sport}</p>
      <Image
          src={card.sportImage}
          alt={card.sport}
          width={30}
          height={20}
          className='mt-1'
          priority={true}
        />
    </div>
      </div>
      <div className='px-2 md:px-4 py-2 md:py-4'>
        <div className='whitespace-normal h-10 md:h-12 md:mb-2'>
          <p className="text-new-black font-semibold text-xs md:text-lg md:leading-[1.5rem] md:mb-2">{card.prediction}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between items-start">
            <p className="text-gray-600 text-[0.5rem] md:text-sm">Floor Price</p>
            <p className="text-new-black font-semibold text-sm">{card.floorPrice} USD</p>
          </div>
          <div className="flex flex-col justify-between items-start">
            <p className="text-gray-600 text-[0.5rem] md:text-sm">Odds</p>
            <p className="text-new-black font-semibold text-sm">{card.odds}</p>
          </div>
          <div className="flex flex-col justify-between items-start">
            <p className="text-gray-600 text-[0.5rem] md:text-sm">Current</p>
            <p className="text-new-black font-semibold text-sm">{card.current}</p>
          </div>
        </div>
        <div className="w-full h-px bg-gray-200 my-2"></div>
        <div className="flex justify-between text-gray-600">
          <div className="flex flex-col justify-between items-start">
            <p className="text-[0.5rem] md:text-sm">Source</p>
            <p className="text-[0.5rem] md:text-sm">Sport</p>
          </div>
          <div className="flex flex-col justify-between items-end font-medium">
            <p className="text-gray-900 text-[0.5rem] md:text-sm">{card.source}</p>
            <p className="text-gray-900 text-[0.5rem] md:text-sm">{card.sport}</p>
          </div>
        </div>
      </div>
    </div>
  );

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const handleResize = () => {
          setSize([window.innerWidth, window.innerHeight]);
        };
  
        window.addEventListener('resize', handleResize);
        handleResize();
  
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);
  
    return size;
  }

  const [width] = useWindowSize();

  const breakpoint = 768;

  const style = {
    maxHeight: width < breakpoint ? '220px' : '100%',
    maxWidth: width < breakpoint ? '220px' : '100%', 
    margin: width < breakpoint ? '0.5rem' : '0'
  };

  return (
    <>
      <div className="mx-auto flex flex-col bg-new-white ">
      <div className='mt-[1.8rem] lg:mt-12 4xl:mt-24 flex flex-col md:gap-4'>
      <Marquee autoFill={true} style={ {gap: '1rem', marginRight: '1rem' } }>
          <ul className="lst-box lst-box-gap">
          {cardsData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
          </ul>
        </Marquee>
        <div className="px-px sm:px-8 w-11/12 md:px-0 lg:w-full 4xl:w-full mx-auto flex justify-center mt-4 mb-4 2xl:mb-4 2xl:mt-12 4xl:mt-16  min-h-max animate-slideUp">
          <div className="text-center mx-auto 4xl:w-9/12">
            <h1 className="font-tomato text-[1.7rem] md:text-[3.25rem] md:leading-[3.6rem] 2xl:text-8xl 3xl:text-7xl 4xl:text-8xl font-semibold leading-8 2xl:leading-[1.1] 3xl:leading-[1.2] mb-[0.6rem] sm:mb-4 text-center text-gradient lg:hidden">The future of <span className="text-gradient3 font-bold">Bet </span> <br></br> Commerce using NFTs</h1>
            <h1 className="font-tomato text-[1.7rem] md:text-[3.25rem] md:leading-[3.6rem] 2xl:text-8xl 3xl:text-7xl 4xl:text-8xl font-semibold leading-8 2xl:leading-[7.1rem] 3xl:leading-[5rem] 4xl:leading-[6.6rem] mb-[0.6rem] sm:mb-4 text-center text-gradient hidden lg:block">The future of <span className="text-gradient3 font-bold">Bet </span> Commerce using NFTs</h1>
            <p className="text-sm md:text-lg text-new-black mb-[0.8rem] sm:mb-2 2xl:text-[2rem] 3xl:text-[1.8rem] 4xl:text-[2rem] leadinng-[1.4rem] 2xl:leading-[2.8rem] 3xl:leading-[2.5rem] 4xl:leading-[2.8rem] md:w-9/12 lg:w-2/3 4xl:w-1/2 mx-auto ">Transform your bets into unique digital assets and trade on the first and only bet marketplace</p>
            {/* <Button variant="filled" className="text-red-500">Go to marketplace</Button> */}
          </div>
        </div>
        <Marquee direction='right' className='gap-4' autoFill={true}>
        <ul className="lst-box lst-box-gap">
          {cardsData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
          </ul>
        </Marquee>
      </div>
      </div>
    </>
  );
};

export default Hero;
