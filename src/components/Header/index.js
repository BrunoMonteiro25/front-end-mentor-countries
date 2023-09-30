import React from 'react'
import { Container, Details, LinkStyled } from './style'

import { BsMoon } from 'react-icons/bs'

const Header = () => {
  return (
    <Container>
      <Details>
        <h1>Where in the world?</h1>

        <LinkStyled href="/">
          <BsMoon />
          Dark Mode
        </LinkStyled>
      </Details>
    </Container>
  )
}

export default Header
