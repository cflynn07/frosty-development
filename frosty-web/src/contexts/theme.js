import React from 'react'

const themes = {
  dark: 'dark',
  light: 'light'
}

const themeContext = {
  theme: 'light'
}

export const ThemeContext = React.createContext({
  theme: themeContext.theme,
  toggleTheme: () => {
    console.log('here?')
    themeContext.theme = 'dark'
  }
})
