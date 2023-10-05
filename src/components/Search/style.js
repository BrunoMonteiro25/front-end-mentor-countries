import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 480px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding-left: 20px;
  background-color: ${(props) =>
    props.theme === 'light' ? '#fff' : '#2B3743'};

  @media (max-width: 699px) {
    margin-bottom: 40px;
  }

  svg {
    margin-right: 15px;
    color: ${(props) => (props.theme === 'dark' ? '#fff' : '#444')};
    width: 15px;
    height: 15px;
  }
`

export const InputText = styled.input`
  flex: 1;
  border: none;
  border-radius: 8px;
  outline: none;
  padding: 18px 0px;
  background-color: ${(props) => (props.theme === 'dark' ? '#2B3743' : '#fff')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : 'inherit')};

  &::placeholder {
    color: ${(props) => (props.theme === 'dark' ? '#fff' : 'inherit')};
  }
`
