import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Authentication';
import Home from './pages/Home';
import Episodes from './pages/Episodes'

const App: React.FC = () => {
  return (

    <Router>
      <Routes >
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Route>
      </Routes>
    </Router>

  );
};

export default App;
