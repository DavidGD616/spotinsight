import React from "react";
import { NavLink } from "react-router-dom";
import { GithubIcon, IconSpotInsight, MicrophoneIcon, MusicIcon, PlaylistIcon, TimeIcon, UserIcon } from "../assets";

const isActive = ({ isCurrent }) => (isCurrent ? { className: 'active' } : null);

const Nav = () => (
  <nav className="shadow-2xl flex justify-between items-center flex-row md:flex-col md:min-h-screen fixed md:top-0 md:left-0 md:w-[100px] bg-[#040306] text-center z-[99] top-auto bottom-0 right-0 w-full min-h-[70px] h-[70px]">
    <div className="hidden md:block mt-[30px] transition-all duration-250 ease-[cubic-bezier(0.3,0,0.4,1)]">
        <IconSpotInsight />
    </div>
    <ul className="flex flex-row items-end justify-center md:flex-col w-full">
        <li className="w-full text-[#9B9B9B] text-[11px] h-full grow basis-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-full h-full flex justify-center items-center flex-col p-0 border-l-0 border-t-[3px] border-transparent
            md:block py-[15px] px-0 md:border-l-[5px] md:border-transparent 
            hover:text-white focus:text-white current:text-white hover:bg-[#181818]
            focus:bg-[#181818] current:bg-[#181818] hover:border-t-[#1ed760] focus:border-t-[#1ed760] current:border-t-[#1ed760] 
            md:hover:border-l-[#1ed760] md:focus:border-l-[#1ed760] md:current:border-l-[#1ed760] md:hover:border-t-[#181818] 
            md:focus:border-t-[#181818] md:current:border-t-[#181818] 
            current:text-white current:bg-[#181818] current:border-t-[#1ed760] current:md:border-l-[#1ed760]
            ${isActive ? 'active' : 'text-[#9B9B9B]'}`}
        >
            <div className="mb-[7px] flex items-center justify-center">
              <UserIcon />
            </div>
              <div>Profile</div>
            </NavLink>
        </li>
        <li className="w-full text-[#9B9B9B] text-[11px] h-full grow basis-full">
            <NavLink
            to='artists'
            className={({ isActive }) =>
              `w-full h-full flex justify-center items-center flex-col p-0 border-l-0 border-t-[3px] border-transparent
              md:block py-[15px] px-0 md:border-l-[5px] md:border-transparent 
              hover:text-white focus:text-white current:text-white hover:bg-[#181818]
              focus:bg-[#181818] current:bg-[#181818] hover:border-t-[#1ed760] focus:border-t-[#1ed760] current:border-t-[#1ed760] 
              md:hover:border-l-[#1ed760] md:focus:border-l-[#1ed760] md:current:border-l-[#1ed760] md:hover:border-t-[#181818] 
              md:focus:border-t-[#181818] md:current:border-t-[#181818] 
              current:text-white current:bg-[#181818] current:border-t-[#1ed760] current:md:border-l-[#1ed760]
              ${isActive ? 'active' : 'text-[#9B9B9B]'}`}
          >
            <div className="mb-[7px] flex items-center justify-center">
              <MicrophoneIcon />
            </div>
              <div>Top Artists</div>
            </NavLink>
        </li>
        <li className="w-full text-[#9B9B9B] text-[11px] h-full grow basis-full">
            <NavLink
            to='tracks'
            className={({ isActive }) =>
              `w-full h-full flex justify-center items-center flex-col p-0 border-l-0 border-t-[3px] border-transparent
              md:block py-[15px] px-0 md:border-l-[5px] md:border-transparent 
              hover:text-white focus:text-white current:text-white hover:bg-[#181818]
              focus:bg-[#181818] current:bg-[#181818] hover:border-t-[#1ed760] focus:border-t-[#1ed760] current:border-t-[#1ed760] 
              md:hover:border-l-[#1ed760] md:focus:border-l-[#1ed760] md:current:border-l-[#1ed760] md:hover:border-t-[#181818] 
              md:focus:border-t-[#181818] md:current:border-t-[#181818] 
              current:text-white current:bg-[#181818] current:border-t-[#1ed760] current:md:border-l-[#1ed760]
              ${isActive ? 'active' : 'text-[#9B9B9B]'}`}
            >
            <div className="mb-[7px] flex items-center justify-center">
              <MusicIcon />
            </div>
              <div>Top Tracks</div>
            </NavLink>
        </li>
        <li className="w-full text-[#9B9B9B] text-[11px] h-full grow basis-full">
            <NavLink
            to='recent'
            className={({ isActive }) =>
              `w-full h-full flex justify-center items-center flex-col p-0 border-l-0 border-t-[3px] border-transparent
              md:block py-[15px] px-0 md:border-l-[5px] md:border-transparent 
              hover:text-white focus:text-white current:text-white hover:bg-[#181818]
              focus:bg-[#181818] current:bg-[#181818] hover:border-t-[#1ed760] focus:border-t-[#1ed760] current:border-t-[#1ed760] 
              md:hover:border-l-[#1ed760] md:focus:border-l-[#1ed760] md:current:border-l-[#1ed760] md:hover:border-t-[#181818] 
              md:focus:border-t-[#181818] md:current:border-t-[#181818] 
              current:text-white current:bg-[#181818] current:border-t-[#1ed760] current:md:border-l-[#1ed760]
              ${isActive ? 'active' : 'text-[#9B9B9B]'}`}
            >
            <div className="mb-[7px] flex items-center justify-center">
              <TimeIcon />
            </div>
              <div>Recent</div>
            </NavLink>
        </li>
        <li className="w-full text-[#9B9B9B] text-[11px] h-full grow basis-full">
            <NavLink
            to='genres'
            className={({ isActive }) =>
              `w-full h-full flex justify-center items-center flex-col p-0 border-l-0 border-t-[3px] border-transparent
              md:block py-[15px] px-0 md:border-l-[5px] md:border-transparent 
              hover:text-white focus:text-white current:text-white hover:bg-[#181818]
              focus:bg-[#181818] current:bg-[#181818] hover:border-t-[#1ed760] focus:border-t-[#1ed760] current:border-t-[#1ed760] 
              md:hover:border-l-[#1ed760] md:focus:border-l-[#1ed760] md:current:border-l-[#1ed760] md:hover:border-t-[#181818] 
              md:focus:border-t-[#181818] md:current:border-t-[#181818] 
              current:text-white current:bg-[#181818] current:border-t-[#1ed760] current:md:border-l-[#1ed760]
              ${isActive ? 'active' : 'text-[#9B9B9B]'}`}
            >
            <div className="mb-[7px] flex items-center justify-center">
              <PlaylistIcon />
            </div>
              <div>Genres</div>
            </NavLink>
        </li>
    </ul>
    <div className="hidden md:block md:text-[#9B9B9B] md:w-[30px] md:h-[30px] md:mb-[30px]">
      <NavLink
      to='https://github.com/DavidGD616/spotinsight'
      className='hover:text-[#509bf5] focus:text-[#509bf5] active:text-[#509bf5]'
      >
        <GithubIcon />
      </NavLink>
    </div>
  </nav>
);

export default Nav;
