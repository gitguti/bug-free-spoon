// Faqs.jsx
import React, { useState } from 'react';
import Image from 'next/image';

const Faqs = ({ question, image, backgroundColor, isDarkBackground }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textColorClass = !isDarkBackground ? 'text-white' : 'text-new-black';


  return (
    <div
    className={`px-10 py-8 rounded-lg overflow-hidden ${backgroundColor} faq-example`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div>
      <p className={`${textColorClass}`}>{question}</p>
    </div>
    <div className={`imageBox ${isHovered ? '' : 'hidden'}`}>
      <Image
        src={image}
        alt="FAQ Image"
        width={215}
        height={196}
        layout="responsive"
      />
    </div>
  </div>
  
  );
};

export default Faqs;
