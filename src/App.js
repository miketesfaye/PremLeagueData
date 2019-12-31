import React from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      &nbsp;
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
    </div>
  );
}

export default App;
