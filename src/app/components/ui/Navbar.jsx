"use client"
import Link from 'next/link';
import { useState } from 'react';
import Button from "./Button.jsx";
import Image from 'next/image';
import Hamburguer from '../icons/Hamburguer.jsx';
import XMark from '../icons/XMark.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-light-grey">
      <div className="px-8 md:px-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto 2xl:max-w-screen-3xl">
        <div className="flex mx-auto justify-between w-full">
          {/* Primary menu and logo */}
          <div className="flex items-center justify-between my-6 md:my-4 w-full">
            {/* logo */}
            <div>
              <Link href="/">
              <div className="hidden lg:block relative w-[101px] h-[39px] 2xl:w-[150px] 2xl:h-[78px]">
  <Image
    src="/logoDesktop.png"
    alt="Logo de la compañía"
    layout="fill"
    objectFit="contain"
  />
</div>

                {/* Logo visible solo en móvil */}
                <div className="lg:hidden">
                  <Image
                    src="/logoMobile.png"
                    alt="Logo de la compañía"
                    width={28} // Ajusta estas propiedades para el logo móvil
                    height={30}
                  />
                </div>
              </Link>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8 items-center transition transition-colors transition-opacity duration-300 md:text-md xl:text-base 2xl:text-xl ">
              <Link href="/features">Features</Link>
              <Link href="/about">About us</Link>
              <Button variant="filled" className="text-red-500">Go to marketplace</Button>

            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            <div className="hidden xs:flex items-center gap-10">
              <div className="hidden lg:flex items-center gap-2">
                <p>moon</p>
                <p>sun</p>
              </div>
              <div>
                <Button variant="filled" className="text-red-500">Go to marketplace</Button>
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu}>
                {isMenuOpen ? <XMark className="w-6 h-6 text-new-black" /> : <Hamburguer className="w-6 h-6 text-new-black" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full  bg-white overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!isMenuOpen ? "h-0" : "h-full"
          }`}
      >
        <div className="px-8 pt-8 pb-24 text-new-black bg-grey-light">
          <div className="flex flex-col gap-8 tracking-wider">
            <Link href="#" className="">Home</Link>
            <Link href="#">Features</Link>
            <Link href="#">About us</Link>
            <Button variant="filled" className="text-red-500">Go to marketplace</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
