import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentAuth from './routes/auth'
import ComponentVault from './routes/vault';
function App() {

  function Main() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Crypt</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/auth" element={<ComponentAuth />}></Route>
        <Route path="/vault" element={<ComponentVault />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
