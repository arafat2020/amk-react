"use client"
import Greating from "./Greating"
import Hand from "./Hand";
import { motion } from 'framer-motion'
import Name from "./Name";


function BannerContent() {
  return (
    <div
     className="w-full h-[500px] absolute top-0 left-0  bg-gradient-to-t from-black via-slate-900 to-blue-950 ">
      <div className="ml-6 mt-0 sm:mt-[100px] flex space-x-2 items-center">
        <Greating str="Hi" />{" "}
        <Greating str="There,"/>
        <motion.div
          initial={{
            width: '150px',
            height: '150px'
          }}
          animate={{
            width: '80px',
            height: '80px'
          }}
          transition={{
            duration: .7
          }}
        >
          <Hand />
        </motion.div>
        <Greating str="I'm" />
      </div>
      <div className="ml-6 mt-[-20px]">
       <div className="ml-[-20px] md:ml-0 flex space-x-4">
       <Name str="Arafat"/>
       <Name str="Mannan Jr."/>
       </div>
        <motion.p
        initial={{
          opacity:0,
          bottom:-50
        }}
        animate={{
          opacity:1,
          bottom:0
        }}
        transition={{
          delay:.7
        }}
         className="text-cyan-300 font-sans font-semibold text-[1rem] md:text-xl">
          I{`'`}m a Full Stack Developer
        </motion.p>
        <motion.p
        initial={{
          opacity:0,
          bottom:-50
        }}
        animate={{
          opacity:1,
          bottom:0
        }}
        transition={{
          delay:.7
        }}
         className="text-cyan-300 font-sans font-semibold text-[1rem] md:text-xl">
          I Develop Interactive Web App
        </motion.p>
      </div>


    </div>
  )
}

export default BannerContent