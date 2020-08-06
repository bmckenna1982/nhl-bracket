import React,{ Component } from 'react'
import Round from '../round/round'

class Qualifier extends Component {
    render() {
      return (
        <div className='qualifier-conference-container'>
            <header className='calendar_month' role='banner'>
            <h1>Qualifying Round</h1>
            <div className="conference">
              <h2>Eastern Conference</h2>
              <p>Switch conferences:</p>
              <button type="button" className="bttn conf-bttn">Eastern</button>
              <button type="button" className="bttn conf-bttn active">Western</button>
            </div>
          </header>
          <Round highSeed="Calgary" lowSeed="Winnipeg" />
          <div className='qualifier-round'>
            <div className='qualifier-matchup'>
              <div className="qualifier-matchup-seed">
                Edmonton
            </div>
              <div className="qualifier-matchup-seed">
                Chicago
            </div>
            </div>
            <div className='qualifier-matchup-winner'>
              <select name="winner" id="winner">
                <option selected value="Pick a winner">Winner</option>
                <option value="Calgary">Edmonton</option>
                <option value="Winnipeg">Chicago</option>
              </select>
            </div>
            <div className='qualifier-matchup-duration'>
              <select name="duration" id="duration">
                <option selected value="Select series duration">Series duration</option>
                <option value="3">3 games</option>
                <option value="4">4 games</option>
                <option value="5">5 games</option>
              </select>
            </div>
          </div>
          <div className='qualifier-round'>
            <div className='qualifier-matchup'>
              <div className="qualifier-matchup-seed">
                Vancouver
            </div>
              <div className="qualifier-matchup-seed">
                Minnesota
            </div>
            </div>
            <div className='qualifier-matchup-winner'>
              <select name="winner" id="winner">
                <option selected value="Pick a winner">Winner</option>
                <option value="Calgary">Vancouver</option>
                <option value="Winnipeg">Minnesota</option>
              </select>
            </div>
            <div className='qualifier-matchup-duration'>
              <select name="duration" id="duration">
                <option selected value="Select series duration">Series duration</option>
                <option value="3">3 games</option>
                <option value="4">4 games</option>
                <option value="5">5 games</option>
              </select>
            </div>
          </div>
          <div className='qualifier-round'>
            <div className='qualifier-matchup'>
              <div className="qualifier-matchup-seed">
                Nashville
            </div>
              <div className="qualifier-matchup-seed">
                Phoenix
            </div>
            </div>
            <div className='qualifier-matchup-winner'>
              <select name="winner" id="winner">
                <option selected value="Pick a winner">Winner</option>
                <option value="Calgary">Nashville</option>
                <option value="Winnipeg">Phoenix</option>
              </select>
            </div>
            <div className='qualifier-matchup-duration'>
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

  export default Qualifier