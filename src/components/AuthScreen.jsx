// src/components/AuthScreen.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import Header from './Header';
import './AuthScreen.css';

function AuthScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Инициализация navigate

  const handleLogin = () => {
    // Здесь может быть логика проверки логина и пароля
    navigate('/lobby'); // Переход на Lobby при успешном входе
  };

  return (
    <div className="auth-screen">
      <Header />
      <div className="auth-content">
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
        <button className="login-button" onClick={handleLogin}>
          Войти
        </button>
      </div>
    </div>
  );
}

export default AuthScreen;
