import React from "react";
import '../Navber/Navber.css'
import Logo from '../../assets/logo.png'
import LogoNew from '../../assets/logoNew.png'
import { NavLink } from "react-router-dom";
const Hero = () => {
  return ( 
    // [#1C2B35]
    <div className="navbar bg-black fixed z-10">
      <div className="container mx-auto">
        <div className="flex-1">
          <NavLink to='/' className="text-white text-xl">
            <img className="ml-28 w-36" src={LogoNew} alt="" />
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="flex-row mr-28">
              <NavLink to="/shop" className="text-white font-semibold	mr-4">Shop</NavLink>
              <NavLink to="/Order-Review" className="text-white font-semibold	mr-4">Order Review</NavLink>
              <NavLink to="/about" className="text-white font-semibold	mr-4">About</NavLink>
              <NavLink to="/Sing-Up" className=" font-semibold	mr-4 text-[#FFE0B3]">Sing Up</NavLink>
              <NavLink to="/Login" className=" font-semibold	text-[#FFE0B3]">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
