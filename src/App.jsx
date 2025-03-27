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
    <div className="min-h-[100dvh] flex relative flex-col items-center justify-center bg-gray-100 pb-5">
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

      <div className="absolute left-0 bottom-3 w-full flex justify-center">
        <a
          target='_blank'
          className="text-primary text-sm"
          href="https://www.helloworldyazilim.com/"
        >
          Hello World Yazılım Akademi
        </a>
      </div>

    </div>
  );
}

export default App;