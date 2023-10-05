import styled from 'styled-components'

import Link from 'next/link'

export const Container = styled.div`
  /* border: 1px solid black; */
  margin-top: 50px;
  display: flex;
  gap: 80px;
  flex-wrap: wrap;

  @media (max-width: 955px) {
    gap: 40px;
  }

  @media (max-width: 911px) {
    flex-direction: column;
    align-items: center;
  }
`

export const TopSection = styled.div`
  width: 560px;
  height: 401px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;

  @media (max-width: 599px) {
    width: 450px;
  }

  @media (max-width: 495px) {
    width: 350px;
    height: 300px;
  }

  @media (max-width: 380px) {
    width: 250px;
    height: 250px;
  }
`

export const Details = styled.div`
  /* border: 1px solid black; */
  width: calc(100% - 680px);
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1269px) {
    margin-top: 0px;
  }

  @media (max-width: 911px) {
    width: 560px;
  }

  @media (max-width: 599px) {
    width: 450px;
  }

  @media (max-width: 495px) {
    width: 350px;
  }

  @media (max-width: 380px) {
    width: 250px;
  }
`

export const Title = styled.div`
  /* border: 1px solid purple; */
  font-weight: 800;
  font-size: 32px;
  display: block;
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#0d1114')};
`

export const InformationsContainer = styled.div`
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
  /* border: 1px solid black; */

  @media (max-width: 1299px) {
    gap: 50px;
  }

  @media (max-width: 1269px) {
    margin-right: 50px;
    gap: 1px;
  }
`

export const Informations = styled.div`
  /* border: 1px solid coral; */
  width: 260px;
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#0d1114')};

  @media (max-width: 911px) {
    width: 600px;
  }

  p {
    max-width: 260px;
    word-wrap: break-word;
    display: block;
    font-size: 16px;
    padding: 4px 0px;
    /* border: 1px solid black; */
  }

  span {
    font-weight: 600;
  }

  @media (max-width: 911px) {
    p {
      max-width: 600px;
      word-wrap: normal;
    }
  }
`

export const BottomDiv = styled.div`
  /* border: 1px solid coral; */
  width: max-content;
  margin-top: 30px;

  @media (max-width: 1269px) {
    margin-top: 10px;
  }

  .text {
    max-width: 450px;
    width: max-content;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    padding: 4px 0px;
    /* border: 1px solid coral; */
  }

  span {
    font-weight: 600;
  }

  .btn {
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 5px 27px;
    font-weight: 600;
    color: inherit;
  }

  .disabled {
    cursor: no-drop;
    opacity: 0.7;
  }

  @media (max-width: 1080px) {
    .text {
      max-width: 300px;
    }
  }
`

export const LinkStyled = styled(Link)`
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) =>
    props.theme === 'light' ? '#fff' : '#2B3743'};
  padding: 5px 27px;
  font-weight: 600;
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#0d1114')};
`

export const Loading = styled.div`
  height: 40vh;
  font-size: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  .dot {
    display: inline-block;
    margin: 0 4px;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0%,
    80%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
`
