import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";

import {
  Button
} from '../../../atoms';

let lastScrollY = 0;

export default function Navbar(props) {
  const {
    button
  } = props;

  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  useEffect(() => {
    console.log('yRange', yRange)
  }, [yRange])

  // const [top, setTop] = useState(true);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, true);

  //   () => {
  //     window.removeEventListener('scroll', handleScroll, true);
  //   }
  // }, [])
  
  // function handleScroll() {
  //   lastScrollY = window.scrollY;

  //   if (lastScrollY < 200) {
  //     !top && setTop(true);
  //   }
    
  //   if ((lastScrollY > 200) && top) {
  //     top && setTop(false)
  //   }
  // }
  
  return (
    <Header top={true}>
      <Content>
        <Left>
          <Logo>
            HEEY.CREATIVE
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
  border-bottom: 2px solid rgba(0,0,0,0);
  transition: all 0.4s ease;

  ${({ top, theme }) => !top && css`
    background-color: ${theme.colors.primary};
    height: 80px;
    border-bottom: 2px solid rgba(0,0,0,1);
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
