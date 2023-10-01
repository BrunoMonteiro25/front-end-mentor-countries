import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 480px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 15px 20px;
  background-color: #fff;
  height: 55px;

  svg {
    margin-right: 20px;
    color: #8f8f8f;
    width: 15px;
    height: 15px;
  }
`

export const InputText = styled.input`
  flex: 1;
  border: none;
  outline: none;
`
