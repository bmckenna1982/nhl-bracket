import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
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

class Nav extends Component {
  render() {
    function changeNav(e) {
      e.preventDefault()
      document.querySelector('#hamburger').classList.toggle('open')
      document.querySelector('#nav-list').classList.toggle('close')
    }
    return (
      <nav role='navigation' className='nav' >
        {/* <ul className='nav-list close' id='nav_list'>
          <li className='nav-item'>Home</li>
          <li className='nav-item'>Leader Board</li>
          <li className='nav-item'>Qualifiers</li>
          <li className='nav-item'>Bracket</li>
          <li className='nav-item'>Log in</li>
        </ul> */}
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

class Qualifier extends Component {
  render() {
    return (
      <div class='qualifier-conference-container'>
        <Round highSeed="Calgary" lowSeed="Winnipeg" />
        <div class='qualifier-round'>
          <div class='qualifier-matchup'>
            <div class="qualifier-matchup-seed">
              Edmonton
          </div>
            <div class="qualifier-matchup-seed">
              Chicago
          </div>
          </div>
          <div class='qualifier-matchup-winner'>
            <select name="winner" id="winner">
              <option selected value="Pick a winner">Winner</option>
              <option value="Calgary">Edmonton</option>
              <option value="Winnipeg">Chicago</option>
            </select>
          </div>
          <div class='qualifier-matchup-duration'>
            <select name="duration" id="duration">
              <option selected value="Select series duration">Series duration</option>
              <option value="3">3 games</option>
              <option value="4">4 games</option>
              <option value="5">5 games</option>
            </select>
          </div>
        </div>
        <div class='qualifier-round'>
          <div class='qualifier-matchup'>
            <div class="qualifier-matchup-seed">
              Vancouver
          </div>
            <div class="qualifier-matchup-seed">
              Minnesota
          </div>
          </div>
          <div class='qualifier-matchup-winner'>
            <select name="winner" id="winner">
              <option selected value="Pick a winner">Winner</option>
              <option value="Calgary">Vancouver</option>
              <option value="Winnipeg">Minnesota</option>
            </select>
          </div>
          <div class='qualifier-matchup-duration'>
            <select name="duration" id="duration">
              <option selected value="Select series duration">Series duration</option>
              <option value="3">3 games</option>
              <option value="4">4 games</option>
              <option value="5">5 games</option>
            </select>
          </div>
        </div>
        <div class='qualifier-round'>
          <div class='qualifier-matchup'>
            <div class="qualifier-matchup-seed">
              Nashville
          </div>
            <div class="qualifier-matchup-seed">
              Phoenix
          </div>
          </div>
          <div class='qualifier-matchup-winner'>
            <select name="winner" id="winner">
              <option selected value="Pick a winner">Winner</option>
              <option value="Calgary">Nashville</option>
              <option value="Winnipeg">Phoenix</option>
            </select>
          </div>
          <div class='qualifier-matchup-duration'>
            <select name="duration" id="duration">
              <option selected value="Select series duration">Series duration</option>
              <option value="3">3 games</option>
              <option value="4">4 games</option>
              <option value="5">5 games</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

class Round extends Component {
  render() {
    return (
      <div class='qualifier-round'>
        <div class='qualifier-matchup'>
          <div class="qualifier-matchup-seed">
            {this.props.highSeed}
          </div>
          <div class="qualifier-matchup-seed">
            {this.props.lowSeed}
          </div>
        </div>
        <div class='qualifier-matchup-winner'>
          <select name="winner" id="winner">
            <option selected value="Pick a winner">Winner</option>
            <option value="Calgary">Calgary</option>
            <option value="Winnipeg">Winnipeg</option>
          </select>
        </div>
        <div class='qualifier-matchup-duration'>
          <select name="duration" id="duration">
            <option selected value="Select series duration">Series duration</option>
            <option value="3">3 games</option>
            <option value="4">4 games</option>
            <option value="5">5 games</option>
          </select>
        </div>
      </div>
    )
  }
}


export default App;
