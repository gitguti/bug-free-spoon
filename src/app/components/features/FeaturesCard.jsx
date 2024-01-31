// FeaturesCard.jsx
import React from 'react';
import Image from 'next/image'; // Asumiendo que estás utilizando Next.js

const FeaturesCard = ({ title, description, image }) => {
  return (
    <>
<div className="relative bg-another-grey px-10 py-12 flex flex-col w-96 h-96 m-48 rounded-lg border-t-8 border-purple transition-all duration-500 ease-in-out hover:before:h-full before:bg-purple-500 overflow-hidden featuresCard">
  <div className="font-tomato text-2xl md:text-3xl 2xl:text-4xl font-semibold leading-normal mb-4 text-new-black">{title}</div>
  <div className=" text-sm lg:text-base 2xl:text-lg mb-8 2xl:text-md text-new-black">
    <p>{description}</p>
  </div>
  <div className="opacity-25">
    <Image
      src={image}
      alt="Logo de la compañía"
      className="w-10/12 absolute bottom-0 right-0"
      width={800}
      height={500}
    />
  </div>
</div>

    </>
  );
};

export default FeaturesCard;