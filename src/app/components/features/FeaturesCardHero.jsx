// FeaturesCard.jsx
import React, {useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Asumiendo que estás utilizando Next.js

const FeaturesCardHero = ({ title, description, image, hoverColor, isDarkBackground }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textColorClass = isHovered && !isDarkBackground ? 'text-white' : 'text-new-black';
  return (
    <>
<div c className={"relative flex flex-col px-6 pt-8 pb-32 rounded-lg overflow-hidden featuresCard bg-[#f1f1f1]"}     onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--hover-bg-color': hoverColor }} // Variable CSS para el color de fondo
    >
<div className={`font-tomato text-2xl md:text-3xl 2xl:text-4xl font-semibold leading-normal mb-4 ${textColorClass}`}> 
{title}</div>
  <div className={`text-sm lg:text-base 2xl:text-lg mb-8  4xl:text-2xl font-normal ${textColorClass}`}>
    <p>{description}</p>
  </div>
  <div className="opacity-25 absolute -bottom-8 right-4 w-[65%] lg:w-[45%] xl:w-[75%] 2xl:w-[55%]">
        <Image
          src={image}
          alt="Logo de la compañía"
          width={300}
          height={300}  // Ajusta la altura según sea necesario
        />
  </div>
</div>

    </>
  );
};

export default FeaturesCardHero;