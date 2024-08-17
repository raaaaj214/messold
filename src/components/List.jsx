import React from 'react'
import Product from './Product'

const List = ({title}) => {
  return (
    <div className='w-full max-w-[1500px] flex flex-col gap-4 px-2 md:px-6 '>
        <div className='w-full flex justify-between items-center'>
            <h2 className='font-bold'>{title}</h2>
            <button className='bg-[#D3134F] text-white text-[0.7rem] px-2 md:px-4 py-2'>VIEW ALL</button>
        </div>
        <div className='flex justify-start items-center gap-2 overflow-x-scroll no-scrollbar min-w-full md:gap-4 xl:gap-2 xl:justify-between'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
  )
}

export default List