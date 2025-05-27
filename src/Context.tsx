import React, { createContext, useContext, ReactNode } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextProps {
    theme: Theme;
    children?: ReactNode;
}

const ThemeContext = createContext<Theme>('light');

export function ThemeProvider({ theme, children }: ThemeContextProps) {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(ThemeContext);
}
