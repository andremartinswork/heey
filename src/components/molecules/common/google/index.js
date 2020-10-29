import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as gtag from '../../../../utils/gtag';

export default function Google(props) {
  const {
    code,
  } = props;

  if (code) {
    const router = useRouter();

    useEffect(() => {
      const handleRouteChange = (url) => {
        gtag.pageview(code, url)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [router.events]);

    if (process.env.NODE_ENV === 'production') {
      return (
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${code}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${code}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </Head>
      )
    }
    return null;
  }
  return null
}
