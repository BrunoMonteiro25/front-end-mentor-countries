import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  width: 264px;
  height: 336px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Nunito Sans', sans-serif;
`

export const LinkStyled = styled(Link)`
  color: inherit;
`

export const TopSection = styled.div`
  width: 100%;
  height: 160px;
  background-color: #fff;
`

export const BottomSection = styled.div`
  width: 100%;
  height: calc(100% - 160px);
  background-color: #fff;
`

export const Title = styled.h3`
  padding: 24px 24px 14px 24px;
`

export const Details = styled.div`
  margin: 7px 24px;

  span {
    font-weight: 600;
  }
`
