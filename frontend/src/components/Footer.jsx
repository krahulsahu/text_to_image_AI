import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} alt="" width={20} className="w-15 sm:w-12 lg:w-18 rounded-3xl" />
      <p className='flex-1 border-l  border-gray-700 pl-4 text-gray-500 max-sm:hidden'>
        &copy; <span>krahulsahu</span> {new Date().getFullYear()}! All rights
        reserved.
      </p>
      <div className='flex gap-1.5'>
              <img src={assets.facebook_icon} alt="" width={35} />
              <img src={assets.instagram_icon} alt=""  width={35} />
                <img src={assets.twitter_icon} alt="" width={35} />
      </div>
    </div>
  );
}

export default Footer
