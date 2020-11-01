import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { 
  useViewportScroll
} from "framer-motion"

import {
  Button
} from '../../../atoms';

let lastScrollY = 0;
let ticking = false;

export default function Navbar(props) {
  const {
    button
  } = props;

  const [top, setTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    () => {
      window.removeEventListener('scroll', handleScroll, true);
    }
  }, [])
  
  function handleScroll() {
    lastScrollY = window.scrollY;

    if (lastScrollY < 200 && !top) {
      setTop(true);
      console.log('LELE')
    }
    
    if (lastScrollY >= 200 && top) {
      setTop(false)
      console.log('LOOOL')
    }
    console.log(lastScrollY)

    // if (!ticking) {
    //   window.requestAnimationFrame(() => {
    //     this.nav.current.style.top = `${lastScrollY}px`;
    //     ticking = false;
    //   });
   
    //   ticking = true;
    // }
  }
  

  return (
    <Header top={top}>
      <Content>
        <Left>
          <Logo>
            HEEY.CREATVE
          </Logo>
        </Left>
        <Right>
          <Button {...button} />
        </Right>
      </Content>
    </Header>
  )
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10001;
  height: 100px;
  box-sizing: border-box;
  padding-left: calc((100vw - 1140px) / 2);
  padding-right: 48px;

  ${({ top }) => top && css`
    background-color: red;
  `}
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div``;
const Right = styled.div``;
const Logo = styled.div`
  font-family: Oxygen;
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 5px;
  text-align: justify;
  color: #ffffff;
`;
