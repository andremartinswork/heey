import React, { useEffect } from 'react';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';


import { TweenLite } from 'gsap'

import Layout from '../components/layout';

// STYLES
import '../styles/reset.css';
import '../styles/global.css';

// THEME
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // const myElement = document.getElementsByTagName("html")[0]
    // TweenLite.to(myElement, 1, {width: 100, backgroundColor: "red"});

    // TweenLite.set(myElement, {
    //   y: -window.pageYOffset
    // });
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default MyApp