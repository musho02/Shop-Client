import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import ThemeProvider from './ThemeContext';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Basket from './components/Basket';
import Register from './components/Register';
import Login from './components/Login';
import Product from './components/Product';
import Detail from './components/Detail';
import Test from './components/Test';

function App() {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [name, setName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [productId, setProductId] = useState(null);

  const handleLogout = () => {
    setToken(null);
    setRole(null);
    setName(null);
    setUserId(null);
  };

  return (
    <ThemeProvider>
      <Router>
        <Navbar token={token} role={role} handleLogout={() => handleLogout()}/>
        <Routes>
          <Route path="/" element={<Login setToken={setToken} setRole={setRole} setName={setName} setUserId={setUserId} />} />
          <Route path="/home" element={<Home role={role} name={name} userId={userId} setProductId={setProductId} />} />
          <Route
            path="/product"
            element={role === 'admin' ? <Product token={token}/> : <Navigate to="/" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={<Basket userId={userId} />} />
          <Route path="/register" element={<Register setToken={setToken} setRole={setRole} />} />
          <Route path="/detail" element={<Detail userId={userId} productId={productId} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;