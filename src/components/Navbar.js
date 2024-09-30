import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeDropdown from './ThemeDropdown';
import './Navbar.css';

const Navbar = ({ token, role, handleLogout }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogoutClick = () => {
        handleLogout();
        navigate('/');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/home">LOGO</Link>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                {/* Icon สำหรับ Hamburger Menu */}
                ☰
            </div>
            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                {role === 'admin' ? (
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                ) : null}
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                {token ? (
                    <li>
                        <Link to="/basket">Basket</Link>
                    </li>) : null}
                {!token ? (
                    <li>
                        <Link to="/">Login</Link>
                    </li>) : (
                    <li>
                        <button onClick={handleLogoutClick} className='logout'>Logout</button>
                    </li>)
                }
                <li className="theme-dropdown-container">
                    <ThemeDropdown />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;