import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    background: #222;
    color:#fff;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
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
  article{
    flex: 74%;
    width: 74%;
    position: relative;
    background: #333;
    margin: 40px 1% 40px 0;
    border-radius: 6px;
    @media (max-width: 1100px){
      flex: 1;
      width: 100%;
    }
  }
  aside{
    flex: 25%;
    width: 25%;
    position: relative;
    background: #333;
    margin: 40px 0;
    @media (max-width: 1100px){
      display: none;
    }
  }
  image{
    width: 100%;
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
    @media (min-width: 1100px) and (max-width: 1360px) {
      padding: 0 1.5rem;
    }
    @media (max-width: 1100px){
      padding: 0 1rem;
    }
  }
  .row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .grid-mansonry{
    flex: 75%;
    margin: 20px 20px 20px 0;
    column-count: 3;
    column-gap: 1em;
    @media (min-width: 1100px) and (max-width: 1360px) {
      column-count: 2;
      flex: 75%;
    }
    @media (min-width: 768px) and (max-width: 1100px) {
      column-count: 3;
      flex: 100%;
      margin: 20px 0;
    }
    @media (min-width: 576px) and (max-width: 768px) {
      column-count: 2;
      flex: 100%;
      margin: 20px 0;
    }
    @media (max-width: 576px) {
      column-count: 1;
      flex: 100%;
      margin: 20px 0;
    }
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