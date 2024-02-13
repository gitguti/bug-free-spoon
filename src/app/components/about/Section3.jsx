import Image from 'next/image';

const Section3 = () => {
    return (
        <>
            <div className='bg-dirty-grey py-8 md:py-20 lg:py-24 3xl:pt-36 3xl:pb-24 4xl:pt-48 4xl:pb:24 mx-auto px-px sm:px-8  md:px-0 text-center mx-auto mx-auto'>
             <div className='font-tomato text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-semibold leading-normal my-4 text-gradient'>
             <h2>About Betsell</h2>
             </div>
            <div className="px-4 py-2 md:px-16 xl:px-48 xl:py-4 3xl:px-72 4xl:px-96 overflow-hidden rounded-xl">

                <div className='mx-auto bg-white rounded-3xl'>      <Image src="/aboutPlaceholder.png" width={600} height={300} className='w-3/4 sm:w-2/5 mx-auto pt-36' /></div>
                </div>
            </div>
        </>
    )
}

export default Section3