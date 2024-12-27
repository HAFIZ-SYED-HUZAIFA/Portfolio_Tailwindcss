import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-black py-5 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-[650px]">
        {/* Left Section */}
        <span className="text-[18px] lg:text-[25px] font-lato text-[#9DA0AE] font-semibold text-center">
          © Syed Huzaifa - All Rights Reserved
        </span>
        {/* Right Section */}
        <div className="flex gap-4">
          <span className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
            <TiSocialFacebook className="text-purple-950 w-[25px] h-[25px]" />
          </span>
          <span className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
            <IoLogoInstagram className="text-purple-950 w-[25px] h-[25px]" />
          </span>
          <span className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
            <FaTwitter className="text-purple-950 w-[25px] h-[25px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

