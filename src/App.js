import './App.css'
import Board from './components/Board'
import { useState } from 'react'

function App() {
  // const [game, finished] = useState(false)
  const [winner, isWinner] = useState(false)


  return (
    <>
      <main className='min-h-screen'>
        <div className='board flex justify-center w-full'>
          <div>
            <Board
              // game={game}
              // finished={finished}
              winner={winner}
              isWinner={isWinner}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
