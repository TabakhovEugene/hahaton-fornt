// src/components/LookScreen.jsx
import React, { useState } from 'react';
import Header from './Header';
import EditLookWindow from './EditLookWindow';
import './LookScreen.css';

const LookScreen = () => {
  const [isEditLookWindowOpen, setEditLookWindowOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState([
    'Шляпа', 'Футболка', 'Джинсы', 'Кроссовки'
  ]);

  const categories = [
    { title: 'Головные уборы', items: ['Шляпа', 'Берет', 'Кепка', 'Ковбойская шляпа', 'Бандана'] },
    { title: 'Верх', items: ['Футболка', 'Рубашка', 'Свитер', 'Жакет', 'Толстовка'] },
    { title: 'Штаны', items: ['Джинсы', 'Шорты', 'Чиносы', 'Спортивные штаны', 'Юбка'] },
    { title: 'Ботинки', items: ['Кроссовки', 'Ботинки', 'Сандалии', 'Туфли', 'Сапоги'] },
  ];

  const openEditLookWindow = (categoryIndex) => {
    setCurrentCategory(categoryIndex);
    setEditLookWindowOpen(true);
  };

  const closeEditLookWindow = () => {
    setEditLookWindowOpen(false);
    setCurrentCategory(null);
  };

  const changeItem = (newItem) => {
    const updatedItems = [...selectedItems];
    updatedItems[currentCategory] = newItem;
    setSelectedItems(updatedItems);
    closeEditLookWindow();
  };

  return (
    <div className="look-screen">
      <Header />
      <div className="look-content">
        <h1 className="look-title">Ваш лук на сегодня</h1>
        <div className="look-items-column">
          {categories.map((category, index) => (
            <div
              key={index}
              className="look-item"
              onClick={() => openEditLookWindow(index)}
            >
              {selectedItems[index]}
            </div>
          ))}
        </div>
      </div>

      {/* Окно для выбора вещей */}
      <EditLookWindow
        isOpen={isEditLookWindowOpen}
        onClose={closeEditLookWindow}
        title="Выберите вещь"
      >
        {categories[currentCategory]?.items.map((item, idx) => (
          <div
            key={idx}
            className="edit-look-window-option"
            onClick={() => changeItem(item)}
          >
            {item}
          </div>
        ))}
      </EditLookWindow>
    </div>
  );
};

export default LookScreen;
