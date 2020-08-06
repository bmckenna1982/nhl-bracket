import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

class Nav extends Component {
  render() {
    function changeNav(e) {
      e.preventDefault()
      document.querySelector('#hamburger').classList.toggle('open')
      document.querySelector('#nav_list').classList.toggle('close')
    }
    return (
      <nav role='navigation' className='nav' >
        <ul className='nav-list close' id='nav_list'>
          <NavLink className='nav-item' to='/'>Home</NavLink>
          <NavLink className='nav-item' to='/leader-board'>Leader Board</NavLink>
          <NavLink className='nav-item' to='/qualifier'>Qualifiers</NavLink>
          <NavLink className='nav-item' to='/'>Bracket</NavLink>
          <NavLink className='nav-item' to='/log-in'>Log in</NavLink>
        </ul>
        <div className='hamburger' onClick={changeNav} id='hamburger'>
          <div className='nav-bar bar1'></div>
          <div className='nav-bar bar2'></div>
          <div className='nav-bar bar3'></div>
        </div>
        <div className='app-name'>ATL Hockey Bracket</div>
      </nav>
    )
  }
}

export default Nav