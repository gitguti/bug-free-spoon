// FeaturesCard.jsx
import React, {useState} from 'react';
import Image from 'next/image'; // Asumiendo que estás utilizando Next.js

const FeaturesCard = ({ title, description, image, hoverColor, isDarkBackground }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textColorClass = isHovered && !isDarkBackground ? 'text-white' : 'text-new-black';


  return (
    <>
<div className={"relative flex flex-col px-6 pt-8 pb-32 rounded-lg overflow-hidden featuresCard"}     onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--hover-bg-color': hoverColor }} // Variable CSS para el color de fondo
    >
<div className={`font-tomato text-2xl md:text-3xl 2xl:text-4xl font-semibold leading-normal mb-4 ${textColorClass}`}> 
{title}</div>
  <div className={`text-sm lg:text-base 2xl:text-lg mb-8 2xl:text-md ${textColorClass}`}>
    <p>{description}</p>
  </div>
  <div className="opacity-25">
    <Image
      src={image}
      alt="Logo de la compañía"
      className="w-1/2 absolute bottom-0 right-4"
      width={500}
      height={500}
    />
  </div>
</div>

    </>
  );
};

export default FeaturesCard;