import React, { useEffect, useState, useRef } from 'react'
import Instructions from '../Instructions/Instructions.js'
import './GamePlay.css'


const Gameplay = () => {

    const [showPlay, setShowPlay] = useState(true)
    const [showNumberBoard, setShowNumberBoard] = useState(false)

    const numberPlayers = [3, 4, 5, 6]

    const numberBoard = num => {
        return <div className="player-number">{num}</div>
    }

    function toggleStart() {
        setShowNumberBoard(!showNumberBoard)
        setShowPlay(!showPlay)
    }

    return (
        <div className="game-board">
            {showPlay &&
                <React.Fragment>
                    <Instructions />
                    <div
                        className="play"
                        onClick={toggleStart}
                    >Play</div>
                </React.Fragment>
            }
            {showNumberBoard &&
                <React.Fragment>
                    <div>{numberPlayers.map(num => {
                        return numberBoard(num)
                    })}</div>
                    <div onClick={toggleStart}>back</div>
                </React.Fragment>
            }
        </div>
    )
}

export default Gameplay