import { motion } from 'framer-motion'

function MetarialUi({ time = 1.5 }: { time?: number }) {
    return (
        <svg height={100} preserveAspectRatio="xMidYMid" viewBox="0 0 256 204" width={100} xmlns="http://www.w3.org/2000/svg"><motion.path

            initial={{
                pathLength: 0,
                scale: 0
            }}
            animate={{
                pathLength: 1,
                scale: 1
            }}
            transition={{
                duration: time
            }} d="m0 110.848v-110.848l96 55.424v36.9493333l-64-36.9493333v73.898667z" fill="#00b0ff" /><motion.path

                initial={{
                    pathLength: 0,
                    scale: 0
                }}
                animate={{
                    pathLength: 1,
                    scale: 1
                }}
                transition={{
                    duration: time
                }} d="m96 55.424 96-55.424v110.848l-64 36.949333-32-18.474666 64-36.9493337v-36.9493333l-64 36.9493333z" fill="#0081cb" /><motion.path

                initial={{
                    pathLength: 0,
                    scale: 0
                }}
                animate={{
                    pathLength: 1,
                    scale: 1
                }}
                transition={{
                    duration: time
                }} d="m96 129.322667v36.949333l64 36.949333v-36.949333z" fill="#00b0ff" /><motion.path

                initial={{
                    pathLength: 0,
                    scale: 0
                }}
                animate={{
                    pathLength: 1,
                    scale: 1
                }}
                transition={{
                    duration: time
                }} d="m160 203.221333 96-55.424v-73.8986663l-32 18.4746666v36.9493337l-64 36.949333zm64-147.797333v-36.9493333l32-18.4746667v36.9493333z" fill="#0081cb" /></svg>
    )
}

export default MetarialUi