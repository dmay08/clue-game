import React from 'react'
import Gameplay from './components/Gameplay/GamePlay.js'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Clue</h1>
                {/* <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a> */}

                <Gameplay />
            </header>
        </div>
    )
}

export default App
