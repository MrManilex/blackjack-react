import './App.css';
import Board from './components/Board'

function App() {
  return (
    <>
      <main className='min-h-screen'>
        <div className='board flex justify-center'>
          <div>
            <Board />
          </div>
        </div>
        <div className='buttons flex justify-around'>
          {/* Make all buttons the same size. */}
          <div>
            <button className='btn btn-primary'>
              Hit
            </button>
            <button className='btn btn-secondary'>
              Stand
            </button>
          </div>
          <button className='btn btn-accent'>
            Reset
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
