import React, { useEffect, useRef, useState, useCallback } from 'react';
import arrow from '../assets/arrow.png';
import ShopMenu from './ShopMenu';
import DecorMenu from './DecorMenu';

const Navbar = () => {
  const shopRef = useRef(null);
  const homeDecorRef = useRef(null);
  const [ShopToggle, setShopToggle] = useState(false);
  const [HomeDecorToggle, setHomeDecorToggle] = useState(false);

  const closeOpenMenus = useCallback((e) => {
    if (ShopToggle && !shopRef.current?.contains(e.target)) {
      setShopToggle(false);
    }
    if (HomeDecorToggle && !homeDecorRef.current?.contains(e.target)) {
      setHomeDecorToggle(false);
    }
  }, [ShopToggle, HomeDecorToggle]);

  useEffect(() => {
    document.addEventListener('mousedown', closeOpenMenus);
    return () => {
      document.removeEventListener('mousedown', closeOpenMenus);
    };
  }, [closeOpenMenus]);

  return (
    <div className='hidden lg:flex gap-5 text-[0.9rem]'>
      <button
        ref={shopRef}
        className={`underline-offset-4 ${ShopToggle ? "underline decoration-2" : "decoration-1"} relative flex gap-2 justify-center items-center cursor-pointer hover:underline `}
        onClick={() => setShopToggle((prev) => !prev)}
      >
        <span className='hover:underline'>Shop</span>
        <img
          src={arrow}
          className={`transform ${ShopToggle ? '' : 'rotate-180'} w-3 h-3 object-contain`}
          alt=""
        />
        <ShopMenu show={ShopToggle} />
      </button>
      
      <button
        ref={homeDecorRef}
        className={`underline-offset-4 ${HomeDecorToggle ? "underline decoration-2" : "decoration-1"} relative flex gap-2 justify-center items-center cursor-pointer hover:underline `}
        onClick={() => setHomeDecorToggle((prev) => !prev)}
      >
        <span className='hover:underline'>Home Decor</span>
        <img
          src={arrow}
          className={`transform ${HomeDecorToggle ? '' : 'rotate-180'} w-3 h-3 object-contain`}
          alt=""
        />
        <DecorMenu show={HomeDecorToggle}/>
      </button>

      <button>Festive Decor</button>
      <button>Corporate Gifting</button>
    </div>
  );
};

export default Navbar;
