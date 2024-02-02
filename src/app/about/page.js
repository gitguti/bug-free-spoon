"use client"
import React from 'react';
import Image from 'next/image';
import Faqs from '../components/about/faqs';
import Section2 from '../components/about/Section2';

export default function About() {


  const images1 = [];
  for (let i = 1; i <= 3; i++) {
    images1.push(
      <div key={i} className="imageBox">
        <Image
          src={`/events/${i}.png`}
          alt={`Image ${i}`}
          layout="responsive"
          width={215}
          height={196}
          loading="lazy"
        />
      </div>
    );
  }
  
  const images2 = [];
  for (let i = 4; i <= 6; i++) {
    images2.push(
      <div key={i} className="imageBox">
        <Image
          src={`/events/${i}.png`}
          alt={`Image ${i}`}
          layout="responsive"
          width={215}
          height={196}
          loading="lazy"
        />
      </div>
    );
  }
  

  const faqsContent = [
    {
      question: "Do you have an early future bet with improved and appealing odds compared to the current market conditions?",
      image: "/transparency.png",
      backgroundColor: "bg-purple",
      isDarkBackground: false

    },
    {
      question: "Would you like to sell your original stake at a discounted price to clear it from your account?",
      image: "/sell.png",
      backgroundColor: "bg-[#87ABF1]",
      isDarkBackground: false
    },
    {
      question: "Is your pending parlay bet just a few legs away from the potential to win a significant payout?",
      image: "/comunist.png",
      backgroundColor: "bg-[#CDC0E9]",
      isDarkBackground: true
    },
    {
      question: "Do you wish to cash out early on your bet securing a guaranteed win?",
      image: "/privacy.png",
      backgroundColor: "bg-[#F4F4F4]",
      isDarkBackground: true
    },
    {
      question: "Have the odds for your pending bet undergone drastic changes in the market, now favouring your original stake?",
      image: "/easyProcess.png",
      backgroundColor: "bg-[#907BCB]",
      isDarkBackground: false
    },
    {
      question: "",
      image: "",
      backgroundColor: "bg-purple",
      isDarkBackground: false
    }
  ];
    
  return (
    <>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 px-8 md:px-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto 2xl:max-w-screen-3xl py-16 lg:py-24mx-auto items-center">
      <div className="col-span-1">
      <h2 className="font-tomato text-2xl md:text-4xl 2xl:text-5xl font-semibold leading-normal mb-4 text-gradient shrink-0">Why should you consider trading your bets?</h2>
      </div>
<div className="w-full grid grid-cols-2 gap-3 col-span-2 min-h-0 min-h-full">
  {faqsContent.map((faq, index) => (
    <Faqs
      key={index}
      question={faq.question}
      image={faq.image}
      backgroundColor={faq.backgroundColor}
      isDarkBackground={faq.isDarkBackground}

    />
  ))}
</div>

    </div>
    <Section2/>

      <div
    x-data="{}"
    x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
    class="w-1/2 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mx-auto"
>
    <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img src="./events/1.png" alt="Facebook" />
        </li>
        <li>
            <img src="./events/2.png" alt="Disney" />
        </li>
        <li>
        <img src="./events/3.png" alt="Disney" />
        </li>
        <li>
        <img src="./events/4.png" alt="Disney" />
        </li>
        <li>
        <img src="./events/5.png" alt="Disney" />
        </li>
        <li>
        <img src="./events/6.png" alt="Disney" />
        </li>
    </ul>                
</div>
    </>
  );
}
