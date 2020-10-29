import React from 'react'
import Head from 'next/head';

export default function Metatags(props) {
  const {
    title,
    metatags,
  } = props;

  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#c40b13" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#c40b13" />

      <title>{title ? title : 'Miranda Bike Parts'}</title>
      <meta name="title" content={metatags && metatags.title} />
      <meta name="description" content={metatags && metatags.description} />
      <meta name="robots" content="INDEX,FOLLOW"/>
      <link rel="canonical" href={process.browser && window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.browser && window.location.href} />
      <meta property="og:title" content={metatags && metatags.title} />
      <meta property="og:description" content={metatags && metatags.description} />
      <meta property="og:image" content={metatags && metatags.image && metatags.image.href} />
      <meta property="og:image:alt" content={metatags && metatags.title} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={process.browser && window.location.href} />
      <meta property="twitter:title" content={metatags && metatags.title} />
      <meta property="twitter:description" content={metatags && metatags.description} />
      <meta property="twitter:image" content={metatags && metatags.image && metatags.image.href} />
    </Head>
  )
}
