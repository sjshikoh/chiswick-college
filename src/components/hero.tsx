import React from 'react';
import Image from 'next/image';
import college from '../public/college.jpg'

const Hero = () => {
  return (
    
    <div className='h-[120vh] bg-[rgba(220,152,71,0.8)] mx-auto justify-between lg:items-center
    px-4 sm:px-6 md:px-8 xl:px-4'>
      <h1 className='flex items-center justify-center text-7xl font-bold text-[80px] text-[#52d493] text-start pt-[80px]'>BEST VALUE, HIGH<br/>
        QUALITY,</h1>
      <span  className='flex items-center justify-center text-7xl font-bold text-[80px] text-[#FFFFFF] text-end'>BRITISH<br/>
           EDUCATION IN DUBAI</span>
      <p className='text-[#FFFFFF] text-center mt-10 text-[20px]'>
        The English College is a non-selective British Curriculum school in Dubai that celebrates diversity,  <br/>
        with students from over 86 countries, providing quality education from foundation stage to Year 13.
      </p>
    <div className='flex items-center justify-center mt-12 mb-12'>
      <Image src={"/college.jpg"} alt="college" width={514} height={513}/>
    </div>
    </div>
    
  )
}

export default Hero
