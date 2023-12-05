'use client'
import BallCanvas from './Ball'
import Progress from './Progress'

function Techitem({ color, progress, name, icon }: { color: string, progress: number, name: string, icon: string }) {


    return (
        <div className='w-[90%] h-[300px] sm:h-[195px] md:h-[180px] mx-auto flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0'>
            <div className='w-[180px] h-[200px] sm:w-[150px] sm:h-[160px] flex flex-col justify-around items-center rounded-md glassBg glow'>
                <h4 className='font-semibold text-[15px] pop text-cyan-100'>{name}</h4>
                <div className='w-[120px] h-[120px] sm::w-[100px] sm:h-[100px]'>
                    <BallCanvas icon={icon} />
                </div>
            </div>
            <Progress color={color} progress={progress} />
        </div>
    )
}

export default Techitem