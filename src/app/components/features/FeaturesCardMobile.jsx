import React from 'react';
import Image from 'next/image'; // Asumiendo que estás utilizando Next.js

const FeaturesCardMobile = ({ title, description, image, hoverColor, isDarkBackground }) => {
  const textColorClass = isDarkBackground ? 'text-white' : 'text-new-black';

  return (
    <div className={`relative flex flex-col px-6 pt-8 pb-24 rounded-lg overflow-hidden featuresCard`} style={{ backgroundColor: hoverColor }}>
      <div className={`font-tomato text-2xl md:text-3xl 2xl:text-4xl font-semibold leading-normal mb-2 ${textColorClass}`}>
        {title}
      </div>
      <div className={`text-sm lg:text-base 2xl:text-lg mb-8 ${textColorClass}`}>
        <p>{description}</p>
      </div>
      <div className="opacity-100 absolute -bottom-8 right-4">
        <Image
          src={image}
          alt="Logo de la compañía"
          width={130}
          height={120}
        />
      </div>
    </div>
  );
};

export default FeaturesCardMobile;
