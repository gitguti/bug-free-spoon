// Faqs.jsx
import React, { useState } from 'react';
import Image from 'next/image';

const Faqs = ({ question, image, backgroundColor, isDarkBackground }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textColorClass = !isDarkBackground ? 'text-white' : 'text-new-black';


  return (
    <div
    className={`px-10 pt-8 pb-8 rounded-lg overflow-hidden ${backgroundColor} faq-example`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div>
      <p className={`${textColorClass}`}>{question}</p>
    </div>
    <div className={`relative imageBox`}>
      <div className='absolute bottom-0 right-0 imageBox'>
      <Image
        src={image}
        alt="FAQ Image"
        width={155}
        height={196}
        className='imageBox'
      />
      </div>
    </div>
  </div>
  
  );
};

export default Faqs;
