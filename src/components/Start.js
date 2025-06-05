import React from 'react';

export default function Start({ onStart }) {
  return (
    <div className="screen black-bg">
      <button className="big-gaz-button" onClick={onStart}>ГАЗ!</button>
    </div>
  );
}