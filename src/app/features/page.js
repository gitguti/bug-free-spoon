import Image from 'next/image';
import React from 'react';
import FeaturesCard from '../components/features/FeaturesCard';

export default function Features() {
  return (
    <>
 <div className="mb-12">
        <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-semibold leading-normal mb-7 md:mb-14 text-gradient">Features</h2>
      </div>
      <div>
        <FeaturesCard/>
      </div>

    </>
  );
}
