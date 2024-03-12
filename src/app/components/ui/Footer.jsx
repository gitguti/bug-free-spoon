"use client";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const links = [
        {
            category: "Company",
            items: [
                { name: "About", url: "/about" },
                { name: "Partners", url: "/" },
                { name: "Legal", url: "/" },
            ],
        },
        {
            category: "Marketplace",
            items: [
                { name: "How it works", url: "/#hiw" },
                { name: "Open an Account", url: "/" },
                { name: "Terms of use", url: "/" },
                { name: "Privacy Policy", url: "/" },
            ],
        },
        {
            category: "Support",
            items: [
                { name: "Contact Us", url: "/" },
                { name: "Help Center", url: "/" },
            ],
        },
    ];

    return (
        <footer className="bg-white font-sans">
            <div className="pt-12 4xl:pt-24 mx-auto">
                <div className="relative grid gap-x-0 gap-y-4 md:gap-12 grid-flow-row auto-rows-max  md:auto-rows-min	 lg:grid-cols-4 px-4 md:px-16">
                    <div className="sm:col-start-1 sm:row-start-1 flex flex-col items-center md:items-start">
                        <Link href="/">
                            <div className="relative block">
                                <Image
                                    src="/logo.png"
                                    alt="Logo de la compañía"
                                    width={160} height={40}
                                    priority={false}
                                />
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-around sm:col-span-2 md:col-start-2 sm:row-start-2 md:row-start-1'>
                        {links.map((section) => (
                            <div key={section.category} className='text-center md:text-left'>
                                <p className="font-semibold text-new-black text-sm lg:text-base 2xl:text-2xl">{section.category}</p>
                                <div className="flex flex-col items-center md:items-start mt-2 space-y-2 text-sm md:text-base lg:text-xlg 2xl:text-xl gap-2">
                                    {section.items.map((item) => (
                                        <Link key={item.name} href={item.url} className="text-new-black transition-colors duration-300  hover:underline hover:cursor-pointer text-center">{item.name}</Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex sm:items-center md:items-end pb-3 sm:mb-4 mt-4 md:mb-0 flex-col md:flex-row gap-8 text-sm md:text-base 2xl:text-xl sm:col-start-1 sm:col-span-3 sm:row-start-3 md:row-start-2 md:col-span-4 place-items-center lg:pb-4 relative  justify-end md:justify-center'>
                        <div>
                            <p className="font-sans text-start md:text-base 2xl:text-xl ">@2024 Betsell.com</p>
                        </div>
                    </div>
                    <div className="sm:block absolute w-full h-px bg-gray-200 bottom-12 lg:bottom-16 z-2"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
