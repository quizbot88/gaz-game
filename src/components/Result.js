import React from 'react';

export default function Result({ score }) {
  const queue = JSON.parse(localStorage.getItem('gaz_queue') || '[]');
  let outcome = "Ждём соперника...";

  if (queue.length >= 2) {
    const [first, second] = queue.slice(-2);
    if (first.time < second.time) {
      outcome = first.score > second.score ? "Вы победили! 💰" : "Вы проиграли 😞";
    } else {
      outcome = second.score > first.score ? "Вы победили! 💰" : "Вы проиграли 😞";
    }
  }

  return (
    <div className="screen">
      <h1>Ваш результат: {score}</h1>
      <p>{outcome}</p>
    </div>
  );
}