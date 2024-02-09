import React, { useState } from 'react';
import Image from 'next/image';

const Faqs = ({ question, image, backgroundColor, isDarkBackground }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textColorClass = !isDarkBackground ? 'text-white' : 'text-new-black';

  const hasQuestion = question && question.trim().length > 0;

  if (hasQuestion) {
    return (
      <div
        className={`px-10 pt-8 pb-8 rounded-lg overflow-hidden ${backgroundColor} faq-example relative min-h-52 max-h-72 3xl:min-h-64 3xl:max-h-96`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <p className={`text-lg 3xl:text-2xl ${textColorClass}`}>{question}</p>
        </div>
        <div className='absolute bottom-0 right-4 w-2/5 lg:w-2/5'>
          <Image
            src={image}
            alt="FAQ Image"
            width={305}
            height={196}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`rounded-lg overflow-hidden ${backgroundColor} relative h-full w-full hover:scale-105 transition-scale duration-300 ease-in-out`}
      >
        <Image
          src={image}
          alt="Descripción"
          className="absolute w-full bottom-0 h-auto"
          width={400}
          height={120}
        />
      </div>
    );
  }
};

export default Faqs;
