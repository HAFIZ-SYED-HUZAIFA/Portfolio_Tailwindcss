import React from 'react';
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { PiCodeSimpleBold } from "react-icons/pi";
import { RiHtml5Line } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";




const Services = () => {
  const services = [
    {
      title: "HTML",
      paragraph: "Building the foundation of websites with clean and semantic markup for better structure and SEO.",
      icon: <RiHtml5Line />
    },
    {
      title: "CSS",
      paragraph: "Styling websites with precision to create visually appealing, responsive, and modern designs.",
      icon: <IoLogoCss3 />
    },
    {
      title: "JavaScript",
      paragraph: "Bringing interactivity to life with dynamic and user-friendly features powered by JavaScript.",
      icon: <IoLogoJavascript />
    },
    {
      title: "TypeScript",
      paragraph: "Enhancing JavaScript with TypeScript for robust, scalable, and error-free applications.",
      icon: <SiTypescript />
    },
    {
      title: "Next.js",
      paragraph: "Developing fast, server-rendered, and modern web applications using the power of Next.js.",
      icon: <RiNextjsLine />
    },
    {
      title: "UX/UI Designer",
      paragraph: "Designing intuitive and user-centric interfaces that offer seamless and engaging experiences.",
      icon: <PiCodeSimpleBold />
    },
  ];

  return (
    <div className="w-full bg-gray-50 h-screen flex items-center justify-center flex-col gap-7 below-1000:h-auto below-1000:gap-10 below-1000:mt-10 below-1000:mb-5">
       <h2 className="font-poppins font-bold text-black text-[32px] sm:text-[40px] flex gap-3 tracking-[2%] justify-center items-center">
          Our<span className="text-orange-500">Services</span>
        </h2>
        
      {/* Main Container */}
      <div className="grid md:grid-cols-3 gap-6 below-1000:grid-cols-2 below-700:grid-cols-1">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-orange-600 hover:bg-orange-400 shadow-sm shadow-black w-[300px] h-[270px] text-white flex items-center justify-center rounded-[5px]"
          >
            <div className="flex flex-col items-center justify-center w-[280px] h-[220px]">
              <h2 className="font-bold font-lato text-[35px]">{item.title}</h2>
              <span className="text-4xl mt-2 mb-4 bg-black rounded-full p-3">{item.icon}</span>
              <p className="text-center px-4 font-poppins text-[15px]">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

