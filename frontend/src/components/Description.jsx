import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className=" text-gray-600 mb-8 ">
        {" "}
        Turn your Imaginary to Visuals Image{" "}
      </p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          className="w-80 xlw-96 rounded-lg"
          src={assets.sample_img_2}
          alt=""
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing the AI- Powered Text to Images Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Our AI-Powered Text to Images Generator is a cutting-edge tool that
            enables you to create stunning images from text in seconds. With our
            generator, you can turn your imagination into visuals, bringing your
            ideas to life. Whether you're a marketer, artist, or simply someone
            with a creative vision, our tool is designed to help you achieve
            your goals.
          </p>
          <p className="text-gray-600 mb-5">
            Our generator uses advanced AI algorithms to analyze your text and
            generate a high-quality image that accurately represents your
            vision. With our tool, you can create images that are not only
            visually stunning but also tailored to your specific needs. Whether
            you're looking to create a logo, social media graphic, or simply a
            unique image for your website, our generator has got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description
