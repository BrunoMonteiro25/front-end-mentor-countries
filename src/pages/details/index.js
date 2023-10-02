import React from 'react'

import styled from 'styled-components'

import Link from 'next/link'
import Header from '@/components/Header'

import { BsArrowLeftShort as IconArrow } from 'react-icons/bs'
import CardDetail from '@/components/CardDetail'

const Container = styled.div`
  max-width: 1300px;
  margin: 50px auto;
  padding: 0px 10px;
  /* border: 1px solid blue; */
`

const LinkStyled = styled(Link)`
  color: inherit;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 136px;
  padding: 9px 0px;
  gap: 4px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  svg {
    width: 25px;
    height: 25px;
    margin-left: 30px;
  }
`

const Details = () => {
  return (
    <>
      <Header />

      <Container>
        <LinkStyled href="/">
          <IconArrow />
          Back
        </LinkStyled>

        <CardDetail />
      </Container>
    </>
  )
}

export default Details
