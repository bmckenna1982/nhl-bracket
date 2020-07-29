import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav role='navigation' className='nav' >
          <ul className='nav_list close' id='nav_list'>
            <li className='nav_item'>Home</li>
            <li className='nav_item'>Leader Board</li>
            <li className='nav_item'>Qualifiers</li>
            <li className='nav_item'>Bracket</li>
            <li className='nav_item'>Log in</li>
          </ul>
          <div className='hamburger' onClick={changeNav} id='hamburger'>
            <div className='nav_bar bar1'></div>
            <div className='nav_bar bar2'></div>
            <div className='nav_bar bar3'></div>
          </div>
          <div className='app_name'>ATL Hockey Bracket</div>
        </nav>
        <main role='main'>
          <header class='calendar_month' role='banner'>
            <h1>Qualifying Round</h1>
            <div class="conference">
              <h2>Eastern Conference</h2>
              <p>Switch conferences:</p>
              <button type="button" class="bttn conf-bttn">Eastern</button>
              <button type="button" class="bttn conf-bttn active">Western</button>
            </div>
          </header>
        </main>
        <footer role='contentinfo'>Footer</footer>
      </div>
    );
  }

}

export default App;
