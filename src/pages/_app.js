import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

// STYLES
import '../styles/reset.css';
import '../styles/global.css';

// THEME
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}

export default MyApp
