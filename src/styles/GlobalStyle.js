import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }

  a {
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${(props) => props.theme?.body || '#fafafa'};
    color: ${(props) => props.theme?.text || '#333'};
  }
`

export const lightTheme = {
  body: '#fafafa',
  text: '#333',
  background: '#fafafa',
}

export const darkTheme = {
  body: '#333',
  text: '#fff',
  background: '#222',
}
