import { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';

function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'playing', 'end'
  const [currentTeam, setCurrentTeam] = useState('blue'); // 'blue' veya 'red'
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
console.log(gameState);

  return (
    <div className="App">
      {gameState === 'start' && <StartScreen setGameState={setGameState} />}
      {gameState === 'playing' && (
        <GameScreen
          currentTeam={currentTeam}
          setCurrentTeam={setCurrentTeam}
          team1Score={team1Score}
          setTeam1Score={setTeam1Score}
          team2Score={team2Score}
          setTeam2Score={setTeam2Score}
          setGameState={setGameState}
        />
      )}
      {gameState === 'end' && (
        <ResultScreen team1Score={team1Score} team2Score={team2Score} />
      )}
    </div>
  );
}

export default App;