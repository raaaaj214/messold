import React from 'react'
import starImg from "../assets/star.svg"


const Review = ({name , img , rating , postTime , review}) => {
  return (
    <div className='flex flex-col justify-center items-start min-w-[300px] gap-3'>
        <div className='flex justify-center items-center gap-4'>
            <img src={img} alt="" className='w-10 rounded-full'/>
            <div>
                <h5 className='font-bold text-[0.8rem]'>{name}</h5>
                <div className='flex gap-2'>
                    <div className='flex'>
                    {
                      Array.from({ length: rating }).map((_, index) => (
                        <img src={starImg} alt="star" key={index} className='w-3'/>
                      ))
                    }
                    </div>
                    <span className='font-semibold text-gray-400 text-[0.8rem]'>{postTime}</span>
                </div>
            </div>
        </div>
        <div>
            <p className='text-[0.9rem]'>{review}</p>
        </div>
    </div>
  )
}

export default Review