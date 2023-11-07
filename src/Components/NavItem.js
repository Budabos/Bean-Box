import React from 'react'

const NavItem = (props) => {
  return (
      <li className='nav-icon-item'>
          <a href='#' className='icon-btn'>
              {props.icon}
          </a>
          
    </li>
  )
}

export default NavItem