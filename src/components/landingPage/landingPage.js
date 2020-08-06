import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
  render() {
    return (
      <div className='landing-page'>
        <header role="banner">
          <h1>NHL 2020 Bracket including qualifiers</h1>
          <p>Bracket challenge for the 2020 NHL playoffs. Qualifying rounds will be first then when the seeding round robin
        is complete the bracket will be ale to be filled out.</p>
          <Link to="/log-in">
            <button type="button" className="get-started">Get started</button>
          </Link>
        </header>

        <section>
          <header>
            <h2>Qualifying rounds</h2>
            <p>Earn 5 points for each correctly predicted series winner</p>
            <p>Earn 1 bonus point for correctly predicting series game duration</p>
          </header>
        </section>
        <section>
          <header>
            <h2>Round 1</h2>
            <p>Each contestant will be able to fill out a complete bracket, whether or not they correctly predicted the
          qualifying winner.</p>
            <p>Earn 10 points for each correctly predicted series winner</p>
            <p>Earn 3 bonus points for correctly predicting series game duration</p>
          </header>
        </section>
        <section>
          <header>
            <h2>Round 2</h2>
            <p>Earn 25 points for each correctly predicted series winner</p>
            <p>Earn 3 bonus points for correctly predicting series game duration</p>
          </header>
        </section>
        <section>
          <header>
            <h2>Round 3</h2>
            <p>Earn 50 points for each correctly predicted series winner</p>
            <p>Earn 3 bonus points for correctly predicting series game duration</p>
          </header>
        </section>
        <section>
          <header>
            <h2>Round 4 Stanley Cup Final</h2>
            <p>Earn 100 points for each correctly predicted series winner</p>
            <p>Earn 3 bonus points for correctly predicting series game duration</p>
          </header>
        </section>
        <section>
          <header>
            <h2>Tie Breaker</h2>
            <p>If more than 1 person ties for first place the tie breaker will be the prediction of the total amount of
          goals in the finals.</p>
          </header>
        </section>
      </div>
    )
  }
}

export default LandingPage