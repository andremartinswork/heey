import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import * as Scroll from 'react-scroll';
var scroll = Scroll.animateScroll;

import {
  useRouter
} from 'next/router';

import {
  motion,
  useViewportScroll,
  useTransform
} from "framer-motion";

import {
  Button
} from '../../../atoms';

export default function Navbar(props) {
  const {
    button
  } = props;

  const { scrollYProgress } = useViewportScroll();
  const { route } = useRouter();
  console.log('route', route);

  const background = useTransform(scrollYProgress, [0.1, 0.150], ['rgba(21,0,255,0)', 'rgba(21,0,255,1)']);
  const height = useTransform(scrollYProgress, [0.1, 0.150], ['100px', '80px']);
  const borderColor = useTransform(scrollYProgress, [0.1, 0.150], ['rgba(0,0,0,0)', 'rgba(0,0,0,1)']);

  function goTop() {
    scroll.scrollToTop();
  }

  return (
    <Header style={{ background, height, borderColor }}>
      <Content>
        <Left>
          {
            route === "/legal-information" ? (
              <Link href="/">
                <a>
                  <Fade top>
                    <Logo>
                      HEEY.DIGITAL
                    </Logo>
                    <LogoSmall>
                      HEEY
                    </LogoSmall>
                  </Fade>
                </a>
              </Link>
            )
            : (
              <div onClick={goTop}>
                <Fade top>
                  <Logo>
                    HEEY.DIGITAL
                  </Logo>
                  <LogoSmall>
                    HEEY
                  </LogoSmall>
                </Fade>
              </div>
            )
          }
        </Left>
        {
          route === "/" && (
            <Right>
              <Fade top>
                <Button {...button} />
              </Fade>
            </Right>
          )
        }
      </Content>
    </Header>
  )
}

const Header = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10001;
  box-sizing: border-box;
  padding-left: calc((100vw - 1140px) / 2);
  padding-right: 48px;
  border-bottom: 2px solid rgba(0,0,0,0);
  border-bottom-width: 2px;
  border-style: solid;

  @media screen and (max-width: 1410px) {
    padding-left: 200px;
  }
  @media screen and (max-width: 1200px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled(motion.div)``;
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

  @media screen and (max-width: 1200px) {
    font-size: 24px;
    letter-spacing: 4px;
  }

  @media screen and (max-width: 578px) {
    display: none;
  }
`;
const LogoSmall = styled.div`
  font-family: Oxygen;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 3px;
  text-align: justify;
  color: #ffffff;
  display: none;

  @media screen and (max-width: 578px) {
    display: block;
  }
`;
