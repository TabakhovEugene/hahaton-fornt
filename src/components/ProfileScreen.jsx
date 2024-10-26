// src/components/UserScreen.jsx
import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import './ProfileScreen.css';

const ProfileScreen = () => {
  const navigate = useNavigate(); // Инициализация navigate
  const handleLogout = () => {
    
    navigate('/'); // Переход на AuthScreen
  };

  return (
    <div className="user-screen">
      <Header />
      <div className="user-content">
        <div className="user-info">
          <div className="user-icon">👤</div>
          <div className="user-details">
            <div className="username">username: user1</div>
            <button className="logout-button" onClick={handleLogout}>Выйти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
