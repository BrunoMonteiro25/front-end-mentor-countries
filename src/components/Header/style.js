import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  width: 100%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`

export const Details = styled.div`
  max-width: 1450px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 800;
  padding: 0px 10px 20px 10px;
  /* border: 1px solid black; */

  h1 {
    color: #0d1114;
    font-size: 24px;
  }
`

export const LinkStyled = styled(Link)`
  color: #121315;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: 600;
  /* border: 1px solid black; */

  svg {
    width: 12px;
    height: 12px;
    /* border: 1px solid black; */
  }
`
