import React,{ Component } from 'react'
import { NavLink } from 'react-dom'

class Nav extends Component {
    render() {
      function changeNav(e) {
        e.preventDefault()
        document.querySelector('#hamburger').classList.toggle('open')
        document.querySelector('#nav-list').classList.toggle('close')
      }
      return (
        <nav role='navigation' className='nav' >
          <ul className='nav-list close' id='nav_list'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Leader Board</li>
            <li className='nav-item'>Qualifiers</li>
            <li className='nav-item'>Bracket</li>
            <li className='nav-item'>Log in</li>
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