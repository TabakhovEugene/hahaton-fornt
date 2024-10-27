// src/components/AuthScreen.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './AuthScreen.css';

function AuthScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  navigate('/');
};

  const handleLogin = () => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    fetch('http://127.0.0.1:8000/login/', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access && data.refresh) {
          // Сохраняем токены в localStorage
          localStorage.setItem('accessToken', data.access);
          localStorage.setItem('refreshToken', data.refresh);
          // Перенаправляем на /lobby
          navigate('/lobby');
        } else {
          console.log('Ошибка входа: ' + data.message);
          // Выполняем выход в случае ошибки
          logout();
        }
      })
      .catch((error) => {
        console.error('Ошибка:', error);
        // Выполняем выход при возникновении ошибки
        logout();
      });
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
