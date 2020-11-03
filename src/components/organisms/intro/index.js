import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import {
  motion,
  useViewportScroll,
  useTransform
} from "framer-motion";

import {
  Section,
  Wrapper,
  Container,
  Text,
  Button,
  PushContent
} from '../../atoms';

import theme from '../../../styles/theme';

export default function Intro(props) {
  const {
    sectionName,
    title,
    text,
    text1Question,
    text2Question,
    button,
  } = props;

  const { scrollYProgress } = useViewportScroll();

  const y = useTransform(scrollYProgress, [0, 0.150], ['0', '100%']);

  return (
    <Margin>
      <Section classes={sectionName} zIndex={100} backgroundColor={theme.colors.white}>
        <Bar style={{ y }}>
          <Text
            classes="body1"
            tag="p"
            text={text1Question}
            color={theme.colors.black}
            bold
            uppercase
          />
        </Bar>
        <Wrapper top xs />
        <Wrapper top xl>
          <Container lg>
            <PushContent>
              <Fade>
                <Text
                  classes="h3"
                  tag="h3"
                  text={title}
                  color={theme.colors.black}
                  bold
                />
              </Fade>
              <Wrapper top sm>
                <Fade>
                  <Text
                    classes="body2"
                    tag="div"
                    text={text}
                    color={theme.colors.black}
                  />
                </Fade>
              </Wrapper>
              <Wrapper top md>
                <Fade>
                  <Button {...button} />
                </Fade>
              </Wrapper>
            </PushContent>
          </Container>
        </Wrapper>
        <Wrapper bottom xl />
      </Section>
    </Margin>
  )
}

const Margin = styled.div`
  margin-top: 100vh;
`;
const Bar = styled(motion.div)`
  position: absolute;
  z-index: 3;
  right: 0;
  top: -100px;
  width: calc(1140px + ((100vw - 1140px) / 2));
  min-height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 268px;

  @media screen and (max-width: 1410px) {
    width: calc(960px + ((100vw - 960px) / 2));
    padding-left: 200px;
  }
  @media screen and (max-width: 1200px) {
    width: calc(100% - 90px);
    padding-left: 150px;
  }
  @media screen and (max-width: 1024px) {
    width: calc(100% - 45px);
    padding-left: 45px;
    padding-right: 45px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 60px;
    padding-right: 60px;
  }
  @media screen and (max-width: 578px) {
    padding-left: 20px;
    padding-right: 20px;

    .body1 {
      line-height: 1.2;
    }
  }
`;