import React from 'react';

import {
  Navbar,
  Cookies,
} from '../molecules';

import {
  Footer
} from '../organisms';

import contentNavbar from '../molecules/common/navbar/content';
import contentCookies from '../molecules/common/cookies/content';
import contentFooter from '../organisms/footer/content'

export default function Layout(props) {
  return (
    <>
      <Navbar {...contentNavbar} />
      <Cookies {...contentCookies} />
      <main>
        {props.children}
      </main>
      <Footer {...contentFooter} />
    </>
  )
}
