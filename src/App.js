import React, { useState } from 'react';
import Start from './components/Start';
import Game from './components/Game';
import Result from './components/Result';
import './styles.css';

function App() {
  const [screen, setScreen] = useState('start');
  const [score, setScore] = useState(0);

  const handleStart = () => setScreen('game');
  const handleFinish = (finalScore) => {
    const queue = JSON.parse(localStorage.getItem('gaz_queue') || '[]');
    queue.push({ score: finalScore, time: Date.now() });
    localStorage.setItem('gaz_queue', JSON.stringify(queue));
    setScore(finalScore);
    setScreen('result');
  };

  return (
    <>
      {screen === 'start' && <Start onStart={handleStart} />}
      {screen === 'game' && <Game onFinish={handleFinish} />}
      {screen === 'result' && <Result score={score} />}
    </>
  );
}

export default App;