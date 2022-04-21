import React from 'react';
import Title from './components/Title';
import Container from './components/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Container />
      </header>
    </div>
  );
}

export default App;
