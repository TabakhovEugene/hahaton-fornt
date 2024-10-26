// src/components/ItemScreen.jsx
import React from 'react';
import Header from './Header';
import './ItemScreen.css';

const ItemScreen = () => {
  return (
    <div className="item-screen">
      <Header />
      <div className="item-content">
        {/* Изображение одежды */}
        <div className="item-image" style={{ backgroundImage: 'url(/path/to/image)' }}>
          {/* Здесь можно добавить изображение или оставить пустым, если используется фоновое изображение */}
        </div>
        
        {/* Блок выбора цвета */}
        <div className="item-color-selection">
          <h2 className="item-section-title">Выбор цвета</h2>
          <div className="item-colors">
            <div className="item-color" style={{ backgroundColor: 'red' }}></div>
            <div className="item-color" style={{ backgroundColor: 'green' }}></div>
            <div className="item-color" style={{ backgroundColor: 'blue' }}></div>
            <div className="item-color rainbow"></div>
          </div>
        </div>
        
        {/* Блок выбора типа */}
        <div className="item-type-selection">
          <h2 className="item-section-title">Выбор типа</h2>
          <select className="item-select">
            <option>Головной убор</option>
            <option>Верх</option>
            <option>Штаны</option>
            <option>Ботинки</option>
          </select>
        </div>
        
        {/* Блок выбора температуры */}
        <div className="item-temperature-selection">
          <h2 className="item-section-title">Выбор температуры</h2>
          <select className="item-select">
            <option>0-5</option>
            <option>5-10</option>
            <option>10-15</option>
            <option>15-20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ItemScreen;
