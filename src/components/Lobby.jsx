// src/components/Lobby.jsx
import React from 'react';
import Header from './Header';
import './Lobby.css';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate

function Lobby() {
  const navigate = useNavigate(); // Инициализация navigate
  return (
    <div className="lobby">
      <Header />
      <div className="lobby-content">
        <button className="lobby-button" onClick={()=>{navigate('/gallery');}}>Список одежды</button>
        <button className="lobby-button" onClick={()=>{navigate('/look');}}>Сгенерировать сет одежды</button>
        <button className="today-look-button"  onClick={()=>{navigate('/look');}}>Ваш лук на сегодня</button>
      </div>
    </div>
  );
}

export default Lobby;
