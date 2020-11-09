import React from 'react';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import Layout from '../components/layout';

// STYLES
import '../styles/reset.css';
import '../styles/global.css';

// THEME
import theme from '../styles/theme';

function MyApp({ Component, pageProps, router }) {
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