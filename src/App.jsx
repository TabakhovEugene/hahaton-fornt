// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthScreen from './components/AuthScreen';
import Lobby from './components/Lobby';
import GalleryScreen from './components/GalleryScreen';
import GenerationsScreen from './components/GenerationsScreen';
import LookScreen from './components/LookScreen';
import ProfileScreen from './components/ProfileScreen';
import ItemScreen from './components/ItemScreen'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/gallery" element={<GalleryScreen />} />
        <Route path="/generations" element={<GenerationsScreen />} />
        <Route path="/look" element={<LookScreen />} />
        <Route path="/user" element={<ProfileScreen />} />
        <Route path="/item" element={<ItemScreen />} /> 
      </Routes>
    </Router>
  );
}

export default App;
