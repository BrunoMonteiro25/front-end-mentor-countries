import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  /* border: 1px solid black; */
  width: 100% !important;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  background-color: ${(props) =>
    props.theme === 'light' ? '#fff' : '#2B3743'};
`

export const Details = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 800;
  padding: 20px 10px 20px 10px;
  /* border: 1px solid black; */

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`

export const LinkLogo = styled(Link)`
  color: ${(props) => (props.theme === 'light' ? '#0d1114' : '#fff')};
  font-size: 24px;
`

export const LinkStyled = styled.button`
  color: ${(props) => (props.theme === 'light' ? '#0d1114' : '#fff')};
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  padding: 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme === 'light' ? '#fff' : '#2B3743'};

  svg {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 400px) {
    svg {
      margin-left: 5px;
    }
  }
`
