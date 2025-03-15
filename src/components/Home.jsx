import React from 'react'
import NavigationBar from './NavigationBar';

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col max-w-full max-xl:gap-y-20">
    <NavigationBar></NavigationBar>
    <div className="h-full w-full  px-10 grid grid-cols-2  items-center max-xl:grid-cols-1 max-lg: pl-10 max-lg:pr-10">
      
      <div className='flex items-center max-xl:flex-col max-xl:items-start max-xl:gap-y-20 gap-x-10 '>
        <div className='flex flex-col items-start gap-y-20'>
          <p className='text-pink-600 font-lobster text-8xl max-md:text-6xl max-sm:text-5xl '>ALLURA</p>
          <p className='text-6xl leading-relaxed max-md:text-4xl max-sm:text-3xl text-pink-600 font-extrabold'>
          Brings out <span className='text-white'>the </span>Best <span className='text-white'>in </span>You</p>
        </div>
        <button className='bg-pink-600 border-none px-6 py-4 text-white rounded-full hover:opacity-50 duration-1000'>Explore</button>
      </div>
      
      <div className=''>
        <img className='' src="/xavier-teo-SxAXphIPWeg-unsplash-removebg (1).png" />
      </div>
    </div>
    </div>
  )
}

export default Home;
