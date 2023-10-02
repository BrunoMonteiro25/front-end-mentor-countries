import styled from 'styled-components'

export const Container = styled.div`
  /* border: 1px solid black; */
  margin-top: 50px;
  font-family: 'Nunito Sans', sans-serif;
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
`

export const Details = styled.div`
  /* border: 1px solid black; */
  width: calc(100% - 680px);
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Title = styled.div`
  /* border: 1px solid purple; */
  font-weight: 800;
  font-size: 32px;
  display: block;
`

export const InformationsContainer = styled.div`
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
  /* border: 1px solid black; */
`

export const Informations = styled.div`
  /* border: 1px solid coral; */
  width: max-content;

  p {
    width: max-content;
    display: block;
    font-size: 16px;
    padding: 4px 0px;
  }

  span {
    font-weight: 600;
  }
`

export const BottomDiv = styled.div`
  /* border: 1px solid coral; */
  width: max-content;
  margin-top: 30px;

  .text {
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
    color: #000;
  }
`
