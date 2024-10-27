// src/components/LookScreen.jsx
import React, { useEffect, useState } from 'react';
import Header from './Header';
import './LookScreen.css'; // Используем новые стили для LookScreen

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

  const [style, setStyle] = useState([]);

  const generateStyle = async (styleId) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/style/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Используем токен авторизации
        },
        body: JSON.stringify({ id: styleId }), // Передаем идентификатор стиля в теле запроса
      });

      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }

      const data = await response.json();
      console.log('Ответ от сервера:', data); // Выводим ответ в консоль
      setStyle(data);
    } catch (error) {
      console.error('Ошибка получения стиля:', error);
    }
  };

  useEffect(() => {
    generateStyle();
  }, []);

  return (
    <div className="look-screen">
      <Header />
      <div className="look-content">
        <h1 className="look-title">Ваш образ на сегодня</h1>
        <div className="look-items-column">
          {style && style.clothes && style.clothes.map((item, index) => (
            <div key={index} className="look-item">
              {item.picture_url ? (
                <img src={item.picture_url} alt={item.sub_type} className="look-item-image" />
              ) : (
                <span>{item.sub_type}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LookScreen;
