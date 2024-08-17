import React from 'react'

const DecorMenu = ({show}) => {
  return (
    <div className={`border border-solid border-slate-200 ${show ? 'block' : 'hidden'} absolute top-8 left-0 z-50`}>
       <div className='bg-white flex gap-4 px-5 w-max py-8 font-medium text-black/75'>
        <div className='flex flex-col gap-3 text-[0.8rem] text-start pr-8'>
          <a href="">VIEW ALL</a>
          <a href="">URLIS</a>
          <a href="">LAMPS & LANTERNS LIGHTING</a>
        </div>
        <div className='flex flex-col gap-3 text-[0.8rem] text-start pr-8'>
          <a href="">CANDLE & DIYAS</a>
          <a href="">POOJA ROOM DECOR</a>
          <a href="">CENTERPIECES</a>
        </div>
        <div className='flex flex-col gap-3 text-[0.8rem] text-start pr-8'>
          <a href="">TABLEWARE & SERVEWARE</a>
          <a href="">SILVER DECOR</a>
          <a href="">BRASS HOME DECOR</a>
        </div>
       </div>
    </div>
  )
}

export default DecorMenu