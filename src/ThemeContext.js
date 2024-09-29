import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const themes = {
        pink: {
            '--dark-color': '#F2789F',
            '--text-color': '#FEE3EC',
            '--hover-color': '#F9C5D5',
            '--bg-color': '#f9f9f9',
            '--nav-color': '#ef004c',
            '--off-nav-color': '#000000',
            '--grey-color': 'rgb(153, 153, 153)',
            '--foot-color': '#eb6992'
        },
        dark: {
            '--dark-color': '#272829',
            '--text-color': '#FFF6E0',
            '--hover-color': '#61677A',
            '--bg-color': '#61677A',
            '--nav-color': '#001327',
            '--off-nav-color': '#ffffff',
            '--grey-color': 'rgb(153, 153, 153)',
            '--foot-color': '#111d2a'
        },
        orange: {
            '--dark-color': '#ED9455',
            '--text-color': '#FFFBDA',
            '--hover-color': '#FFEC9E',
            '--bg-color': '#f9f9f9',
            '--nav-color': '#e86000',
            '--off-nav-color': '#000000',
            '--grey-color': 'rgb(153, 153, 153)',
            '--foot-color': '#e8955a'
        },
    };

    const [theme, setTheme] = useState(themes.pink);

    const changeTheme = (selectedTheme) => {
        setTheme(themes[selectedTheme]);
    };

    const applyTheme = (theme) => {
        Object.keys(theme).forEach((key) => {
            document.documentElement.style.setProperty(key, theme[key]);
        });
    };

    applyTheme(theme);

    return (
        <ThemeContext.Provider value={{ changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;