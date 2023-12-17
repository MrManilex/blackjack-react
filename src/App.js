import './App.css'
import Board from './components/Board'
import { useState } from 'react'

function App() {
  const [game, start] = useState(false)
  const [winner, isWinner] = useState(false)

  const handleStartGame = () => {
    // logic to start the game
    start(true)
  }


  return (
    <>
      <main className='min-h-screen bg-green-700'>
        <div className='board flex justify-center w-full'>
          <div>
            {game ?
              <>
                <Board
                  // game={game}
                  // finished={finished}
                  winner={winner}
                  isWinner={isWinner}
                />
              </>
              :
              <>
                <button className='btn btn-primary' onClick={handleStartGame}>
                  Start Game
                </button>
              </>
            }
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
