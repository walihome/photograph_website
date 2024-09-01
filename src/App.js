import React from 'react';
import PhotoGallery from './PhotoGallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-title">
          <img src="/logo.png" alt="for your love" className="logo" />
          <h3 className="title">Dooocs</h3>
        </div>
      </header>
      <main>
        <PhotoGallery />
      </main>
    </div>
  );
}

export default App;