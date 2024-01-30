"use client"
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-white font-sans">
            <div className="px-4 md:px-16 pt-12 mx-auto">
                <div className="relative grid gap-8 grid-flow-col grid-cols-1 grid-rows-3  sm:grid-cols-3 md:grid-rows-2 lg:grid-cols-4">
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
                        <p className="text-new-black text-center md:text-left text-xs md:text-sm 2xl:text-xl mt-4 mx-8 md:mx-0">Transform your bets into unique digital assets and trade on the first and only bet marketplace</p>
                    </div>
                    <div className='flex justify-around sm:col-span-2 md:col-start-2 sm:row-start-1'>
                        <div className='text-center md:text-left'>
                            <p className="font-semibold text-new-black text-sm lg:text-base 2xl:text-2xl">My Account</p>

                            <div className="flex flex-col items-center md:items-start mt-2 space-y-2 text-sm md:text-base lg:text-xlg 2xl:text-xl">
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Profile</Link>
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">My Favourites</Link>
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Settings</Link>
                            </div>
                        </div>

                        <div className='text-center md:text-left'>
                            <p className="font-semibold text-new-black text-sm lg:text-base 2xl:text-2xl">Company</p>

                            <div className="flex flex-col items-center md:items-start mt-2 space-y-2 text-sm md:text-base lg:text-xlg 2xl:text-xl">
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">About</Link>
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Features</Link>
                            </div>
                        </div>
                        <div className='text-center md:text-left'>
                            <p className="font-semibold text-new-black text-sm lg:text-base 2xl:text-2xl">Support</p>

                            <div className="flex flex-col items-center md:items-start mt-2 space-y-2 text-sm md:text-base lg:text-xlg 2xl:text-xl">
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Email Us</Link>
                                <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Help Centre</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex sm:items-end md:items-start flex-col md:flex-row gap-8 text-sm md:text-base 2xl:text-xl sm:col-start-1 sm:col-span-3 sm:row-start-3 md:row-start-2 place-items-start md:place-items-center'>
                        <div className='flex flex-row  md:order-last gap-4 '>
                            <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Privacy policy</Link>
                            <Link href="/" className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">Terms of Use</Link>
                        </div>
                        <div>
                            <p className="font-sans text-start md:text-base 2xl:text-xl ">© 2024 Betsell.io</p>
                        </div>
                    </div>
                    <div className="">
                        <Image
                            src="/footerImage.png"
                            alt="Logo de la compañía"
                            className="w-1/2 md:w-1/4 absolute bottom-0 right-0"
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