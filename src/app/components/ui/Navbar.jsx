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
        <div className="max-w-7xl mx-auto px-8 xl:px-0">
          <div className="flex mx-auto justify-between w-full">
            {/* Primary menu and logo */}
            <div className="flex items-center justify-between my-12 w-full">
            {/* logo */}
            <div>
              <Link href="/">
                {/* Logo visible solo en desktop */}
                <div className="hidden lg:block">
                  <Image 
                    src="/logoDesktop.png" 
                    alt="Logo de la compañía" 
                    width={101} 
                    height={39} 
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
              <div className="hidden lg:flex gap-8 items-center">
                <a href="#">Features</a>
                <a href="#">About us</a>
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
        {isMenuOpen ? <XMark className="w-6 h-6" /> : <Hamburguer className="w-6 h-6" />}
      </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !isMenuOpen ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
            <a href="#" className="">
                  Home
                </a>
                <a href="#">Features</a>
                <a href="#">About us</a>
                <Button variant="filled" className="text-red-500">Go to marketplace</Button>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
