import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const ThemeDropdown = () => {
  const { changeTheme } = useContext(ThemeContext);

  const handleThemeChange = (event) => {
    changeTheme(event.target.value);
  };

  return (
    <select onChange={handleThemeChange} style={{ margin: '1rem', padding: '0.5rem' }}>
      <option value="pink">Pink Theme</option>
      <option value="dark">Dark Theme</option>
      <option value="orange">Orange Theme</option>
    </select>
  );
};

export default ThemeDropdown;