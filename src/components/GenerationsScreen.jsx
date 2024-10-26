// src/components/GenerationsScreen.jsx
import React from 'react';
import Header from './Header';
import './GenerationsScreen.css';

const GenerationsScreen = () => {
  const generations = [
    {
      title: 'Генерация 1',
      items: ['Шляпа', 'Футболка', 'Джинсы', 'Кроссовки'],
    },
    {
      title: 'Генерация 2',
      items: ['Берет', 'Рубашка', 'Шорты', 'Ботинки'],
    },
    {
      title: 'Генерация 3',
      items: ['Кепка', 'Свитер', 'Чиносы', 'Сандалии'],
    },
    {
      title: 'Генерация 4',
      items: ['Ковбойская шляпа', 'Жакет', 'Спортивные штаны', 'Туфли'],
    },
    {
      title: 'Генерация 5',
      items: ['Бандана', 'Толстовка', 'Юбка', 'Сапоги'],
    },
  ];

  return (
    <div className="generations-screen">
      <Header className="generations-header" />
      <div className="generations-content">
        {generations.map((generation, index) => (
          <div key={index} className="generations-category">
            <h2 className="generations-category-title">{generation.title}</h2>
            <div className="generations-items-row">
              {generation.items.map((item, itemIndex) => (
                <div key={itemIndex} className="generations-item">
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

export default GenerationsScreen;
