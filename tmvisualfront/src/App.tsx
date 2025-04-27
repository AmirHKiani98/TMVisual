// src/App.tsx
import React from 'react';
import './App.css';
import GraphCanvas from './components/canvas/GraphCanvas';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <GraphCanvas />
    </div>
  );
}

export default App;