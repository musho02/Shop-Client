import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeDropdown from './ThemeDropdown';
import './Navbar.css';

const Navbar = ({ token, role, handleLogout }) => {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        handleLogout();
        navigate('/');
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/home">LOGOOO</Link>
            </div>
            <ul className="navbar-links">
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
                </li>) : null }
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