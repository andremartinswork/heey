import React from 'react';
import styled, { css } from 'styled-components';
import Fade from 'react-reveal/Fade';

import {
  motion,
  useViewportScroll,
  useTransform
} from "framer-motion";

import {
  Section,
  Text,
  Container
} from '../../atoms';

import theme from '../../../styles/theme';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const containerVariants = {
  before: {},
  after: { 
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
      staggerDirection: -1,
    }
  },
}

const letterVariants = {
  before: {
    opacity: 0,
    y: 20,
    transition: {
      ...transition
    },
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      ...transition
    },
  },
}

export default function Banner(props) {
  const {
    sectionName,
    title,
  } = props;

  const { scrollYProgress } = useViewportScroll();

  const y = useTransform(scrollYProgress, [0, 0.2], ['0', '5vh']);

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const string = Array.from(title);

  return (
    <Fixed 
      // onAnimationComplete={() => console.log('Can Scroll')}
      // initial={{
      //   opacity: 0,
      // }}
      // animate={{
      //   opacity: 1,
      //   transition
      // }}
    >
      <Section classes={sectionName} backgroundColor={theme.colors.primary}>
        <Lines style={{ opacity }}>
          <Line />
          <Line />
          <Line />
          <Line />
          <Line className="mobile" />
          <Line className="mobile" />
          <Line className="mobile" />
        </Lines>
        <Lines horizontal style={{ opacity }}>
          <Line horizontal />
          <Line horizontal />
          <Line horizontal />
          <Line horizontal />
          <Line horizontal />
        </Lines>
        <Container lg>
          <Content>
            <motion.div className="wrapper" style={{ y }}>
              <motion.h1 
                className='h1'
                variants={containerVariants}
                initial={"before"}
                animate={"after"}
              >
                {string.map((letter, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
          </Content>
        </Container>
      </Section>
    </Fixed>
  )
}

const Fixed = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
const Content = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  transform: translateX(-34px);
  box-sizing: border-box;
  padding-bottom: 75px;

  @media screen and (max-width: 1920px) {
    transform: translateX(-30px);
  }
  @media screen and (max-width: 1600px) {
    transform: translateX(-24px);
  }
  @media screen and (max-width: 1440px) {
    transform: translateX(-20px);
  }
  @media screen and (max-width: 1366px) {
    transform: translateX(-19px);
  }
  @media screen and (max-width: 1280px) {
    transform: translateX(-17px);
  }
  @media screen and (max-width: 768px) {
    transform: translateX(-16px);
  }
  @media screen and (max-width: 578px) {
    transform: translateX(-10px);
  }

  .wrapper {
    overflow: hidden;

    .h1 {
      color: ${({ theme }) => theme.colors.white};
      display: flex;
      position: relative;

      span {
        position: relative;
      }
    }
  }
`;
const Lines = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;

  ${({ horizontal }) => horizontal && css`
    flex-direction: column;
  `}

  @media screen and (max-width: 578px) {
    .mobile {
      display: none;
    }
  }
`;
const Line = styled.div`
  width: 2px;
  height: 100%;
  background-color: #0000ca;

  ${({ horizontal }) => horizontal && css`
    width: 100%;
    height: 2px;
    background-color: #0000ca;
  `}
`;