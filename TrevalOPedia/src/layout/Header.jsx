import React from 'react'
import {logo} from "../images/react.png"
function Header() {
  return (
    <div>
        <img src={logo} alt="" style={{height:"35px", width:"top"}}/>
        <span className='h2 pt-4 text-50'>React-Travel</span>
    </div>
  )
}

export default Header