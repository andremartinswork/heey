import React from 'react';
import styled from 'styled-components';

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
        {/* <BarToMove
          style={{ x }}
        /> */}
        <Wrapper top xs />
        <Wrapper top xl>
          <Container lg>
            <PushContent>
              <Text
                classes="h3"
                tag="h3"
                text={title}
                color={theme.colors.black}
              />
              <Wrapper top sm>
                <Text
                  classes="body2"
                  tag="div"
                  text={text}
                  color={theme.colors.black}
                />
              </Wrapper>
              <Wrapper top md>
                <Button {...button} />
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
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 268px;
`;
const BarToMove = styled(motion.div)`
  position: absolute;
  z-index: 5;
  left: calc((100vw - 1140px) / 2);
  top: -100px;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
`
