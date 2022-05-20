import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #FBFBFB;
    --font: #434145;
    --blue: #2976B7;
    --menu-bg: rgba(255, 255, 255, .5);
    --shadow: #adc7ff;
  }

  [data-theme="dark"] {
    --bg: #22283D;
    --font: #CCCDFD;
    --blue: #8D9FD8;
    --menu-bg: rgba(0, 0, 0, .5);
    --shadow: #1f65fd;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
