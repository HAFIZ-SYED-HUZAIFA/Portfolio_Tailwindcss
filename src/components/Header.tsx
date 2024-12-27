import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full bg-slate-900 h-[100px] flex items-center justify-center">
      {/* main container */}
      <div className="w-[1400px] flex items-center justify-between below-1450:w-[900px] below-1000:w-full below-1000:mx-5">
        {/* left section */}
        <div className="text-white">
          <span className="text-orange-500 font-bebas font-bold flex gap-1 text-[50px] below-700:text-[25px]">
            Syed<span className="text-white">Huzaifa</span>
          </span>
        </div>

        {/* right section (visible only above 1450px) */}
        <ul className="hidden lg:flex text-white gap-7 font-josefin text-[25px] font-semibold">
          <li className="hover:text-orange-300">Home</li>
          <li className="hover:text-orange-300">About</li>
          <li className="hover:text-orange-300">Contact</li>
          <Link href={"/services"}>
            <li className="hover:text-orange-300">Services</li>
          </Link>
        </ul>

        {/* Sheet (visible only below 1450px) */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="text-white cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <ul className="text-black flex flex-col gap-7 font-josefin text-[25px] font-semibold">
                <li className="hover:text-orange-300">Home</li>
                <li className="hover:text-orange-300">About</li>
                <li className="hover:text-orange-300">Contact</li>                
                <li className="hover:text-orange-300">Services</li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
