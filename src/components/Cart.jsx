import React, { useEffect, useRef } from 'react'
import search from "../assets/searchWhite.svg"
import flower from "../assets/flower.svg"
import close from "../assets/close.svg"

const Cart = ({open,setOpen}) => {
    const cartRef = useRef(null)

    useEffect(() => {
        if (open) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
    
        return () => {
          document.body.classList.remove("no-scroll");
        };
      }, [open]);


  return (
    <div className={` ${
        open ? "flex" : "hidden"
      } fixed z-[1000000] top-0 right-0 w-screen h-screen flex justify-center items-center md:justify-end bg-black/45`}>
    <div
    ref={cartRef}
      className={`w-full md:w-2/5 lg:w-1/4 h-screen flex-col justify-start items-center  bg-white overflow-y-auto `}
    ><div className="relative bg-[#E85992] w-full h-9 flex justify-between items-center py-3 px-4">
        <p className='text-white'>CART</p>
        <img src={flower} alt="" className="w-6"/>
        <button onClick={() => setOpen(false)} href=""><img src={close} alt="" className="w-6" /></button>
      </div>
      <div className='w-full border-b-[1px] border-slate-200 py-2 px-4 text-gray-400 text-[0.8rem] text-left font-semibold'>
        <p>*Minimum order value in ₹499</p>
        <p>FREE SHIPPING ABOVE ₹1000</p>
      </div>
      <div className='w-full pt-16 px-4 '>
        <p className='text-gray-400'>Your cart is currently empty</p> 
        <button className='text-white mt-5 bg-[#E85992] w-full py-3 text-[0.9rem] font-medium'>CONTINUE SHOPPING</button>
      </div>
      </div>
      </div>
  )
}

export default Cart