import React from 'react';
import {motion} from 'framer-motion';

function Technology({ techName, image, weblink }) {
    return (
        <motion.a target="_blank" className="flex w-fit gap-0 rounded-lg border border-[#404040] bg-white px-2 py-1 text-xs text-black font-normal" 
        href={weblink}
        whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px rgb(109,40,217)' }}
        transition={
            { duration: 0.25,
            type: 'spring',
            stiffness: 120,}
        }
        >
        <img alt="ReactJS Icon" loading="lazy" decoding="async" data-nimg="1" className='text-transparent h-3 w-3 mr-[3px]' src={image} />
        {techName}</motion.a>
    );
}

export default Technology;
