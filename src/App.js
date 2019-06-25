import React from 'react';
import Slider from './components/Slider/'
import Home from './views/home';
import './App.scss';

function App() {
  return (
    <main className="app">
      <Slider />
      <Home />
    </main>
  );
}

export default App;
