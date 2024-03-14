import React, { useState, useLayoutEffect, useRef } from 'react';
import SwitchHorizontal from '../icons/SwitchHorizontal';
import Card from './Card';

const Section2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useLayoutEffect(() => {
    if (!ref.current) {
      console.log('ref.current no está definido.');
      return;
    }

    console.log('Elemento actual en ref:', ref.current);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
           setIsVisible(true);
          // Si deseas detener la observación después de que se haya intersectado,
          // descomenta la siguiente línea:
          // observer.unobserve(ref.current);
        }
        });
      },
      {
        root: null, // observa respecto al viewport
        threshold: 0.51,
      }
    );

    // Aquí sí es seguro llamar a observe porque ref.current ya está definido
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []); // No es necesario poner ref como dependencia aquí

  return (
    <div className="bg-lila "  ref={ref} >
      <div className="bg-lila px-px sm:px-8 md:px-0 py-12 lg:py-24 4xl:py-36 mx-auto w-11/12 4xl:w-9/12">
        <div className="mb-6 md:mb-8 xl:mb-12 3xl:mb-10 4xl:mb-20 flex items-start md:items-center">
          <SwitchHorizontal />
          <p className="pl-4 sm:text-xs md:text-base lg:text-2xl xl:text-[1.8rem] 3x:text-[2.3rem] 4xl:text-[2.5rem] text-new-black font-tomato inline-block align-left md:align-center font-semibold">Securely trade your bets with other users</p>
        </div>
        <div className="flex flex-col md:flex-row space-between gap-4 md:gap-[1.5rem]">
          <Card title="Transform your bet into a blockchain certified ticket" backgroundImage="/section21.jpg" titleColor="text-white" isVisible={isVisible} content="Easily transform your bet into a digitall certified ticket, safely recorded on the blockchain and granting the holder exclusive ownership rights, as well access to redeem its value one they become available" button={false} />
          <Card title={<><span>Explore and trade on</span><br /><span>the marketplace</span></>}backgroundImage="/section22.jpg" titleColor="text-new-black" isVisible={isVisible} delay="left" content="Explore across a wide range of appealing bets under a marketplace, designed to privately trade your stake, while guaranteeing the legitimacy of your purchase, and safety of your exchange transaction" button={true}/>
        </div>
      </div>
    </div>
  );
};

export default Section2;
