import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full h-[700px] bg-black flex items-center justify-center below-1450:h-[1200px] below-700:h-auto below-700:pt-10 below-700:pb-10'>
    {/* main container */}
    <div className='w-[1400px] flex items-center justify-center gap-24 below-1450:flex-col below-700:gap-16'>
    {/* left section */}
    <div>
    <Image src="/profile.png" alt="profile pic" width={1000} height={1000} className='rounded-full w-[600px] h-[600px] below-700:w-[300px] below-700:h-[300px]'></Image>
    </div>
    {/* right section */}
    <div className='flex flex-col gap-4 below-1450:items-center below-1450:justify-center'>
    <h2 className='font-poppins font-bold text-white text-[40px] flex gap-3 tracking-[2%]'>About<span className='text-orange-500'>Me</span></h2>
    <h2 className='font-poppins font-bold text-white text-[40px] flex gap-3 tracking-[2%] below-700:flex-col below-700:gap-0'>Frontend<span className='text-orange-500'>Developer</span></h2>
    <p className='text-white w-[650px] text-[20px] font-josefin font-medium below-1450:text-center below-700:w-full below-700:px-5'>Hi there! Im a passionate Frontend Developer dedicated to crafting seamless and visually appealing user experiences. With expertise in modern web technologies like HTML, CSS, JavaScript, and frameworks such as React and Next.js, I bring ideas to life with precision and creativity. My focus is on creating responsive, user-friendly designs that leave a lasting impact. Lets build something amazing together!</p>
    </div>
    </div>
    </div>
  )
}

export default About
