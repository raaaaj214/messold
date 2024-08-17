import React, { useEffect, useState } from 'react'
import closeBlack from "../assets/closeBlack.svg"
import searchBlack from "../assets/search.png"
import roseQuartz from "../assets/rose quartz.avif";
import article from "../assets/article.webp"

const Search = ({open,setOpen}) => {

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
    <div className={`${open ? "flex" : "hidden"} flex-col justify-center items-start w-screen h-screen -bottom-24 md:-bottom-[6rem] lg:-bottom-28 left-0 fixed bg-[#FAFAFA] z-[100000] px-8 gap-2`}>
        <div className={`flex w-full gap-3 justify-between py-2 bg-transparent transition-[max-height] duration-800 ease-in-out`}>
            <div className='flex gap-4 '>
        <img src={searchBlack} className="w-5" alt="" />
        <input type="text" autoFocus={open}  placeholder="SEARCH" className="text-black placeholder:text-black/75 font-medium focus:outline-none bg-transparent text-[0.9rem] w-full"/>
        </div>
        <button onClick={() => setOpen(false)} href=""><img src={closeBlack} alt="" className="w-4" /></button>
      </div>
      <div className='flex flex-col gap-8 overflow-y-auto no-scrollbar'>
      <div className='flex flex-col items-start justify-center gap-3'>
        <h3 className='text-[#E85992] text-lg'>Most Search Keywords</h3>
        <div className='flex flex-wrap gap-2'>
            <p className='bg-gray-100 text-black text-[0.8rem] px-3 py-1 rounded-lg'>CITRINE</p>
            <p className='bg-gray-100 text-black text-[0.8rem] px-3 py-1 rounded-lg'>MOONSTONE</p>
            <p className='bg-gray-100 text-black text-[0.8rem] px-3 py-1 rounded-lg'>ROSE QUARTZ</p>
            <p className='bg-gray-100 text-black text-[0.8rem] px-3 py-1 rounded-lg'>PYRITE</p>
            <p className='bg-gray-100 text-black text-[0.8rem] px-3 py-1 rounded-lg'>URLI</p>
            <p className='bg-gray-100 text-black text-[0.8rem] px-3 py-1 rounded-lg'>SAGE</p>
            <p className='bg-gray-100 text-black text-[0.8rem] px-3 py-1 rounded-lg'>BRACELETS</p>
            <p className='bg-gray-100 text-black text-[0.8rem] px-3 py-1 rounded-lg'>EVIL EYE</p>
        </div>
      </div>
      <div className='flex flex-col items-start justify-center gap-3'>
        <h3 className='text-[#E85992] text-lg'>Most Search Categories</h3>
        <div className='flex flex-wrap gap-2 justify-start'>
            <div className='bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={roseQuartz}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>HEALING CRYSTALS</h1>
            </div>
            <div className='bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={roseQuartz}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>HEALING CRYSTALS</h1>
            </div>
            <div className='bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={roseQuartz}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>HEALING CRYSTALS</h1>
            </div>
            <div className='bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={roseQuartz}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>HEALING CRYSTALS</h1>
            </div>
            <div className='bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={roseQuartz}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>HEALING CRYSTALS</h1>
            </div>
            <div className='bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={roseQuartz}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>HEALING CRYSTALS</h1>
            </div>
            <div className='bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={roseQuartz}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>HEALING CRYSTALS</h1>
            </div>
        </div>
      </div>
      <div className='flex flex-col items-start justify-center gap-3'>
        <h3 className='text-[#E85992] text-lg'>Featured Articles</h3>
        <div className='flex flex-wrap gap-2 justify-start'>
            <div className='overflow-hidden text-ellipsis  bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={article}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>THE ULTIMATE CRYSTAL HEALING GUIDE : 20 POWERFUL CRYSTALS</h1>
            </div>
            <div className='overflow-hidden text-ellipsis  bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={article}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>THE ULTIMATE CRYSTAL HEALING GUIDE : 20 POWERFUL CRYSTALS</h1>
            </div>
            <div className='overflow-hidden text-ellipsis  bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={article}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>THE ULTIMATE CRYSTAL HEALING GUIDE : 20 POWERFUL CRYSTALS</h1>
            </div>
            <div className='overflow-hidden text-ellipsis  bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={article}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>THE ULTIMATE CRYSTAL HEALING GUIDE : 20 POWERFUL CRYSTALS</h1>
            </div>
            <div className='overflow-hidden text-ellipsis  bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={article}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>THE ULTIMATE CRYSTAL HEALING GUIDE : 20 POWERFUL CRYSTALS</h1>
            </div>
            <div className='overflow-hidden text-ellipsis  bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={article}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>THE ULTIMATE CRYSTAL HEALING GUIDE : 20 POWERFUL CRYSTALS</h1>
            </div>
            <div className='overflow-hidden text-ellipsis  bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={article}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>THE ULTIMATE CRYSTAL HEALING GUIDE : 20 POWERFUL CRYSTALS</h1>
            </div>
            <div className='overflow-hidden text-ellipsis  bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={article}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>THE ULTIMATE CRYSTAL HEALING GUIDE : 20 POWERFUL CRYSTALS</h1>
            </div>
            <div className='overflow-hidden text-ellipsis  bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={article}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>THE ULTIMATE CRYSTAL HEALING GUIDE : 20 POWERFUL CRYSTALS</h1>
            </div>
            <div className='overflow-hidden text-ellipsis  bg-gray-100 w-[30%] md:w-[18%] lg:w-[15%] p-2 flex flex-col justify-center items-center gap-2'>
                <img src={article}  className="w-full" alt="" />
                <h1 className='text-[0.6rem] text-center'>THE ULTIMATE CRYSTAL HEALING GUIDE : 20 POWERFUL CRYSTALS</h1>
            </div>
            
           
        </div>
      </div>
      </div>
    </div>
  )
}

export default Search