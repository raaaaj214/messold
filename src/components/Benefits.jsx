import React from 'react'
import delivery from "../assets/delivery.png"
import cod from "../assets/cod.png"
import returns from "../assets/returns.png"

const Benefits = () => {
  return (
    <section className='flex justify-center items-end w-screen border-t border-solid border-slate-200 py-4'>
      <div className='flex justify-center items-center flex-col w-1/3 border-r-2 border-solid gap-1'>
        <img src={delivery} alt="" className='w-8 lg:w-10 ' />
        <p className='text-[0.6rem] '>Speedy delivery</p>
      </div>
      <div className='flex justify-center items-center flex-col w-1/3 border-r-2 border-solid gap-1 '>
        <img src={cod} alt="" className='w-7 lg:w-8' />
        <p className='text-[0.6rem]'>Cash on delivery</p>
      </div>
      <div className='flex justify-center items-center flex-col w-1/3 gap-1'>
        <img src={returns} alt="" className='w-8 lg:w-10' />
        <p className='text-[0.6rem]'>Easy returns</p>
      </div>
    </section>
  )
}

export default Benefits