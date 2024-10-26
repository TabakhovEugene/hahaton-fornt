// src/components/Header.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    closeMenu();
    navigate('/');
  };

  const handleGallery = () => {
    closeMenu();
    navigate('/gallery');
  };

  const handleGenerations = () => {
    closeMenu();
    navigate('/generations'); // Переход на GenerationsScreen
  };

  const handleProfile = () => {
    closeMenu();
    navigate('/user');
  };

  const handleLogoClick = () => {
    navigate('/lobby');
  };

  const handleLook = () => {
    closeMenu();
    navigate('/look');
  };

  return (
    <header className="header">
      <div className="header-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        Логотип
      </div>
      <div className="header-menu">
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        {menuOpen && (
          <div className="dropdown-menu" onClick={closeMenu}>
            <a href="#" onClick={handleProfile}>Профиль</a>
            <a href="#" onClick={handleLook}>Лук на сегодня</a> 
            <a href="#" onClick={handleGallery}>Список одежды</a>
            <a href="#" onClick={handleGenerations}>История генераций</a> 
            <a href="#" onClick={handleLogout}>Выйти</a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
