import React from 'react';
import styled from 'styled-components';

import {
  Section, Text, Wrapper
} from '../../atoms'

import theme from '../../../styles/theme';

export default function Banner(props) {
  const {
    sectionName,
    title,
    text1,
    text2,
    scrollText
  } = props;

  return (
    <Section classes={sectionName}>
      <Content>
        <Top>
          <Text
            classes="h1"
            tag="h1"
            text={title}
            colors={theme.colors.black}
          />
        </Top>
        <Bottom>
          <Text
            classes="body1"
            tag="p"
            text={text1}
            color={theme.colors.white}
            align="center"
          />
        </Bottom>
        <PositionScroll>
          <Relative>
            <Rotation>
              <Text
                classes="body3"
                tag="span"
                text={scrollText}
                color={theme.colors.white}
                uppercase
              />
            </Rotation>
            <Bar />
          </Relative>
        </PositionScroll>
      </Content>
      <Triangle />
    </Section>
  )
}

const Content = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100vh;
`;
const Top = styled.div`
  height: calc(60vh - 50px);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const Bottom = styled.div`
  height: calc(40vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PositionScroll = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
`;
const Relative = styled.div`
  position: relative;
`;
const Rotation = styled.div`
  position: absolute;
  transform: rotate(-90deg);
  transform-origin: left center;
  top: 47px;
  left: -16px;
`;
const Bar = styled.div`
  position: relative;
  width: 1px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  :after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 1px;
    height: 50px;
    background-color:${({ theme }) => theme.colors.black};
    animation: loop 2.5s infinite both;
  }

  @keyframes loop {
    0% {
      /* opacity: 0; */
      transform: translateY(150px);
      animation-timing-function: ease-out;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(-50px);
      /* opacity: 0; */
      animation-timing-function: ease-in
    }
  }

`;
const Triangle = styled.div`
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
  border-top: 100vh solid transparent;
  border-bottom: 0px solid transparent;
  border-left: 100vw solid ${({ theme }) => theme.colors.primary};
`;