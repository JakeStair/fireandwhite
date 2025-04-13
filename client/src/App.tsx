// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Authentication';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
    <div>
      <h1>Fire and White 🔥🏀</h1>
      <Routes>
        <Route path='/' element={<Navigate to="/" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </div>
    </Layout>
    </Router>
  );
}

export default App;
