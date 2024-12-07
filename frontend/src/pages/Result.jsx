import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion";
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
  
const Result = () => {
  
  const [image, setImage] = useState(assets.sample_img_1);
  const  [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
 
  useEffect(() => {
    console.log("Updated image:", image);
  }, [image]);

const {generateImage}= useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error("Please enter a description.");
      return;
    }

    try {
      setLoading(true);
      const image = await generateImage({ prompt: input });
      console.log("Generated image URL:", image); // Should now log base64 image
      if (image) {
        setIsImageLoaded(true);
        setImage(image); // Set the generated image
      } else {
        toast.error("Failed to generate image. Please try again.");
      }
    } catch (err) {
      console.error("Error generating image:", err);
      toast.error("An error occurred while generating the image.");
    } finally {
      setLoading(false);
    }

  }

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative">
          <img className="max-w-sm rounded" src={image} alt="" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          />
        </div>
        <p className={!loading ? "hidden" : ""}>Loading . . . . .</p>
      </div>
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white  text-sm p-0.5 mt-10 rounded-full ">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="placeholder-color flex-1 bg-transparent outline-none ml-8 max-sm:w-20  "
            type="text"
            placeholder="Describe what you want to Generate"
          />
          <button
            className="bg-zinc-900 px=10 sm:px-16 py-3 rounded-full"
            type="submit"
          >
            Generate
          </button>
        </div>
      )}
      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
            onClick={() => {
              setIsImageLoaded(false);
            }}
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
}

export default Result
