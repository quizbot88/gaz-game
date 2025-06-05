import React, { useEffect, useState } from 'react';

export default function Game({ onFinish }) {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onFinish(score);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="screen">
      <h1>⏱ {timeLeft}s</h1>
      <h2>Нажатий: {score}</h2>
      <img
        src="./big-red-button.jpg"
        alt="button"
        className="click-button"
        onClick={() => setScore(score + 1)}
      />
    </div>
  );
}