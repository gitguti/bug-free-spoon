"use client"
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-white font-sans">
            <div className="px-4 md:px-16 py-12 mx-auto">
                <div className="relative grid gap-8 grid-flow-col grid-cols-1 grid-rows-3  sm:grid-cols-3 sm:grid-rows-3 lg:grid-cols-4">
                    <div className="sm:col-start-1 sm:row-start-1 flex flex-col items-center md:items-start">
                        <Link href="/">
                            {/* Logo visible solo en desktop */}
                            <Image
                                src="/logoDesktop.png"
                                alt="Logo de la compañía"
                                width={151}
                                height={59}
                            />
                        </Link>
                        <p className="text-new-black text-center md:text-left text-xs md:text-sm mt-4 mx-24 md:mx-0">Transform your bets into unique digital assets and trade on the first and only bet marketplace</p>
                    </div>
                    <div className='flex justify-around sm:col-span-2 md:col-start-2 sm:row-start-1'>
                        <div className='text-center md:text-left'>
                            <p className="font-semibold text-new-black text-sm md:text-lg ">My Account</p>

                            <div className="flex flex-col items-center md:items-start mt-2 space-y-2 text-sm md:text-base">
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Profile</Link>
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">My Favourites</Link>
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Settings</Link>
                            </div>
                        </div>

                        <div className='text-center md:text-left'>
                            <p className="font-semibold text-new-black text-sm md:text-lg ">Company</p>

                            <div className="flex flex-col items-center md:items-start mt-2 space-y-2 text-sm md:text-base">
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">About</Link>
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Features</Link>
                            </div>
                        </div>
                        <div className='text-center md:text-left'>
                            <p className="font-semibold text-new-black text-sm md:text-lg ">Support</p>

                            <div className="flex flex-col items-center md:items-start mt-2 space-y-2 text-sm md:text-base">
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Email Us</Link>
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Help Centre</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex sm:items-end md:items-start flex-col md:flex-row gap-8 text-sm md:text-base sm:col-start-1 sm:col-span-3 sm:row-start-3'>
                        <div className='flex flex-row  md:order-last gap-8 '>
                             <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Privacy policy</Link>
                             <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Terms of Use</Link>
                        </div>
                        <div>
                            <p className="font-sans text-start">© 2024 Betsell.io</p>
                        </div>
                    </div>
                    <div className="">
                    <Image 
                    src="/footerImage.png" 
                    alt="Logo de la compañía" 
  className="w-3/5 sm:w-1/3 md:w-2/5   absolute bottom-0 right-0"
                    width={800} // Ajusta estas propiedades para el logo móvil
                    height={500} 
                  />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;