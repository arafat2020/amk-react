"use client"
import { motion } from 'framer-motion'

function Item({ name, delay }: { name: string, endPoint: string, delay: number }) {

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.5, y: -25 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}

    >
      <motion.button
        className='bg-gradient-to-tr from-cyan-300 to-slate-100  text-zinc-900 font-semibold font-sans px-2 py-1 rounded-lg'
        whileHover={{
          scale: 1.15,
          backgroundColor: 'aquamarine',
          position: 'static',
        }}
        transition={{duration:.4}}
      >
        {name}
      </motion.button>
    </motion.li>
  )
}

export default Item