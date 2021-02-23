import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    background: #222;
    font-family: 'Roboto', sans-serif;
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
  aside{
    background: #333;
  }
  footer{
    background: #333;
    min-height: 470px;
    margin: 40px 0 0 0;
    padding: 40px 0 0 0;
    position: relative;
  }
  .align-center{
    align-items: center;
  }
  .align-end{
    align-items: flex-end;
  }
  .container {
    max-width: 1900px;
    padding: 0 4rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .grid-mansonry{
    flex: 75%;
    margin: 20px 20px 20px 0;
    column-count: 3;
    column-gap: 1em;
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
      <html lang="en">
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </html>
    </>
  )
}