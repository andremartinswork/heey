import React from 'react';
import styled from 'styled-components';

import {
  Section,
  Text,
  Container
} from '../../atoms'

import theme from '../../../styles/theme';

export default function Banner(props) {
  const {
    sectionName,
    title,
  } = props;

  return (
    <Fixed>
      <Section classes={sectionName} backgroundColor={theme.colors.primary}>
        <Container lg>
          <Content>
            <Text
              classes="h1"
              tag="h1"
              text={title}
              color={theme.colors.white}
            />
          </Content>
        </Container>
      </Section>
    </Fixed>
  )
}

const Fixed = styled.div`
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
  padding-bottom: 50px;
`;