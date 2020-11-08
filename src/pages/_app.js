import React, { useEffect } from 'react';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import { AnimatePresence } from 'framer-motion'

import Layout from '../components/layout';

// STYLES
import '../styles/reset.css';
import '../styles/global.css';

// THEME
import theme from '../styles/theme';



import Scrollbar from 'smooth-scrollbar';
import { TweenMax, Power1 } from 'gsap';

function MyApp({ Component, pageProps, router }) {
  // useEffect(() => {
  //   Scrollbar.init(document.querySelector('body'));
  // }, [])

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp