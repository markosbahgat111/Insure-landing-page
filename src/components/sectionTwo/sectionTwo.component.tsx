import Image from 'next/image';
import React from 'react'
import pattern from 'assets/images/bg-pattern-how-we-work-desktop.svg';

interface Props { }

const SectionTwo:React.FC<Props> = () => {
  return (
    <div className='sm:w-9/12 w-11/12 relative m-auto h-[30vh]  flex lg:flex-row flex-col items-center overflow-hidden justify-around lg:justify-between bg-[#2d2640] mb-40 sm:px-20'>
        <h1 className='sm:text-5xl text-3xl font-DM text-white sm:text-left text-center  z-10'>Find out more<br/>about how we work</h1>
        <button className='w-[150px] h-10 bg-white relative z-10 tracking-wide font-bold font-Karla uppercase'>How We Work</button>
        <div className=' absolute w-[470px] h-[30vh]  md:right-0 right-[-200px] lg:right-0 top-0 '><Image src={pattern} alt="pattern" layout='fill' className='object-contain'/></div>
    </div>
  )
}

export default SectionTwo;
