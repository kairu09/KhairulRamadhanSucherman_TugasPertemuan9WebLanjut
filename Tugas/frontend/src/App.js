import React from 'react';
import FetchComponent from './components/FetchComponent';
import JQueryComponent from './components/JQueryComponent';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Perbandingan Fetch API vs jQuery AJAX</h1>
      <div className="components">
        <FetchComponent />
        <JQueryComponent />
      </div>
    </div>
  );
}

export default App;