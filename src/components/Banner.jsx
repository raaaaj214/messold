import React from 'react'
import bannerVideo from "../assets/banner.mp4"

const Banner = () => {
  return (
    <section className='w-full relative'>
        <video controls={false} autoPlay={true} loop={true} className='w-full'>
          <source type='video/mp4' src={bannerVideo} />
        </video>
    </section>
  )
}

export default Banner