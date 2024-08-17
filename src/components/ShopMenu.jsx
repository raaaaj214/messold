import React from 'react'

const ShopMenu = ({show}) => {
  return (
    <div className={`border border-solid border-slate-200 ${show ? 'block' : 'hidden'} absolute top-8 left-0 z-50`}>
       <div className='bg-white flex gap-4 px-5 w-max py-8 font-medium text-black/75'>
        <div className='flex flex-col gap-3 text-[0.8rem] text-start pr-8'>
          <a href="">HOME DECOR</a>
          <a href="">FESTIVE DECOR</a>
          <a href="">URLI</a>
          <a href="">BRASS DECOR</a>
          <a href="">MARBLE DECOR</a>
          <a href="">LAMPS & LANTERNS</a>
          <a href="">CENTERPIECES</a>
          <a href="">CANDLES & DIYAS</a>
          <a href="">CUSHIONS</a>
          <a href="">SILVER DECOR</a>
          <a href="">VASTU & YANTRA</a>
          <a href="">TABLE LINEN</a>
          <a href="">TABLEWARE & SERVEWARE</a>
        </div>
        <div className='flex flex-col gap-3 text-[0.8rem] text-start pr-8'>
          <a href="">HOME DECOR</a>
          <a href="">FESTIVE DECOR</a>
          <a href="">URLI</a>
          <a href="">BRASS DECOR</a>
          <a href="">MARBLE DECOR</a>
          <a href="">LAMPS & LANTERNS</a>
          <a href="">CENTERPIECES</a>
          <a href="">CANDLES & DIYAS</a>
          <a href="">CUSHIONS</a>
          <a href="">SILVER DECOR</a>
          <a href="">VASTU & YANTRA</a>
          <a href="">TABLE LINEN</a>
          <a href="">TABLEWARE & SERVEWARE</a>
        </div>
        <div className='flex flex-col gap-3 text-[0.8rem] text-start pr-8'>
          <a href="">HOME DECOR</a>
          <a href="">FESTIVE DECOR</a>
          <a href="">URLI</a>
          <a href="">BRASS DECOR</a>
          <a href="">MARBLE DECOR</a>
          <a href="">LAMPS & LANTERNS</a>
          <a href="">CENTERPIECES</a>
          <a href="">CANDLES & DIYAS</a>
          <a href="">CUSHIONS</a>
          <a href="">SILVER DECOR</a>
          <a href="">VASTU & YANTRA</a>
          <a href="">TABLE LINEN</a>
          <a href="">TABLEWARE & SERVEWARE</a>
        </div>
       </div>
    </div>
  )
}

export default ShopMenu