import Image from 'next/image';

const Section2 = () => {
    return (
        <>
            <div className='bg-[#F4F4FF] pt-16 md:pt-20 lg:pt-24 3xl:pt-36  text-center flex flex-col justify-center mx-auto space-between gap-8'>
                <div className='font-tomato mx-auto px-8 md:px-0 2xl:px-8 text-base md:text-xl lg:text-2xl xl:text-[1.8rem] xl:leading-[2.5rem] 3xl:text-3xl 4xl:text-4xl font-light text-new-black md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-lg 3xl:max-w-screen-lg 4xl:max-w-screen-xl'> <p>For these and many other reasons, we have created<span className='text-gradient'> BetSell</span>, a platform that allows gamblers to sell their bets to other players in <br></br> a secure and privacy preserving marketplace</p>
                </div>
                <div className='md:max-w-xl lg:max-w-5xl 3xl:max-w-4xl 4xl:max-w-screen-2xl mx-auto'>     
                <Image priority={false}  src="/about.png" width={1600} height={300} />
                </div>
            </div>
        </>
    )
}

export default Section2