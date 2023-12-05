'use client'
import StarsCanvas from './Star'
import Techitem from './Techitem'

function Tech() {
    type Item = {
        name: string,
        icon: string,
        progress: number,
        className: string
    }
    const icons: Item[] = [
        {
            name: '<HTML/>',
            icon: '/tech/html.svg',
            progress: 85,
            className: 'to-amber-700'
        },
        {
            name: '#CSS',
            icon: '/tech/css.svg',
            progress: 75,
            className: 'to-sky-600'
        },
        {
            name: 'JavaScript{}',
            icon: '/tech/js.svg',
            progress: 65,
            className: 'bg-yellow-600'
        },
        {
            name: '<React JS/>',
            icon: '/tech/react.svg',
            progress: 75,
            className: 'bg-blue-600'
        },
        {
            name: 'Photo Shop',
            icon: '/tech/ap.svg',
            progress: 35,
            className: 'to-blue-900'
        },
        {
            name: 'Figma',
            icon: '/tech/figma.svg',
            progress: 35,
            className: 'to-orange-600'
        }, {
            name: 'Node js',
            icon: '/tech/nodejs.svg',
            progress: 55,
            className: 'to-green-700'
        }, {
            name: 'Nest js',
            icon: '/tech/nestjs.svg',
            progress: 55,
            className: 'bg-rose-700'
        }

    ]
    return (
        <div className='w-full h-auto relative mt-10'>
            <StarsCanvas />
            <div className=' w-full h-auto z-20 flex flex-wrap justify-around pb-2 '>

                {
                    icons.map((e)=>{
                        return <Techitem key={e.name} name={e.name} icon={e.icon} progress={e.progress} color={e.className}/>
                    })
                }

            </div>
        </div>
    )
}

export default Tech