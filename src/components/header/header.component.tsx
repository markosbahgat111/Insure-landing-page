import Image from 'next/image';
import React from 'react';
import family from 'assets/images/image-intro-desktop.jpg';
import rightPattern from 'assets/images/bg-pattern-intro-right-desktop.svg';
import leftPattern from 'assets/images/bg-pattern-intro-left-desktop.svg';

interface Props {};

const Header:React.FC<Props> = () => {
	return (
		<div className='w-full relative lg:min-h-[60vh] min-h-[750px] sm:min-h-[100vh] bg-[#2d2640] md:px-40 flex lg:flex-row flex-col-reverse items-center overflow-x-hidden lg:overflow-x-visible'>
			<div className='lg:w-[800px] w-11/12 text-center lg:text-left  relative bottom-10 lg:static'>
				<hr className='sm:w-1/3 w-3/4 mb-10 lg:mx-0 mx-auto'/>
				<h1 className='lg:text-[55px] md:text-5xl text-4xl text-white font-DM tracking-wider'>Humanizing<br />your insurance.</h1>
				<p className='text-gray-300 my-8'>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that&apos;s right for you. Ensure you and your loved ones are protected.</p>
				<button className='hover:text-[#2d2640] uppercase text-white border-[1px] hover:bg-white font-bold px-9 py-3 tracking-wider'>View  Plans</button>
			</div>
			<div className='w-full'>
				<div className='absolute lg:w-[40%] md:w-[400px] max-h-[350px] sm:max-h-[100%] w-[100vw] lg:h-[60vh] h-[50vh] top-[0px] lg:right-0 right-[50%] translate-x-[50%] lg:top-32 lg:translate-x-0 sm:z-0 z-10'><Image src={family} alt="family" layout='fill' className='sm:object-contain object-cover' priority/></div>
				<div  className='absolute md:w-[334px] w-[20%] md:h-[50vh] h-[20vh] md:top-0 top-[90vh]  right-0'>
					<Image src={rightPattern} alt="right pattern" layout='fill' className='object-contain md:object-cover' priority/>
				</div>
				<div  className='absolute md:w-[140px] w-[20%] h-[40vh] md:top-[45vh] top-[40vh] left-0'>
					<Image src={leftPattern} alt="left pattern" layout='fill' className='object-contain md:object-cover' priority/>
				</div>
			</div>
		</div>
	);
};

export default Header;
