import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const themes = {
    light: {
        primary: '#0984e3',
        secondary: '#dfe6e9',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        text: '#2d3436',
        card: 'rgba(255, 255, 255, 0.95)',
        success: '#00b894',
    },
    dark: {
        primary: '#0984e3',
        secondary: '#2d3436',
        background: 'linear-gradient(135deg, #2d3436 0%, #000000 100%)',
        text: '#f5f7fa',
        card: 'rgba(45, 52, 54, 0.95)',
        success: '#00b894',
    },
    blue: {
        primary: '#3498db',
        secondary: '#2980b9',
        background: 'linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)',
        text: '#2c3e50',
        card: 'rgba(255, 255, 255, 0.95)',
        success: '#2ecc71',
    }
};

export function ThemeProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState('light');

    const value = {
        theme: themes[currentTheme],
        currentTheme,
        setCurrentTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
} 