import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  width: 264px;
  height: 336px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`

export const LinkStyled = styled(Link)`
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#0d1114')};
`

export const TopSection = styled.div`
  width: 100%;
  height: 160px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`

export const BottomSection = styled.div`
  width: 100%;
  height: calc(100% - 160px);
  background-color: ${(props) =>
    props.theme === 'light' ? '#fff' : '#2B3743'};
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
