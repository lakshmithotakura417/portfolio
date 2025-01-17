import React from 'react';
import heroimage from '../components/assets/heroImage.png'
import { MdOutlineArrowForwardIos } from "react-icons/md";
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
              <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Frontend Developer</h2>
              <p className='text-gray-500 py-4 max-w-md'>I have 3 years of experience bulding and designing software
                currtenly,i love to work on web applications using technologies
                like html,css,javascript,react,tailwind
              </p>
              <div>
                <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                  Portfolio
                  <span className='hover:rotate-90 duration-300'><MdOutlineArrowForwardIos size={25} className='ml-1'/></span>
                </button>
              </div>
            </div>
            <div>
              <img src={heroimage} alt="hero_image" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
           
        </div>
    </div>
  )
}

export default Home
