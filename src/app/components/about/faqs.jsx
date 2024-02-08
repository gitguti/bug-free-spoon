import React, { useState } from 'react';
import Image from 'next/image';

const Faqs = ({ question, image, backgroundColor, isDarkBackground }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textColorClass = !isDarkBackground ? 'text-white' : 'text-new-black';

  const hasQuestion = question && question.trim().length > 0;

  if (hasQuestion) {
    return (
      <div
        className={`px-10 pt-8 pb-8 rounded-lg overflow-hidden ${backgroundColor} faq-example relative min-h-52 max-h-72 `}
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
        className={`rounded-lg overflow-hidden ${backgroundColor} relative h-full w-full hover:shadow-xl transition-shadow duration-300 ease-in-out object-cover`}
      >
        <Image
          src={image}
          alt="Descripción"
          layout="fill"
        />
      </div>
    );
  }
};

export default Faqs;
