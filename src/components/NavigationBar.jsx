import React from 'react'

const NavigationBar = () => {
  return (
    <ul className='flex w-full justify-around py-4 text-base font-bold h-fit max-md'>
        <li className='text-pink-500 cursor-pointer hover:opacity-50 duration-1000 max-h-full'>Home</li>
        <li className='text-white cursor-pointer hover:opacity-50 duration-1000 max-h-full'>Men</li>
        <li className='text-pink-500 cursor-pointer hover:opacity-50 duration-1000 max-h-full'>Women</li>
        <li className='text-white cursor-pointer hover:opacity-50 duration-1000 max-h-full'>Kids</li>
    </ul>
  )
}

export default NavigationBar
