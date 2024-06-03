import React from 'react'
import {motion} from 'framer-motion'

function Project({title, domain, description}) {
  return (
    <motion.div className="w-1/2 ml-8 mt-4"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, type: 'spring', stiffness: 120 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-start items-center gap-16 mt-2">
        <div className="flex flex-col">
          <div className="text-base font-bold font-sans">
            {title}
          </div>
          <div className="text-xs">{domain}</div>
        </div>
      </div>
      <div className="flex flex-col text-sm">
        {description}
      </div>
    </motion.div>
  )
}

export default Project