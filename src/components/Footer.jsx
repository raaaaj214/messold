import React, { useEffect, useState } from "react";
import footerLogo from "../assets/logo2.svg";
import facebookLogo from "../assets/facebook-svgrepo-com.svg";
import instagramLogo from "../assets/instagram-svgrepo-com.svg";
import collapse from "../assets/collapse.png"

const Footer = () => {
  const [openInfo, setOpenInfo] = useState(false);
  const [openPB, setOpenPB] = useState(false);
  const [openCC, setOpenCC] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-[1400px] flex flex-col justify-center items-center text-white px-4  md:py-12 md:px-12 gap-10 md:gap-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 md:gap-14 lg:gap-20 justify-start items-start ">
        <div className=" flex flex-col justify-center items-center gap-5">
          <img src={footerLogo} alt="" />
          <div className="flex gap-4 justify-between items-center  ">
            <button className="flex justify-center items-center text-[0.8rem] border border-white rounded-md px-2 py-[1px]  gap-1">
              <img
                src={facebookLogo}
                alt=""
                className="w-5 h-6 object-contain"
              />
              <p>FACEBOOK</p>
            </button>
            <button className="flex justify-center items-center text-[0.8rem] border border-white rounded-md px-2 py-1 gap-1">
              <img
                src={instagramLogo}
                alt=""
                className="w-4 h-4 object-contain"
              />
              <p>INSTAGRAM</p>
            </button>
          </div>
        </div>
        <div className="md:hidden border-white border-solid border-t-[1px] border-b-[1px] py-4 mt-8 font-semibold">
          <a href="" className="text-[0.8rem]">
            TRACK YOUR ORDER
          </a>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 border-white border-solid border-b-[1px] py-4 md:border-none">
          <span
            className="w-full pr-2 text-sm font-medium lg:text-xl cursor-pointer flex justify-between items-center"
            onClick={() =>  isMobile && setOpenInfo(!openInfo)}
          >
            <h3 className="text-[0.8rem] lg:text-lg">INFORMATION</h3>
            {
            isMobile &&
            <img src={collapse} alt="" className={`${openInfo ? "rotate-180" : ""} w-3`}/>
            }
          </span>
          <div
            className={`overflow-hidden transition-all ease-in-out duration-300 ${isMobile &&
              (openInfo ? "max-h-[500px]" : "max-h-0 hidden")
            } `}
          >
            <div className="text-sm flex flex-col justify-center items-start gap-5">
              <a
                href=""
                className="decoration-1 hover:decoration-solid hover:decoration-white hover:underline underline-offset-4"
              >
                Track your Order
              </a>
              <a
                href=""
                className="decoration-1 hover:decoration-solid hover:decoration-white hover:underline underline-offset-4"
              >
                Returns and Refunds
              </a>
              <a
                href=""
                className="decoration-1 hover:decoration-solid hover:decoration-white hover:underline underline-offset-4"
              >
                Holiday List
              </a>
              <a
                href=""
                className="decoration-1 hover:decoration-solid hover:decoration-white hover:underline underline-offset-4"
              >
                Terms and Conditions
              </a>
              <a
                href=""
                className="decoration-1 hover:decoration-solid hover:decoration-white hover:underline underline-offset-4"
              >
                Aartis
              </a>
              <a
                href=""
                className="decoration-1 hover:decoration-solid hover:decoration-white hover:underline underline-offset-4"
              >
                Privacy Policy
              </a>
              <a
                href=""
                className="decoration-1 hover:decoration-solid hover:decoration-white hover:underline underline-offset-4"
              >
                Blog
              </a>
              <a
                href=""
                className="decoration-1 hover:decoration-solid hover:decoration-white hover:underline underline-offset-4"
              >
                FAQ
              </a>
              <a
                href=""
                className="decoration-1 hover:decoration-solid hover:decoration-white hover:underline underline-offset-4"
              >
                Deals & Coupons
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 border-white border-solid border-b-[1px] py-4 md:border-none">
        <span
            className="w-full pr-2 text-sm font-medium lg:text-xl cursor-pointer flex justify-between items-center"
            onClick={() => isMobile && setOpenPB(!openPB)}
          >
            <h3 className="text-[0.8rem] lg:text-lg">ABOUT MY POOJA BOX</h3>
            {isMobile && 
            <img src={collapse} alt="" className={`${openPB ? "rotate-180" : ""} w-3`}/>
            }
          </span>
          <div
            className={`overflow-hidden transition-all ease-in-out duration-300 ${
                isMobile &&
                (openPB ? "max-h-[500px]" : "max-h-0 hidden"
  )}`}
          >
          <div className="text-sm flex flex-col justify-center items-start gap-5">
            <a
              href=""
              className="hover:decoration-solid decoration-1 hover:decoration-white hover:underline underline-offset-4"
            >
              Contact Us
            </a>
            <a
              href=""
              className="hover:decoration-solid decoration-1 hover:decoration-white hover:underline underline-offset-4"
            >
              About Us
            </a>
            <a
              href=""
              className="hover:decoration-solid decoration-1 hover:decoration-white hover:underline underline-offset-4"
            >
              Corporate Enquiry
            </a>
            <a
              href=""
              className="hover:decoration-solid decoration-1 hover:decoration-white hover:underline underline-offset-4"
            >
              Exchange/Cancel My Order
            </a>
          </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 border-white border-solid border-b-[1px] py-4 md:border-none">
        <span
            className="w-full pr-2 text-sm font-medium lg:text-xl cursor-pointer flex justify-between items-center"
            onClick={() => isMobile && setOpenCC(!openCC)}
          >
            <h3 className="text-[0.8rem] lg:text-lg">CUSTOMER CARE</h3>
            {isMobile &&
            <img src={collapse} alt="" className={`${openPB ? "rotate-180" : ""} w-3`}/>
            }
          </span>
          <div
            className={`overflow-hidden transition-all ease-in-out duration-300 ${
                isMobile &&
                (openCC ? "max-h-[500px]" : "max-h-0 hidden")
            }`}
          >
          <div className="flex flex-col justify-center items-start gap-6">
            <span>
              Phone:
              <a href="tel:+91 8010288882">+91 8010288882</a> |
              <a href="tel:+91 8010188881">+91 8010188881</a>
            </span>
            <span>
              Email:
              <a href="mailto:orders@mypoojabox.com"> orders@mypoojabox.com</a>
            </span>
            <p>
              Address: My Pooja Box, Jagat Complex, 100 Ft Rd, Ghitorni, New
              Delhi 110030
            </p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center flex-wrap">
        <div className="w-full md:w-1/2  flex-wrap-reverse md:flex-nowrap flex justify-center lg:justify-start gap-4  items-center ">
        <div className="flex gap-4 lg:gap-0">
          <a href="" target="_blank" className="flex justify-center">
            <img
              src="//www.mypoojabox.in/cdn/shop/t/219/assets/google_play_btn.png?v=4386011889070212141710858592"
              alt="Download App"
              className="w-3/4 md:w-full lg:w-3/4 lg:object-contain"
            />
          </a>
          <a href="" target="_blank" className="flex justify-center">
            <img
              src="//www.mypoojabox.in/cdn/shop/t/219/assets/ios_btn.png?v=97251102745360698661710858592"
              alt="Download App"
              className="w-3/4 md:w-full lg:w-3/4 lg:object-contain"
            />
          </a>
          </div>
          <p>MOBIKASA VENTURES LLP</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-between md:justify-center lg:justify-end items-center gap-3 border-white border-solid border-t-[1px] mt-4 py-2 md:border-none">
          <p className="text-[0.7rem] md:text-sm">© 2024, All Rights Reserved.</p>
          <select
            name="type"
            id=""
            className="text-white md:text-black rounded-sm md:outline md:outline-1 outline-black text-[0.8rem] bg-transparent md:bg-white md:text-[0.9rem]"
          >
            <option value="India" defaultChecked>
              India
            </option>
            <option value="Global">Global</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
