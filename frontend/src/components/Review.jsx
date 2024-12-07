import React from 'react'
import { assets, reviewData } from '../assets/assets';

const Review = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 md:py-12">
      <h1 className="text-3xl sm:text-4xl from-neutral-900 mb-2">
        Customer Review
      </h1>
      <p className=" text-gray-600 mb-12 "> What Our User Are Saying </p>
          <div className="flex flex-wrap gap-6">
              {reviewData.map((review, index) => (
                  <div key={index} className="bg-white/25 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all">
                      <div className='flex flex-col items-center'>
                          <img src={review.image} alt="" className='rounded-full w-14' />
                          <h2 className='text-xl font-semibold mt-3'>{review.name}</h2>
                          <p className='text-gray-500 mb-4'>{review.role}</p>
                          <div className='flex mb-4'>
                              {Array(review.stars).fill().map((item, index) => (
                                  <img src={assets.rating_star} key={index} alt="" />
                              ))}
                          </div>
                          <p className='text-center text-sm text-gray-600'>{ review.text}</p>
                      </div>
                      </div>
              ))}
          </div>
    </div>
  );
}

export default Review
