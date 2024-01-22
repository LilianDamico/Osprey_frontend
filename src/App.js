import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Login from '../src/pages/login/Login';
import Management from '../src/pages/management/Management';
import NewRecord from './pages/newrecord/NewRecord';
import Cadastro from './pages/cadastro/Cadastro';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/management" element={<Management />} />
          <Route path="/newrecord" element={<NewRecord />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
