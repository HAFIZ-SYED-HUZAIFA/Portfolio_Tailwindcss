import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full bg-gray-50 h-auto flex items-center justify-center py-10">
      {/* main container */}
      <div className="max-w-[1400px] flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
        {/* left section */}
        <div className="flex gap-4 flex-col text-center lg:text-left">
          <div>
            <p className="text-[40px] lg:text-[50px] font-semibold font-josefin">Hi</p>
            <p className="text-[40px] lg:text-[50px] flex justify-center lg:justify-start gap-3 font-bold font-josefin">
              Im<span className="text-orange-500">Huzaifa</span>
            </p>
            <h2 className="text-[40px] lg:text-[50px] font-bold font-josefin">
              A Frontend Developer
            </h2>
          </div>
          <p className="w-full px-5 lg:w-[720px] text-[18px] lg:text-[25px] font-normal font-bebas text-black">
            I specialize in crafting responsive and user-focused web designs using modern
            technologies like HTML, CSS, JavaScript, React, and Next.js. My goal is to deliver
            seamless digital experiences that combine creativity with functionality.
          </p>
          <div className="flex gap-5 below-1450:items-center below-1450:justify-center">
            <button className="w-[120px] h-[40px] bg-black text-white flex items-center font-lato text-[15px] justify-center rounded-[5px] hover:bg-red-600">
              Hire Me
            </button>
            <button className="w-[120px] h-[40px] bg-orange-600 text-white flex font-lato items-center text-[15px] justify-center rounded-[5px] hover:bg-green-600">
              Services
            </button>
          </div>
        </div>
        {/* right section */}
        <div className="flex justify-center">
          <Image
            src="/profile.png"
            alt="profile pic"
            width={600}
            height={600}
            className="rounded-full shadow-lg shadow-black w-[600px] h-[600px] below-700:w-[300px] below-700:h-[300px]"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;


