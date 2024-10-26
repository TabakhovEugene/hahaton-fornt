// src/components/GalleryScreen.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './GalleryScreen.css';

const GalleryScreen = () => {
  const navigate = useNavigate();

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

  const handleAddItem = () => {
    navigate('/item');
  };

  return (
    <div className="gallery-screen">
      <Header />
      <div className="gallery-content">
        {categories.map((category, index) => (
          <div key={index} className="gallery-category">
            <div className="gallery-category-header">
              <h2 className="gallery-category-title">{category.title}</h2>
              <button className="gallery-add-button" onClick={handleAddItem}>+</button>
            </div>
            <div className="gallery-items-row">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="gallery-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryScreen;
