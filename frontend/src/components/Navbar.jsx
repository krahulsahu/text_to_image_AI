import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { Link, useNavigate,} from "react-router-dom";
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const { user, setShowLogin,logout,credit, } = useContext(AppContext);
    const navigate =useNavigate()

  return (
    <div className="container mx-auto flex items-center justify-between py-4">
      <Link to="/" className="flex items-center">
        <img src={assets.logo} alt="" width={20} className="w-15 sm:w-12 lg:w-18 rounded-3xl" />
        <span className="text-blue-600 font-bold text-xl ml-2 hidden sm:block">
          Imaginify
        </span>
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => navigate.buy}
              className="flex items-center gap-1 bg-gray-400 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-110 transition-all duration-700 "
            >
              <img src={assets.credit_star} alt=""  />
              <p className=" text-xs sm:text-sm font-medium text-gray-900 ">
                Credits left : {credit}
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, { user.name}</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt=""
                className="w-10 drop-shadow"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10" onClick={logout}>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-4">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </p>
            <button
              className="bg-zinc-600 text-white px-7 py-2 sm:px-10 text-sm rounded-2xl"
              onClick={() => setShowLogin(true)}
            >
              Log-In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
