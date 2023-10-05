import React from 'react'
import { Container, Details, LinkLogo, LinkStyled } from './style'

import { BsMoon } from 'react-icons/bs'
import { BsSun } from 'react-icons/bs'
import { useTheme } from '@/contexts/ThemeContext'

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Container theme={theme}>
      <Details>
        <LinkLogo href="/" theme={theme}>
          Where in the world?
        </LinkLogo>

        <LinkStyled onClick={toggleTheme} theme={theme}>
          {theme === 'light' ? (
            <BsMoon />
          ) : (
            <BsSun style={{ width: '15px', height: '15px' }} />
          )}
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </LinkStyled>
      </Details>
    </Container>
  )
}

export default Header
