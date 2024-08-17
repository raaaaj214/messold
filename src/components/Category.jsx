import React from 'react'
import rakhi from "../assets/rakhi.avif"

const Category = ({name,image}) => {
  return (
    <div className='flex flex-col justify-center items-center w-40'>
      <div className='w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center'>
        <img src={image} alt={name} className='w-full h-full object-cover' />
      </div>
      <h5 className='text-[0.7rem] lg:text-[0.8rem] text-center mt-2'>{name}</h5>
    </div>
  )
}

export default Category