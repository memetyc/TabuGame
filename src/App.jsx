import { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';

function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'playing', 'end'
  const [currentTeam, setCurrentTeam] = useState('blue'); // 'blue' veya 'red'
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);


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

    <a target='_blank' className="text-primary text-sm bottom-1 absolute left-1/2 -translate-1/2" href="https://www.helloworldyazilim.com/">Hello World Yazılım Akademi</a>
    </div>
  );
}

export default App;