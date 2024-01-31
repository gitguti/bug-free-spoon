// FeaturesCard.jsx
import React from 'react';
import Image from 'next/image'; // Asumiendo que estás utilizando Next.js

const FeaturesCard = ({ title, description, imageSrc }) => {
  return (
    <>
    <div class="flex group bg-purple-600 p-6 rounded-lg relative overflow-hidden">
  <div class="absolute inset-0 bg-purple-900 transition-all ease-out duration-300 transform translate-y-full group-hover:translate-y-0"></div>

  <div class="relative z-10">
    <p class="text-white text-opacity-100 group-hover:text-opacity-0 transition duration-300 ease-in-out">305 x 9</p>
    <h2 class="text-2xl font-bold text-white group-hover:text-gray-800 transition duration-300 ease-in-out">Easy Process</h2>
    <p class="text-white group-hover:text-gray-800 transition duration-300 ease-in-out">Seamless one-click process to transform your bets into NFTs</p>
  </div>

  <img class="absolute bottom-0 right-0 max-w-full h-auto transform translate-y-1/4 group-hover:translate-y-0 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-50" src="/section31.png" alt="Monkey Image"/>
</div>

    </>
  );
};

export default FeaturesCard;