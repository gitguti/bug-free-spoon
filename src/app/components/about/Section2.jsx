import Image from 'next/image';

const Section2 = () => {
    return (
        <>
            <div className='bg-[#F4F4FF] pt-16 md:pt-20 lg:pt-24 3xl:pt-36 3xl:pt-64 text-center flex flex-col justify-center mx-auto space-between gap-8'>
                <div className='font-tomato mx-auto px-8 text-base md:text-xl lg:text-2xl xl:text-[2rem] xl:leading-[2.5rem] 3xl:text-3xl 4xl:text-4xl font-light text-new-black md:max-w-screen-md 2xl:max-w-screen-lg'> <p>For these and many other reasons, we have created<span className='text-gradient'> BetSell</span>, a platform that allows gamblers to sell their bets to other players in a secure and privacy preserving marketplace</p>
                </div>
                <div className='md:max-w-xl lg:max-w-5xl 4xl:max-w-screen-2xl mx-auto'>      <Image priority={false}  src="/about.png" width={1600} height={300} /></div>
            </div>
        </>
    )
}

export default Section2