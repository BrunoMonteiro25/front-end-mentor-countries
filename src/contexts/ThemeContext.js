import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme || 'light')

  const configureTheme = (newTheme) => {
    setTheme(newTheme)
    document.body.style.backgroundColor =
      newTheme === 'light' ? '#fafafa' : '#212E37'
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    // Verifica se estamos no lado do cliente antes de tentar acessar o localStorage
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
        configureTheme(storedTheme)
      }
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    configureTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }

  return context
}
