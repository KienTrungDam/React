import React from 'react'
import logo from "../../images/react.png"
function Header() {
  return (
    <div className='pt-3 pl-2'>
        <img src={logo} style={{height: "35px", verticalAlign: "top"}} />{" "}
        <span className="h2 pt-2 text-black-50">React-ReduxOPedia</span>
    </div>
  )
}

export default Header
