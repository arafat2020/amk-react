import { useProgress } from '@react-three/drei'

function Loader() {
    const { progress } = useProgress()
    console.log(progress.toFixed());
    
    return <div className="w-full h-[500px] flex flex-col justify-around items-center">
        <div className='flex flex-col items-center'>
            <div className='w-[150px] h-[150px] animate-spin border-t-[5px] border-t-cyan-500 rounded-full flex justify-around items-center'>

            </div>
            <p className='font-sans font-extrabold text-[40px] text-cyan-100 m-auto'>
                {progress.toFixed()}%
            </p>
        </div>

    </div>
}

export default Loader