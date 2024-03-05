// FeaturesCard.jsx
import React, {useState} from 'react';
import Image from 'next/image';

const FeaturesCardHero = ({ title, description, image, hoverColor, isDarkBackground }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textColorClass = isHovered && !isDarkBackground ? 'text-white' : 'text-new-black';
  return (
    <>
<div className={"relative flex flex-col px-6 pt-8 pb-32 rounded-lg overflow-hidden featuresCard featuresCardHero bg-white"}     onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--hover-bg-color': hoverColor }}
    >
<div className={`font-tomato text-2xl md:text-3xl 2xl:text-4xl font-semibold leading-normal mb-4 ${textColorClass}`}> 
{title}</div>
  <div className={`text-sm lg:text-base 2xl:text-lg mb-8  4xl:text-2xl font-normal ${textColorClass}`}>
    <p>{description}</p>
  </div>
  <div className="opacity-25 absolute -bottom-8 right-0 w-[60%] lg:w-[45%] xl:w-[60%] 2xl:w-[50%]">
        <Image
          src={image}
          alt="Logo de la compañía"
          width={300}
          height={300}
        />
  </div>
</div>

    </>
  );
};

export default FeaturesCardHero;