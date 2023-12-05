"use client"

import { motion } from "framer-motion"
import Bar from "./Bar"
import  { useState } from "react"
import Cross from "./Cross"
import Logo from "./Logo"



function ItemSm({ arr }: {
    arr: {
        name: string,
        endPoint: string,
        icon: React.JSX.Element
    }[]
}) {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className="md:hidden">
            <div
                onClick={() => setOpen(open => !open)}
                className="w-[52px] cursor-pointer">
                <Bar />
            </div>
            {open ? <motion.div
                initial={{
                    width: 0,
                    height: 0,
                    borderRadius: 100
                }}
                animate={{
                    width: '100vw',
                    height: '100vh',
                    borderRadius: 0
                }}
                transition={{
                    duration: .7
                }}
                className="absolute top-0 right-0 bg-black ">
                <div
                    onClick={() => setOpen(open => !open)}
                    className="absolute top-3 right-0 w-[50px] cursor-pointer">
                    <Cross />
                </div>
                <motion.div
                    initial={{
                        display: 'node'
                    }}
                    animate={{
                        display: 'inline'
                    }}

                    className="w-full flex items-center">
                   <div className="w-[150px]">
                   <Logo />
                   </div>
                    <motion.hr
                        initial={{
                            width: 0
                        }}
                        animate={{
                            width: '100%'
                        }}
                        transition={{
                            duration: .7
                        }}
                        className="rounded-full h-[3px] bg-slate-500"
                    />
                    <div className="mt-4 w-full flex flex-col items-center">
                        {
                            arr.map((e, i) => {
                                return <motion.div
                                    initial={{
                                        marginBottom: 50,
                                        opacity: 0
                                    }}
                                    animate={{
                                        marginBottom: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: .7,
                                        duration: 3 * (i * .15)
                                    }}
                                    key={i} 
                                    className="cursor-pointer px-2 py-2 rounded-md flex justify-between m-2 w-[80%] bg-gradient-to-tr from-slate-300 via-cyan-200 to-slate-300">
                                    <p className="font-sans text-[20px] font-semibold text-slate-700">{e.name}</p>
                                    <div>{e.icon}</div>
                                </motion.div>
                            })
                        }
                    </div>
                </motion.div>
            </motion.div> : <motion.div
                initial={{

                    width: '100vw',
                    height: '100vh',
                    borderRadius: 0
                }}
                animate={{
                    width: 0,
                    height: 0,
                    borderRadius: 100
                }}
                transition={{
                    duration: .7
                }}
                className="absolute top-0 right-0 bg-black "
            >
            </motion.div>}
        </div>
    )
}

export default ItemSm