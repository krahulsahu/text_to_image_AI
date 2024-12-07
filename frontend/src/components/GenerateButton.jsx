import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const GenerateButton = () => {
    const { user, setShowLogin } = useContext(AppContext);
    const navigate = useNavigate();

    const onClickHandler = () => {
      if (user) {
        navigate("/result");
      } else {
        setShowLogin(true);
      }
    };
  return (
    <div className="text-center  pb-16">
      <h1 className="text-3xl md:text-4xl lg:text-4xl mt-4  mb-2 font-semibold text-neutral-800 py-6 md:py-16">
        Bring Your Ideas to Life!  <br /><span className='text-gray-500 text-3xl mb-4'>Experience the magic of AI-powered creativity.</span>
      </h1>
      <button
        onClick={onClickHandler}
        className=" inline-flex items-center gap-2  rounded-full sm:text-lg text-white hover:scale-110 transition-all duration-700 bg-black w-auto mt-8 px-12 py-2.5  ">
        Start Generating Images Now
        <img className="h-6" src={assets.star_group} alt=""  />
      </button>
    </div>
  );
}

export default GenerateButton
