import React, { Component } from 'react'
import './leaderBoard.css'

class LeaderBoard extends Component {
    render() {
        return (
            <div className="leader-board">
                <header className="header">
                    <h1>Leader Board</h1>
                </header>
                <div className="leader-board-list">
                    <div className="player-container">
                        <div className="player">Joe Fanning</div>
                        <div className="player-points">100</div>
                    </div>
                    <div className="player-container">
                        <div className="player">Brooke Fanning</div>
                        <div className="player-points">90</div>
                    </div>
                    <div className="player-container">
                        <div className="player">Ryan Larking</div>
                        <div className="player-points">80</div>
                    </div>
                    <div className="player-container">
                        <div className="player">Ted DeFehr</div>
                        <div className="player-points">70</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaderBoard