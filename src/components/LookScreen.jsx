// src/components/LookScreen.jsx
import React from 'react';
import Header from './Header';
import './LookScreen.css'; // Используем новые стили для LookScreen

const LookScreen = () => {
  // Данные для каждой категории
  const categories = [
    {
      title: 'Головные уборы',
      items: [
        'Шляпа',
        'Берет',
        'Кепка',
        'Ковбойская шляпа',
        'Бандана',
      ],
    },
    {
      title: 'Верх',
      items: [
        'Футболка',
        'Рубашка',
        'Свитер',
        'Жакет',
        'Толстовка',
      ],
    },
    {
      title: 'Штаны',
      items: [
        'Джинсы',
        'Шорты',
        'Чиносы',
        'Спортивные штаны',
        'Юбка',
      ],
    },
    {
      title: 'Ботинки',
      items: [
        'Кроссовки',
        'Ботинки',
        'Сандалии',
        'Туфли',
        'Сапоги',
      ],
    },
  ];

  return (
    <div className="look-screen">
      <Header />
      <div className="look-content">
        <h1 className="look-title">Ваш лук на сегодня</h1>
        <div className="look-items-column">
          {categories.map((category, index) => (
            <div key={index} className="look-item">
              {category.items[0]} {/* Берем первую вещь из каждой категории */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LookScreen;
