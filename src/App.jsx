import React from 'react';
import Counter from './features/counter/Counter';
import './App.scss';

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
