import React from 'react'
import { BsArrowUpCircle} from "react-icons/bs";

function Footer() {
  return (
      <div className='bottom'>
          <div >
              <BsArrowUpCircle className='arrow'/>
              <p>Fewer <span>d</span>etails</p>
          </div>
          <button><span>E</span>nd task</button>
    </div>
  )
}

export default Footer