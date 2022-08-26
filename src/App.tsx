import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentAuth from './routes/auth'
import ComponentVault from './routes/vault';
import ComponentMain from './routes/main';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentMain />}></Route>
        <Route path="/auth" element={<ComponentAuth />}></Route>
        <Route path="/vault" element={<ComponentVault />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
