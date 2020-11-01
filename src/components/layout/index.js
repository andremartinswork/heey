import React from 'react';

import {
  Navbar
} from '../molecules';

import {
  Footer
} from '../organisms';

import contentNavbar from '../molecules/common/navbar/content';
import contentFooter from '../organisms/footer/content'

export default function Layout(props) {
  return (
    <>
      <Navbar {...contentNavbar} />
      <main>
        {props.children}
      </main>
      <Footer {...contentFooter} />
    </>
  )
}
