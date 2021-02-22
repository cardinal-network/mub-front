import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    background: #555;
  }
  *{
    margin: 0;
    -webkit-transition: 0.25s;
    -moz-transition: 0.25s;
    -o-transition: 0.25s;
    -ms-transition: 0.25s;
    transition: 0.25s;
    &:hover {
      -webkit-transition: 0.25s;
      -moz-transition: 0.25s;
      -o-transition: 0.25s;
      -ms-transition: 0.25s;
      transition: 0.25s;
    }
  }
  button, a{
    cursor: pointer;
    outline: none;
    text-decoration: none;
  }
  header{
    background: #333;
  }
  .container {
    max-width: 1900px;
    padding: 0 4rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .grid-mansonry{
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(550px,1fr));
    grid-auto-rows: 20px;
  }
`

const theme = {
  colors: {
    primary: '#F5B100',
    secondary: '#222',
    tertiary: '#333',
    shadow_1: '#999',
    light_1: '#FFC819'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}