// src/components/Header.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Инициализация navigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    closeMenu(); // Закрыть меню при выходе
    navigate('/'); // Переход на AuthScreen
  };

  return (
    <header className="header">
      <div className="header-logo">Логотип</div>
      <div className="header-menu">
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        {menuOpen && (
          <div className="dropdown-menu" onClick={closeMenu}>
            <a href="#">Профиль</a>
            <a href="#">Список одежды</a>
            <a href="#">История генерации</a>
            <a href="#" onClick={handleLogout}>Выйти</a> {/* Добавьте обработчик выхода */}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
