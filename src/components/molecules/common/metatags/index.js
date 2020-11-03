import React from 'react'
import Head from 'next/head';

export default function Metatags(props) {
  const {
    metatags
  } = props;

  return (
    <Head>
      <link rel="apple-touch-icon" sizes="57x57" href="/brand/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/brand/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/brand/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/brand/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/brand/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/brand/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/brand/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/brand/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/brand/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/brand/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/brand/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/brand/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/brand/favicon-16x16.png" />
      <link rel="manifest" href="/brand/manifest.json" />
      <meta name="msapplication-TileColor" content="#1500FF" />
      <meta name="msapplication-TileImage" content="/brand/ms-icon-144x144.png" />
      <meta name="theme-color" content="#1500FF"></meta>

      <title>{metatags.title}</title>
      <meta name="title" content={metatags && metatags.title} />
      <meta name="description" content={metatags && metatags.description} />
      <meta name="robots" content="INDEX,FOLLOW" />
      <link rel="canonical" href={metatags && metatags.url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metatags.url} />
      <meta property="og:title" content={metatags && metatags.title} />
      <meta property="og:description" content={metatags && metatags.description} />
      <meta property="og:image" content={metatags.image} />
      <meta property="og:image:alt" content={metatags && metatags.title} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metatags.url} />
      <meta property="twitter:title" content={metatags && metatags.title} />
      <meta property="twitter:description" content={metatags && metatags.description} />
      <meta property="twitter:image" content={metatags.image} />
    </Head>
  )
}