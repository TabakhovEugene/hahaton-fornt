// src/components/EditLookWindow.jsx
import React from 'react';
import './EditLookWindow.css';

const EditLookWindow = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="edit-look-window-overlay" onClick={onClose}>
      <div className="edit-look-window-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="edit-look-window-title">{title}</h2>
        <div className="edit-look-window-body">
          <div className="edit-look-window-scroll-container">
            {children}
          </div>
        </div>
        <button className="edit-look-window-close-button" onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default EditLookWindow;
