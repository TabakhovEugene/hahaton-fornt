// src/components/Lobby.jsx
import React from 'react';
import Header from './Header';
import './Lobby.css';

function Lobby() {
  return (
    <div className="lobby">
      <Header />
      <div className="lobby-content">
        <button className="lobby-button">Список одежды</button>
        <button className="lobby-button">Сгенерировать сет одежды</button>
        <button className="today-look-button">Ваш лук на сегодня</button>
      </div>
    </div>
  );
}

export default Lobby;
