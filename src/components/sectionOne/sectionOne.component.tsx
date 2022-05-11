import Image from 'next/image'
import React from 'react'
import user from 'assets/images/icon-people-first.svg';
import dollar from 'assets/images/icon-affordable-prices.svg';
import electric from 'assets/images/icon-snappy-process.svg';

interface Props {}

const SectionOne: React.FC<Props> = () => {
    const h1_styles = 'text-3xl text-[#2b272f] font-DM my-8',
        p_styles = 'text-gray-500 tracking-wide';
  return (
    <div className='w-11/12 min-h-[60vh] my-[15vh] sm:px-[15%] px-0 sm:w-full mx-auto sm:mx-0'>
        <section>
            <hr className='sm:w-2/12 w-1/2 h-[2px] bg-gray-300 m-auto sm:m-0'/>
            <h1 className='text-5xl font-DM mt-10 text-[#2b272f] text-center sm:text-left'>We&apos;re different</h1>
        </section>
        <section className='grid grid-cols-sectionOne gap-10 mt-32 text-center sm:text-left'>
            <div>
                <Image src={electric} alt="electric" width={70} height={70} />
                <h1 className={h1_styles}>Snappy Process</h1>
                <p className={p_styles}>Our application process can be completed in minutes, not hours. dont get stuck filling in tedious forms.</p>
            </div>
            <div>
                <Image src={dollar} alt="dollar" width={70} height={70} />
                <h1 className={h1_styles}>Affordable Prices</h1>
                <p className={p_styles}>We dont ant you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
            </div>
            <div>
                <Image src={user} alt="user" width={70} height={70} />
                <h1 className={h1_styles}>People First</h1>
                <p className={p_styles}>Our plans arent full of conditions and clauses to prevent payouts. We make sure youre covered when you need it.</p>
            </div>
        </section>
    </div>
  )
}

export default SectionOne
