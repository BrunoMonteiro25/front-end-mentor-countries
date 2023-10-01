import styled from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;
  height: 55px;
`

export const DropdownButton = styled.button`
  width: 200px;
  height: 100%;
  padding: 12px 24px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`

export const DropdownOptions = styled.div`
  margin-top: 4px;
  position: absolute;
  width: 100%;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
`

export const Option = styled.div`
  background-color: #fff;
  cursor: pointer;
  padding: 5px 24px;

  &:first-child {
    padding-top: 15px;
    border-radius: 8px 8px 0px 0px;
  }

  &:last-child {
    padding-bottom: 15px;
    border-radius: 0px 0px 8px 8px;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`
