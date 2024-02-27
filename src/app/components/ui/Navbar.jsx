"use client"
import Link from 'next/link';
import { useState } from 'react';
import Button from "./Button.jsx";
import Image from 'next/image';
import Hamburguer from '../icons/Hamburguer.jsx';
import XMark from '../icons/XMark.jsx';
import { useLoading } from '../../context/loadingContext';


const Navbar = (animate) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 opacity-100">
      <div className="px-2 sm:px-8 w-11/12 mx-auto 4xl:w-10/12">
        <div className="flex mx-auto justify-between w-full">
          {/* Primary menu and logo */}
          <div className="flex items-center justify-between my-6 md:my-4 w-full animate-slideDown">
            {/* logo */}
            <div>
              <Link href="/">
              <div className="hidden lg:block relative md:w-2/3 3xl:w-4/5  4xl:w-full">
  <Image
    src="/logo.png"
    alt="Logo de la compañía"
    width={224} height={60}
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
            <div className="hidden lg:flex gap-8 items-center transition-opacity duration-300 md:text-md xl:text-base 2xl:text-lg 3xl:text-[1.3rem] 4xl:text-2xl">
              <Link href="/features">Overview</Link>
              <Link href="/about">About</Link>
              <Button variant="filled" className="text-red-500">Go to marketplace</Button>

            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} aria-label='open menu'>
                {isMenuOpen ? <XMark className="w-6 h-6 text-new-black" /> : <Hamburguer className="w-6 h-6 text-new-black" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full  bg-white overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 inset-y-[77.7px] ${!isMenuOpen ? "h-0" : " h-screen"
          }`}
      >
        <div className="px-8 pt-8 pb-24 text-new-black bg-grey-light">
          <div className="flex flex-col gap-8 tracking-wider">
          <Link href="/" onClick={toggleMenu}>
  Home
</Link>
<Link href="/features" onClick={toggleMenu}>
  Overview
</Link>
<Link href="/about" onClick={toggleMenu}>
  About
</Link>
<Button variant="filled" className="text-red-500" onClick={toggleMenu}>
  Go to marketplace
</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
