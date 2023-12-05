"use client"
import Html from './icon/Html'
import Css from './icon/Css'
import Ireact from './icon/Ireact'
import MetarialUi from './icon/MetarialUi'
import Node from './icon/Node'
import Nest from './icon/Nest'
import ItemEx from './ItemEx'

function Expertis() {
  
  const el: {
    name: string,
    icons: React.JSX.Element[]
  }[] = [
      {
        name: 'Web Design',
        icons: [
          <Html key={1} time={.7} />,
          <Css key={2} time={.7} />
        ]
      },
      {
        name: 'Front End Development',
        icons: [
          <Ireact key={3} time={1} />,
          <MetarialUi key={3} time={1} />
        ]
      }, {
        name: 'Back End Development',
        icons: [
          <Node key={3} time={1.5} />,
          <Nest key={4} time={1.5} />
        ]
      }
    ]
  
  return (
    <div className='w-full mt-5 flex flex-wrap justify-around'>
      {
        el.map((e, i) => {
          return <ItemEx i={i} key={e.name} name={e.name} icons={e.icons}/>
        })
      }
    </div>
  )
}

export default Expertis