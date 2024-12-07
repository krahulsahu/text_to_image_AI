import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  }


  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center  my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <p>AI-Powered Image Creator</p>
        <img src={assets.star_icon} alt=""  />
      </motion.div>
      <motion.h1 className=" text-5xl max-w-[500px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center ">
        Transform Text into
        <span
          className="text-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          {" "}
          Stunning Visuals
        </span>
        , in Just Seconds.
      </motion.h1>
      <p className="text-center max-w-xl mx-auto mt-5">
        Elevate your creativity with our powerful AI-driven image generator.
        Convert your ideas into visuals that captivate and inspire. Whether
        you're designing for business, art, or personal projects, we've got you
        covered.
      </p>
      <motion.button className="flex items-center gap-2 rounded-full sm:text-lg text-white hover:scale-110 transition-all duration-700 bg-black w-auto mt-8 px-12 py-2.5  "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        onClick={onClickHandler}
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt=""  />
      </motion.button>
      <div className="flex flex-wrap justify-center mt-10 gap-3">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              className="rounded hover:scale-110 transition-all duration-300 cursor-pointer max-sm:w-10 "
              src={assets.sample_img_1}
              alt=""
              key={index}
              width={70}
            />
          ))}
      </div>
      <p className="mt-2 text-neutral-600">Generated Images form AI</p>
    </motion.div>
  );
};

export default Header;
