import React from 'react'
import Figure from './Figure'

function Table({text,figure}) {
  return (
      <div className='tabledata'>
          <h3 className='tablehead'>{text}</h3>
          <div className='tablecells'>
              <Figure figure={figure[0]} unit='%'/>
              <Figure figure={figure[1]} unit='MB'/>
              <Figure figure={figure[2]} unit='MB/s'/>
              <Figure figure={figure[3]} unit='Mbps'/>
          </div>
    </div>
  )
}

export default Table