import React, { useState } from 'react'
import menu from "../assets/menu.png"
import logo from "../assets/logo.png"
import search from "../assets/search.png"
import cart from "../assets/cart.png"
import Navbar from './Navbar'
import MobileMenu from './MobileMenu'
import Cart from './Cart'
import Search from './Search'

const Header = () => {
  const [openNav,setOpenNav] = useState(false)
  const [openCart,setOpenCart] = useState(false)
  const [openSearch,setOpenSearch] = useState(false)
  return (
    <header className='relative flex justify-between items-center px-4 md:px-12 py-2 lg:px-24 lg:py-5'>
      <div className='flex lg:hidden flex-col justify-center items-center' onClick={() => setOpenNav(!openNav)}>
        <img src={menu} alt="" className='w-6'/>
        <p className='text-[0.6rem]'>SHOP</p>
      </div>
      <MobileMenu open={openNav} setOpen={setOpenNav} />
      <Cart open={openCart} setOpen={setOpenCart}/>
      <Search open={openSearch} setOpen={setOpenSearch} />
      <div className='flex gap-5 justify-center items-center'>
      <a href="/">
      <img src={logo} alt="" className='w-28 h-14 object-cover'/>
      </a>
      <Navbar/>
      </div>
      <div className='flex items-center justify-between gap-4'>
     { !openSearch && <button className='flex flex-col justify-center items-center' onClick={() => setOpenSearch(!openSearch)} >
        <img src={search} alt="" className='w-6'/>
        <p className='text-[0.6rem]'>SEARCH</p>
      </button>}
      <button className='flex flex-col justify-center items-center' onClick={() => setOpenCart(!openCart)}>
        <img src={cart} alt="" className='w-6'/>
        <p className='text-[0.6rem]'>CART</p>
      </button>
      </div>
    </header>
  )
}

export default Header