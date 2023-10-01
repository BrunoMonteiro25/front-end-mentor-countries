import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 264px;
  height: 336px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 50px;
  font-family: 'Nunito Sans', sans-serif;
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
  margin: 24px 24px 20px 24px;
`

export const Details = styled.div`
  margin: 7px 24px;

  span {
    font-weight: 600;
  }
`
