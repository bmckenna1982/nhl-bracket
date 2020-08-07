import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'

import TopBar from '../topBar/topBar'
import Hamburger from '../hamburger/hamburger'
import LandingPage from '../landingPage/landingPage'
import LogIn from '../logIn/login'
import LeaderBoard from '../leaderBoard/leaderBoard'
import Qualifier from '../qualifier/qualifier'
import Nav from '../nav/nav'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hamburger />
        <Nav />
        <main role='main'>
          <TopBar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/log-in" component={LogIn} />
            <Route exact path="/leader-board" component={LeaderBoard} />
            <Route exact path="/qualifier" component={Qualifier} />
          </Switch>


        </main>
        <footer role='contentinfo'>Footer</footer>
      </div>
    );
  }
}

export default withRouter(App);