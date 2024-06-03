import React from 'react';
import MyImage from '../../images/photo.jpg';
import {motion} from 'framer-motion';

function Header() {
  return (
    <div className="shadow w-full fixed bg-violet-700 h-24 lg:h-28 shadow-black z-10">
      <div className="container mx-auto h-20 flex flex-col">
        <nav className="flex w-full h-8 lg:h-24 my-auto md:mb-16">
          <div className='mt-3 ml-3 lg:ml-5 rounded-full border-[2px] border-white shadow-black shadow-md bg-white h-20 w-20 lg:w-36 lg:h-36 flex justify-center items-center overflow-hidden'>
            <img src={MyImage} alt="logo" className="" />
          </div>
          <div className='self-center h-8 mx-auto text-center md:mt-10 lg:mb-16 '>
            <motion.div className='text-xl md:text-2xl lg:text-5xl font-sans text-white text-shadow'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.25}}
            whileHover={{scale: 1.1,
              textShadow: '0px 0px 8px rgb(255, 255, 255)'}}
            >
              Yashwanth Kumar Chavva
            </motion.div>
            <div className='flex justify-center flex-col md:flex-row opacity-75'>
            <div className='text-xs md:text-lg lg:text-xl font-sans text-white text-shadow'>
              chavvayashwanthkumar02@gmail.com&nbsp;
            </div>
            <span className='text-white md:block hidden '>|</span>
            <div className='text-xs md:text-lg lg:text-xl font-sans text-white text-shadow'>
              &nbsp;+91 90141 34478&nbsp;
            </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
