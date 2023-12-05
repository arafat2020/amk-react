"use client"
import { motion } from "framer-motion";

function Hand() {
  return (
    <motion.svg
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{

        duration: .7
      }}
      viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><motion.path initial={{
        pathLength: 0
      }} animate={{
        pathLength: 1
      }} transition={{
        duration: 1,delay:.3, ease: 'easeInOut'
      }} d="m18.6575 19.2409c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3115 4.8183c.1552.2714.3458.5209.5667.742l11.5324 15.0998 2.6883 3.3878-7.8906-10.3314c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3115 4.8183c.1552.2714.3458.5209.5667.7421l7.8906 10.3312 6.2707 7.899c5.467 6.2731 14.5147 5.9306 20.7863.465 3.6045-3.1684 5.9226-7.5482 6.5154-12.3105.3858-4.2326.807-15.301.807-15.301-.1826-2.6008-3.1353-4.5234-3.5158-3.1802l-4.8939 9.7575-3.3657-4.2224 3.3657 4.2224-3.3657-4.2224-13.4651-17.2086c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3115 4.8183c.1552.2714.3458.5209.5667.742l4.2488 5.5631 6.4234 8.48-13.419-17.6801c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3116 4.8183c.1552.2714.3458.5209.5667.7421l14.6716 19.0145" fill="#fcea2b" /><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><motion.path initial={{
        pathLength: 0
      }} animate={{
        pathLength: 1
      }} transition={{
        duration: 1,delay:.3, ease: 'easeInOut'
      }} d="m18.6575 19.2409c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3115 4.8183c.1552.2714.3458.5209.5667.742l11.5324 15.0998 2.6883 3.3878-7.8906-10.3314c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3115 4.8183c.1552.2714.3458.5209.5667.7421l7.8906 10.3312 6.2707 7.899c5.467 6.2731 14.5147 5.9306 20.7863.465 3.6045-3.1684 5.9226-7.5482 6.5154-12.3105.3858-4.2326.807-15.301.807-15.301-.1826-2.6008-3.1353-4.5234-3.5158-3.1802l-4.8939 9.7575-3.3657-4.2224 3.3657 4.2224-3.3657-4.2224-13.4651-17.2086c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3115 4.8183c.1552.2714.3458.5209.5667.742l4.2488 5.5631 6.4234 8.48-13.419-17.6801c-.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799 3.1256-1.3116 4.8183c.1552.2714.3458.5209.5667.7421l14.6716 19.0145" /><motion.path initial={{
        pathLength: 0
      }} animate={{
        pathLength: 1
      }} transition={{
        duration: 1,delay:.3, ease: 'easeInOut'
      }} d="m11.6726 42.8719c0 2.5663 1.747 4.6428 3.9059 4.6428" stroke-miterlimit="10" /><motion.path initial={{
        pathLength: 0
      }} animate={{
        pathLength: 1
      }} transition={{
        duration: 1,delay:.3, ease: 'easeInOut'
      }} d="m7.0614 42.4369c0 5.5959 3.8094 10.1241 8.5171 10.1241" stroke-miterlimit="10" /><motion.path initial={{
        pathLength: 0
      }} animate={{
        pathLength: 1
      }} transition={{
        duration: 1,delay:.3, ease: 'easeInOut'
      }} d="m45.2619 21.2377c0-2.5663-1.747-4.6428-3.9059-4.6428" stroke-miterlimit="10" /><motion.path initial={{
        pathLength: 0
      }} animate={{
        pathLength: 1
      }} transition={{
        duration: 1,delay:.3, ease: 'easeInOut'
      }} d="m49.8731 21.6727c0-5.5959-3.8094-10.1241-8.5171-10.1241" stroke-miterlimit="10" /></g></motion.svg>
  )
}

export default Hand