import React from "react";
import { IconSpotInsight } from "../assets";

const Nav = () => (
  <nav className="shadow-[0_0_10px_rgba(0,0,0,0.3)] flex justify-between items-center flex-row md:flex-col md:min-h-screen fixed md:top-0 md:left-0 md:w-[100px] bg-[#040306] text-center z-[99] top-auto bottom-0 right-0 w-full min-h-[70px] h-[70px]">
    <div className="hidden md:block mt-[30px] transition-all duration-250 ease-[cubic-bezier(0.3,0,0.4,1)]">
        <IconSpotInsight />
    </div>
  </nav>
);

export default Nav;
