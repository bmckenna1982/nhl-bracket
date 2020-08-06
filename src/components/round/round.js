import React, { Component } from 'react'

class Round extends Component {
    render() {
      return (
        <div className='qualifier-round'>
          <div className='qualifier-matchup'>
            <div className="qualifier-matchup-seed">
              {this.props.highSeed}
            </div>
            <div className="qualifier-matchup-seed">
              {this.props.lowSeed}
            </div>
          </div>
          <div className='qualifier-matchup-winner'>
            <select name="winner" id="winner">
              <option selected value="Pick a winner">Winner</option>
              <option value="Calgary">Calgary</option>
              <option value="Winnipeg">Winnipeg</option>
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
      )
    }
  }

  export default Round