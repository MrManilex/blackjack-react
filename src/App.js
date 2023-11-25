import './App.css';
import Board from './components/Board'

function App() {
  return (
    <div className="App">
      {/* 
        Create gameboard background.
        Create section for CPU side vs Player side.
        Add buttons for player to choose to Hit or Stand.
        Use terminology like Bust when losing.
        Incorporporate Bidding, Splitting, Betting (to some extent).
      */}
      <Board/>
    </div>
  );
}

export default App;
