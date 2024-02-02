import React from 'react';
import Image from 'next/image';
import Faqs from '../components/about/faqs';

export default function About() {

  function shuffleArray(array) {
    const shuffledArray = [...array]; // Copiar el array original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray; // Devolver la copia barajada
  }

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
      image: "",
      backgroundColor: "bg-purple",
      textColor: "text-white"
    },
    {
      question: "Would you like to sell your original stake at a discounted price to clear it from your account?",
      image: "",
      backgroundColor: "bg-[#87ABF1]",
      textColor: "text-white"
    },
    {
      question: "Is your pending parlay bet just a few legs away from the potential to win a significant payout?",
      image: "",
      backgroundColor: "bg-[#CDC0E9]",
      textColor: "text-new-black"
    },
    {
      question: "Do you wish to cash out early on your bet securing a guaranteed win?",
      image: "",
      backgroundColor: "bg-[#F4F4F4]",
      textColor: "text-new-black"
    },
    {
      question: "Have the odds for your pending bet undergone drastic changes in the market, now favouring your original stake?",
      image: "",
      backgroundColor: "bg-[#907BCB]",
      textColor: "text-white"
    },
    {
      question: "Are you looking for a way to leverage your bet for a higher return on investment?",
      image: "",
      backgroundColor: "bg-purple",
      textColor: "text-white"
    }
  ];
    
  return (
    <>
    <div className="flex">
      <div className="w-1/2">
      <h2 className="font-tomato text-3xl md:text-6xl 2xl:text-8xl font-semibold leading-normal mb-4 text-gradient">Why should you consider trading your bets?</h2>
      </div>
      <Faqs faqs={faqsContent} />
    </div>
    <div className='bg-lila h-10rem text-center flex flex-col justify-center mx-auto lg:max-w-md'>
        <p>For these and many other reasons, whe have created Betsell, a platform that allows gamblers to sell their bets to other players in a secure and privacy preserving marketplace</p>
      <Image src="/about.png" width={800} height={300}/>
      </div>
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
