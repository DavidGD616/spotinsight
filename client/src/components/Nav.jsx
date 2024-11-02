import React from "react";
import { Link } from "react-router-dom";
import { IconSpotInsight, MicrophoneIcon, MusicIcon, TimeIcon, UserIcon } from "../assets";

const Nav = () => (
  <nav className="shadow-2xl flex justify-between items-center flex-row md:flex-col md:min-h-screen fixed md:top-0 md:left-0 md:w-[100px] bg-[#040306] text-center z-[99] top-auto bottom-0 right-0 w-full min-h-[70px] h-[70px]">
    <div className="hidden md:block mt-[30px] transition-all duration-250 ease-[cubic-bezier(0.3,0,0.4,1)]">
        <IconSpotInsight />
    </div>
    <ul className="flex flex-row items-end justify-center md:flex-col w-full">
        <li className="w-full text-[#9B9B9B] text-[11px] h-full grow basis-full">
            <Link
            className="w-full h-full flex justify-center items-center flex-col p-0 border-l-0 border-t-[3px] border-transparent
            md:block py-[15px] px-0 md:border-l-[5px] md:border-transparent hover:text-white focus:text-white active:text-white hover:bg-[#181818]
            focus:bg-[#181818] active:bg-[#181818] hover:border-t-[#1ed760] focus:border-t-[#1ed760] active:border-t-[#1ed760] md:hover:border-l-[#1ed760]
            md:focus:border-l-[#1ed760] md:active:border-l-[#1ed760] md:hover:border-t-[#181818] md:focus:border-t-[#181818] md:active:border-t-[#181818]
            "
            >
            <div className="mb-[7px] flex items-center justify-center">
              <UserIcon />
            </div>
              <div>Profile</div>
            </Link>
        </li>
        <li className="w-full text-[#9B9B9B] text-[11px] h-full grow basis-full">
            <Link
            className="w-full h-full flex justify-center items-center flex-col p-0 border-l-0 border-t-[3px] border-transparent
            md:block py-[15px] px-0 md:border-l-[5px] md:border-transparent hover:text-white focus:text-white active:text-white hover:bg-[#181818]
            focus:bg-[#181818] active:bg-[#181818] hover:border-t-[#1ed760] focus:border-t-[#1ed760] active:border-t-[#1ed760] md:hover:border-l-[#1ed760]
            md:focus:border-l-[#1ed760] md:active:border-l-[#1ed760] md:hover:border-t-[#181818] md:focus:border-t-[#181818] md:active:border-t-[#181818]
            "
            >
            <div className="mb-[7px] flex items-center justify-center">
              <MicrophoneIcon />
            </div>
              <div>Top Artists</div>
            </Link>
        </li>
        <li className="w-full text-[#9B9B9B] text-[11px] h-full grow basis-full">
            <Link
            className="w-full h-full flex justify-center items-center flex-col p-0 border-l-0 border-t-[3px] border-transparent
            md:block py-[15px] px-0 md:border-l-[5px] md:border-transparent hover:text-white focus:text-white active:text-white hover:bg-[#181818]
            focus:bg-[#181818] active:bg-[#181818] hover:border-t-[#1ed760] focus:border-t-[#1ed760] active:border-t-[#1ed760] md:hover:border-l-[#1ed760]
            md:focus:border-l-[#1ed760] md:active:border-l-[#1ed760] md:hover:border-t-[#181818] md:focus:border-t-[#181818] md:active:border-t-[#181818]
            "
            >
            <div className="mb-[7px] flex items-center justify-center">
              <MusicIcon />
            </div>
              <div>Top Tracks</div>
            </Link>
        </li>
        <li className="w-full text-[#9B9B9B] text-[11px] h-full grow basis-full">
            <Link
            className="w-full h-full flex justify-center items-center flex-col p-0 border-l-0 border-t-[3px] border-transparent
            md:block py-[15px] px-0 md:border-l-[5px] md:border-transparent hover:text-white focus:text-white active:text-white hover:bg-[#181818]
            focus:bg-[#181818] active:bg-[#181818] hover:border-t-[#1ed760] focus:border-t-[#1ed760] active:border-t-[#1ed760] md:hover:border-l-[#1ed760]
            md:focus:border-l-[#1ed760] md:active:border-l-[#1ed760] md:hover:border-t-[#181818] md:focus:border-t-[#181818] md:active:border-t-[#181818]
            "
            >
            <div className="mb-[7px] flex items-center justify-center">
              <TimeIcon />
            </div>
              <div>Recent</div>
            </Link>
        </li>
    </ul>
  </nav>
);

export default Nav;
