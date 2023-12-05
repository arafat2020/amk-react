"use client"
import { useEffect, useState } from 'react'
import Item from './Item'
import Logo from './Logo'
import Sub from './Sub'
import ItemSm from './ItemSm'
import Blog from './icon/Blog'
import Me from './icon/Me'
import Show from './icon/Show'
import { motion, Variants } from "framer-motion";

function Nav() {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(scrollY)
        })
    }, [])

    const navLinks: {
        name: string,
        endPoint: string,
        icon: React.JSX.Element
    }[] = [
            {
                name: 'Blog',
                endPoint: 'Blog',
                icon: <Blog />
            }, {
                name: 'About Me',
                endPoint: 'Me',
                icon: <Me />
            }, {
                name: 'My Showcase',
                endPoint: 'showcase',
                icon: <Show />
            }
        ]
    const vr: Variants = {
        hidden: {
            backgroundColor: "#172554"
        },
        open: {
            backgroundColor: 'rgb(0 0 0)'
        }
    }
    return (
        <motion.div
            variants={vr}
            animate={scroll < 320 ? 'hidden' : 'open'}
            transition={{duration:.7,type:'spring',}}
            className='w-screen md:w-full flex px-3 justify-between items-center sticky top-0 z-50 bg-black'>
            <div className='flex items-center'>
                <div className='w-[100px] md:w-[150px]'>
                    <Logo />
                </div>
                <Sub str='Mannan Jr.' />
            </div>
            <ul
                className='hidden md:flex justify-around space-x-4 ml-2 '
            >
                {
                    navLinks.map((e, i) => {
                        return <Item key={e.name} name={e.name} endPoint={e.endPoint} delay={i * .15} />
                    })
                }
            </ul>
            <ItemSm arr={navLinks} />
        </motion.div>
    )
}

export default Nav