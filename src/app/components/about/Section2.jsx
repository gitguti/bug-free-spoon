import Image from 'next/image';

const Section2 = () => {
    return (
        <>
            <div className='bg-lila pt-48 text-center flex flex-col justify-center mx-auto space-between gap-8'>
      <div className='w-1/3 mx-auto text-2xl font-normal text-new-black'> <p>For these and many other reasons, whe have created Betsell, a platform that allows gamblers to sell their bets to other players in a secure and privacy preserving marketplace</p>
</div>
      <div className='lg:max-w-mxl mx-auto'>      <Image src="/about.png" width={800} height={300}/></div>
      </div>
        </>
    )
}

export default Section2