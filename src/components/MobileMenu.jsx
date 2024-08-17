import React, { useEffect, useState } from "react";
import arrow from "../assets/arrow.png";
import rakhi from "../assets/rakhi.avif";
import urlis from "../assets/urlis.webp";
import search from "../assets/searchWhite.svg"
import searchBlack from "../assets/search.png"
import flower from "../assets/flower.svg"
import close from "../assets/close.svg"
import closeBlack from "../assets/closeBlack.svg"

const MobileMenu = ({ open,setOpen }) => {
  const [openHD, setOpenHD] = useState(false);
  const [openHS, setOpenHS] = useState(false);
  const [openRakhi, setOpenRakhi] = useState(false);
  const [openGC, setOpenGC] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

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
    <div
      className={`fixed z-50 left-0 top-0 w-full h-screen ${
        open ? "flex" : "hidden"
      } flex-col justify-start items-center w-full bg-white overflow-y-auto `}
    >
      <div className="relative bg-[#E85992] w-full h-9 flex justify-between items-center py-3 px-4">
        <button onClick={() => setOpen(false)} href=""><img src={close} alt="" className="w-6" /></button>
        <img src={flower} alt="" className="w-6"/>
        <img src={search} alt="" className={`w-5 ${openSearch ? "opacity-0" : "opacity-100"}`} onClick={() => setOpenSearch(true)}/>
      </div>
      <div className={`flex ${openSearch === true ? "max-h-full opacity-100" : "h-0 -mb-5 max-h-0 opacity-0"} w-full gap-3 justify-evenly py-2 bg-slate-100 transition-[max-height] duration-800 ease-in-out`}>
        <img src={searchBlack} className="w-5" alt="" />
        <input type="text" autoFocus={openSearch}  placeholder="SEARCH" className="focus:outline-none bg-transparent text-[0.9rem]"/>
        <button onClick={() => setOpenSearch(false)} href=""><img src={closeBlack} alt="" className="w-4" /></button>
      </div>
      <div className="w-full px-2 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-4 border-slate-200 border-solid border-b-[1px] py-4 md:border-none">
          <span
            className="w-full pr-2 text-sm font-medium lg:text-xl cursor-pointer flex justify-between items-center"
            onClick={() => setOpenHD(!openHD)}
          >
            <div className="flex justify-start gap-5 items-center">
              <img src={rakhi} alt="" className="w-10 rounded-full" />
              <h3 className="text-[0.9rem] lg:text-lg text-gray-700">
                INFORMATION
              </h3>
            </div>
            <img
              src={arrow}
              alt=""
              className={`w-4 h-4 ${openHD ? "rotate-180" : ""} `}
            />
          </span>
          <div
            className={`overflow-hidden transition-all ease-in-out duration-300 ${
              openHD ? "h-auto" : "h-0 hidden"
            }`}
          >
            <div className="text-sm grid grid-cols-3 justify-center items-center gap-5 ">
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={urlis} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  URLIS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  BRASS DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  MARBLE DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  LAMPS AND LANTERNS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CENTERPIECES
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CANDLES AND DIYAS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CUSHIONS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  SILVER DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  TABLEWARE AND SERVEWARE
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  TABLE LINEN
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  ROSE GOLD DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  COFFEE TABLE BOOKS
                </h3>
              </div>
              
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4 border-slate-200 border-solid border-b-[1px] py-4 md:border-none">
          <span
            className="w-full pr-2 text-sm font-medium lg:text-xl cursor-pointer flex justify-between items-center"
            onClick={() => setOpenHS(!openHS)}
          >
            <div className="flex justify-start gap-5 items-center">
              <img src={rakhi} alt="" className="w-10 rounded-full" />
              <h3 className="text-[0.9rem] lg:text-lg text-gray-700">
                HEALING CRYSTALS
              </h3>
            </div>
            <img
              src={arrow}
              alt=""
              className={`w-4 h-4 ${openHS ? "rotate-180" : ""} `}
            />
          </span>
          <div
            className={`overflow-hidden transition-all ease-in-out duration-300 ${
              openHS ? "h-auto" : "h-0 hidden"
            }`}
          >
            <div className="text-sm grid grid-cols-3 justify-center items-center gap-5 ">
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={urlis} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  URLIS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  BRASS DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  MARBLE DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  LAMPS AND LANTERNS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CENTERPIECES
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CANDLES AND DIYAS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CUSHIONS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  SILVER DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  TABLEWARE AND SERVEWARE
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  TABLE LINEN
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  ROSE GOLD DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  COFFEE TABLE BOOKS
                </h3>
              </div>
              
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4 border-slate-200 border-solid border-b-[1px] py-4 md:border-none">
          <span
            className="w-full pr-2 text-sm font-medium lg:text-xl cursor-pointer flex justify-between items-center"
            onClick={() => setOpenRakhi(!openRakhi)}
          >
            <div className="flex justify-start gap-5 items-center">
              <img src={rakhi} alt="" className="w-10 rounded-full" />
              <h3 className="text-[0.9rem] lg:text-lg text-gray-700">
                RAKHI | 19 AUG
              </h3>
            </div>
            <img
              src={arrow}
              alt=""
              className={`w-4 h-4 ${openRakhi ? "rotate-180" : ""} `}
            />
          </span>
          <div
            className={`overflow-hidden transition-all ease-in-out duration-300 ${
              openRakhi ? "h-auto" : "h-0 hidden"
            }`}
          >
            <div className="text-sm grid grid-cols-3 justify-center items-center gap-5 ">
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={urlis} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  URLIS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  BRASS DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  MARBLE DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  LAMPS AND LANTERNS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CENTERPIECES
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CANDLES AND DIYAS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CUSHIONS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  SILVER DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  TABLEWARE AND SERVEWARE
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  TABLE LINEN
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  ROSE GOLD DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  COFFEE TABLE BOOKS
                </h3>
              </div>
              
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4 border-slate-200 border-solid border-b-[1px] py-4 md:border-none">
          <span
            className="w-full pr-2 text-sm font-medium lg:text-xl cursor-pointer flex justify-between items-center"
            onClick={() => setOpenGC(!openGC)}
          >
            <div className="flex justify-start gap-5 items-center">
              <img src={rakhi} alt="" className="w-10 rounded-full" />
              <h3 className="text-[0.9rem] lg:text-lg text-gray-700">
                GANESH CHATURTHI | 7 SEPT
              </h3>
            </div>
            <img
              src={arrow}
              alt=""
              className={`w-4 h-4 ${openGC ? "rotate-180" : ""} `}
            />
          </span>
          <div
            className={`overflow-hidden transition-all ease-in-out duration-300 ${
              openGC ? "h-auto" : "h-0 hidden"
            }`}
          >
            <div className="text-sm grid grid-cols-3 justify-center items-center gap-5 ">
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={urlis} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  URLIS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  BRASS DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  MARBLE DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  LAMPS AND LANTERNS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CENTERPIECES
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CANDLES AND DIYAS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CUSHIONS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  SILVER DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  TABLEWARE AND SERVEWARE
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  TABLE LINEN
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  ROSE GOLD DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  COFFEE TABLE BOOKS
                </h3>
              </div>
              
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm grid grid-cols-3 justify-center items-center gap-5 ">
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={urlis} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  URLIS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  BRASS DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  MARBLE DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  LAMPS AND LANTERNS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CENTERPIECES
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CANDLES AND DIYAS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  CUSHIONS
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  SILVER DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  TABLEWARE AND SERVEWARE
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  TABLE LINEN
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  ROSE GOLD DECOR
                </h3>
              </div>
              <div className="grow-0 flex justify-center flex-col gap-2 items-center">
                <img src={rakhi} alt="" className="w-20 rounded-full" />
                <h3 className="text-[0.7rem] text-center lg:text-lg text-gray-700">
                  COFFEE TABLE BOOKS
                </h3>
              </div>
              
            </div>
      </div>
    </div>
  );
};

export default MobileMenu;
