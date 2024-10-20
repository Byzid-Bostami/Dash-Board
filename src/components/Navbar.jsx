import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdDashboard, MdSell } from "react-icons/md";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle);
  };

  return (
    <div className={`${toggle ? "w-40" : "w-14"} bg-[#161b2e] flex flex-col p-4 h-screen text-white pt-5 transition-all duration-200 border border-white/15 justify-between`}>
      
      <div className='flex flex-col space-y-8 transition-all duration-200'>
      <div className='self-end text-2xl cursor-pointer text-[#f370e6]'>
        {toggle ? <FaArrowLeftLong onClick={handleToggle} /> : <FaArrowRightLong onClick={handleToggle} />}
      </div>

      <NavLink className={({ isActive }) => `${isActive ? 'text-[#f370e6]' : 'text-white'} hover:text-[#f370e6] flex items-center space-x-2`} to='/'>
        <MdDashboard className='text-xl' /> {toggle && <span>Dashboard</span>}
      </NavLink>
      
      <NavLink className={({ isActive }) => `${isActive ? 'text-[#f370e6]' : 'text-white'} hover:text-[#f370e6] flex items-center space-x-2`} to='/Sales'>
        <MdSell className='text-xl' /> {toggle && <span>Sales</span>}
      </NavLink>
      
      <NavLink className={({ isActive }) => `${isActive ? 'text-[#f370e6]' : 'text-white'} hover:text-[#f370e6] flex items-center space-x-2`} to='/Notification'>
        <IoIosNotifications className='text-xl' /> {toggle && <span>Notification</span>}
      </NavLink>
      
      <NavLink className={({ isActive }) => `${isActive ? 'text-[#f370e6]' : 'text-white'} hover:text-[#f370e6] flex items-center space-x-2`} to='/Events'>
        <BiSolidCalendarEvent className='text-xl' /> {toggle && <span>Events</span>}
      </NavLink>
      
      <NavLink className={({ isActive }) => `${isActive ? 'text-[#f370e6]' : 'text-white'} hover:text-[#f370e6] flex items-center space-x-2`} to='/Settings'>
        <IoMdSettings className='text-xl' /> {toggle && <span>Settings</span>}
      </NavLink>
      </div>

      {toggle? <button className='bg-[#c526b7] mb-5 p-2 rounded-full font-medium'>LOGOUT</button> : <IoIosLogOut className='text-[#f370e6] cursor-pointer text-2xl font-bold mb-5' />}
    </div>
  );
};

export default Navbar;
