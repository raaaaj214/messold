import React, { useEffect, useRef, useState } from 'react';
import starImg from "../assets/star.svg";
import Review from './Review';
import arrow from "../assets/collapse.png";

const reviews = [
    {
        name: "Samantha",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 4,
        postTime: "1 day ago",
        review: "I love this product. It's so easy to use. I can't imagine working without it. It's great!",
      },
    {
        name: "Samantha",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 4,
        postTime: "1 day ago",
        review: "I love this product. It's so easy to use. I can't imagine working without it. It's great!",
      },
    {
        name: "Samantha",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 4,
        postTime: "1 day ago",
        review: "I love this product. It's so easy to use. I can't imagine working without it. It's great!",
      },
    {
        name: "Samantha",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 4,
        postTime: "1 day ago",
        review: "I love this product. It's so easy to use. I can't imagine working without it. It's great!",
      },
    {
        name: "Samantha",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 4,
        postTime: "1 day ago",
        review: "I love this product. It's so easy to use. I can't imagine working without it. It's great!",
      },
    {
        name: "Samantha",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 4,
        postTime: "1 day ago",
        review: "I love this product. It's so easy to use. I can't imagine working without it. It's great!",
      },
    {
        name: "Samantha",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 4,
        postTime: "1 day ago",
        review: "I love this product. It's so easy to use. I can't imagine working without it. It's great!",
      },
    {
        name: "Samantha",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 4,
        postTime: "1 day ago",
        review: "I love this product. It's so easy to use. I can't imagine working without it. It's great!",
      },
    {
        name: "Samantha",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 4,
        postTime: "1 day ago",
        review: "I love this product. It's so easy to use. I can't imagine working without it. It's great!",
      },
    {
        name: "Samantha",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 4,
        postTime: "1 day ago",
        review: "I love this product. It's so easy to use. I can't imagine working without it. It's great!",
      },
    {
        name: "Samantha",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 4,
        postTime: "1 day ago",
        review: "I love this product. It's so easy to use. I can't imagine working without it. It's great!",
      },
    {
        name: "Samantha",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 4,
        postTime: "1 day ago",
        review: "I love this product. It's so easy to use. I can't imagine working without it. It's great!",
      },
    {
        name: "Samantha",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 4,
        postTime: "1 day ago",
        review: "I love this product. It's so easy to use. I can't imagine working without it. It's great!",
      },
];

const Testimonials = () => {
  const reviewRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    const { scrollLeft, scrollWidth, clientWidth } = reviewRef.current;

    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
  };

  useEffect(() => {
    const scrollableDiv = reviewRef.current;

    scrollableDiv.addEventListener("scroll", checkScrollPosition);

    checkScrollPosition();

    return () => {
      scrollableDiv.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scrollLeft = () => {
    if (reviewRef.current) {
        reviewRef.current.scrollBy({
          left: -320,
          behavior: "smooth",
        });
    }
  };

  const scrollRight = () => {
    if (reviewRef.current) {
        reviewRef.current.scrollBy({
          left: 320,
          behavior: "smooth",
        });

    }
  };

  return (
    <div className='w-full max-w-[1500px] px-2 md:px-6 flex flex-col justify-center items-start gap-8'>
      <div className='flex justify-between items-start w-full'>
        <div className='w-full'>
          <div className='flex gap-2'>
            <span className='text-[0.8rem]'>4.1</span>
            <span className='flex'>
              {Array.from({ length: 4 }).map((_, index) => (
                <img src={starImg} alt="star" key={index} className='w-3' />
              ))}
            </span>
          </div>
          <h6 className='text-gray-300 text-[0.8rem] font-semibold'>1,649 reviews</h6>
          <div className='text-[0.8rem] font-semibold'>
            Powered by <span className='text-[#E85992]'>Google</span>
          </div>
        </div>
        <div className='w-full flex justify-end items-start'>
          <button className='bg-[#E85992] text-white text-[0.7rem] font-bold rounded-3xl px-5 py-2'>WRITE A REVIEW</button>
        </div>
      </div>
      <div className='relative w-full'>
        <button
          onClick={scrollLeft}
          className={`absolute top-1/2 left-0 bg-black/55 shadow-xl block p-2 rounded-full ${isAtStart ? "opacity-20" : "opacity-100"}`}
          disabled={isAtStart}
        >
          <img src={arrow} className="-rotate-90 w-3" alt="<" />
        </button>
        <div ref={reviewRef} className="flex justify-center items-center pl-1 gap-5 overflow-x-auto no-scrollbar min-w-full">
          {reviews && reviews.map((review, index) => (
            <Review key={index} {...review} className="shrink-0" />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className={`absolute top-1/2 right-0 bg-black/55 shadow-xl block p-2 rounded-full ${isAtEnd ? "opacity-20" : "opacity-100"}`}
          disabled={isAtEnd}
        >
          <img src={arrow} className="rotate-90 w-3" alt=">" />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
