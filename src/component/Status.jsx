import React from 'react'
import SingleStat from './SingleStat'

function Status() {
  return (
      <div className='info'>
          <div className='titlebar'><h3>Name</h3>
          <div className="back"><h3>Status</h3></div></div>
          

          <div className='details'>
             <SingleStat title='CPU' fig='24%'/>
             <SingleStat title='Memory' fig='34%'/>
             <SingleStat title='Disk' fig='21%'/>
             <SingleStat title='Network' fig='0%'/>
          </div>
    </div>
  )
}

export default Status