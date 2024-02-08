// FeaturesCard.jsx
import React, {useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Asumiendo que estás utilizando Next.js

const FeaturesCard = ({ title, description, image, hoverColor, isDarkBackground }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textColorClass = isHovered && !isDarkBackground ? 'text-white' : 'text-new-black';

  const [imageWidth, setImageWidth] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const crWidth = entry.contentRect.width;
        // Ajustar el ancho de la imagen basado en el ancho de la tarjeta
        setImageWidth(crWidth * (window.innerWidth >= 540 ? 0.47 : 0.6));
        console.log(imageWidth)
      }
    });

    resizeObserver.observe(cardRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
<div ref={cardRef} c className={"relative flex flex-col px-6 pt-8 pb-32 rounded-lg overflow-hidden featuresCard"}     onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--hover-bg-color': hoverColor }} // Variable CSS para el color de fondo
    >
<div className={`font-tomato text-2xl md:text-3xl 2xl:text-4xl font-semibold leading-normal mb-4 ${textColorClass}`}> 
{title}</div>
  <div className={`text-sm lg:text-base 2xl:text-lg mb-8 2xl:text-md ${textColorClass}`}>
    <p>{description}</p>
  </div>
  <div className="opacity-25 absolute -bottom-8 right-4">
        <Image
          src={image}
          alt="Logo de la compañía"
          style={{ width: `${imageWidth}px` }}
          width={imageWidth}
          height={300}  // Ajusta la altura según sea necesario
        />
  </div>
</div>

    </>
  );
};

export default FeaturesCard;