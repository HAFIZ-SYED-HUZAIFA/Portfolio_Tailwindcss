import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 min-h-[730px] w-full py-10">
      {/* main container */}
      <div className="flex flex-col gap-6 w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] px-4">
        <h2 className="font-poppins font-bold text-black text-[32px] sm:text-[40px] flex gap-3 tracking-[2%] justify-center items-center">
          Contact<span className="text-orange-500">Me</span>
        </h2>
        
        {/* Input Fields */}
        <input
          type="text"
          className="w-full h-[40px] sm:h-[50px] rounded-md bg-slate-200 focus:outline-none border-[1px] border-black text-black font-josefin font-medium text-[16px] px-4"
          placeholder="Full Name"
        />
        <input
          type="text"
          className="w-full h-[40px] sm:h-[50px] rounded-md bg-slate-200 focus:outline-none border-[1px] border-black text-black font-josefin font-medium text-[16px] px-4"
          placeholder="Email"
        />
        <input
          type="text"
          className="w-full h-[40px] sm:h-[50px] rounded-md bg-slate-200 focus:outline-none border-[1px] border-black text-black font-josefin font-medium text-[16px] px-4"
          placeholder="Phone Number"
        />
        <input
          type="text"
          className="w-full h-[40px] sm:h-[50px] rounded-md bg-slate-200 focus:outline-none border-[1px] border-black text-black font-josefin font-medium text-[16px] px-4"
          placeholder="Subject"
        />
        <textarea
          className="w-full h-[100px] sm:h-[150px] rounded-md bg-slate-200 focus:outline-none border-[1px] border-black text-black font-josefin font-medium text-[16px] px-4 py-2"
          placeholder="Your Message"
        ></textarea>
        
        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button className="w-[200px] h-[60px] bg-black text-white flex items-center font-lato text-[18px] sm:text-[20px] capitalize justify-center rounded-[5px] hover:bg-red-600 hover:text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

