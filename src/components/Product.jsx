import React from 'react'
import productImg1 from "../assets/product1.webp"
import productImg2 from "../assets/product2.webp"
const Product = () => {
  return (
    <div className='w-1/2 md:w-1/3 lg:w-1/6 xl:w-[16%] flex flex-col justify-center items-center shrink-0'>
        <div className="overflow-hidden relative w-[140px] md:w-full lg:w-full xl:w-[230px] h-[140px] md:h-[240px] lg:h-[170px] xl:h-[230px]">
    <img src={productImg1} alt="" className="w-full h-full object-cover duration-500 ease-in-out hover:opacity-0 z-10 absolute top-0 left-0" />
    <img src={productImg2} alt="" className="w-full h-full object-cover transform transition-transform delay-200 duration-500 ease-linear hover:scale-140 hover:shadow-inner hover:shadow-black  z-0 absolute top-0 left-0" />
    </div>
        <div className='w-full overflow-hidden truncate'>
            <h1 className='text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi non recusandae sit unde blanditiis perferendis id corrupti, reiciendis possimus enim!</h1>
            </div>    
            <button className='w-full bg-[#D3134F] text-white text-[0.9rem]'>ADD TO CART</button>
    </div>
  )
}

export default Product