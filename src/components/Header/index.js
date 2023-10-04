import React from 'react'
import { Container, Details, LinkStyled } from './style'

import { BsMoon } from 'react-icons/bs'
import Link from 'next/link'

const Header = () => {
  return (
    <Container>
      <Details>
        <Link href="/" className="logo">
          Where in the world?
        </Link>

        <LinkStyled href="/">
          <BsMoon />
          Dark Mode
        </LinkStyled>
      </Details>
    </Container>
  )
}

export default Header
