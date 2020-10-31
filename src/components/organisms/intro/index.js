import React from 'react';
import styled from 'styled-components';

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
    button,
  } = props;

  return (
    <Section classes={sectionName} zIndex={100}>
      <Bar />
      <Wrapper top md>
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
  )
}

const Bar = styled.div`
  position: absolute;
  right: 0;
  top: -100px;
  width: calc(1140px + ((100vw - 1140px) / 2));
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Block = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 280px;
`;
const Right = styled.div`
  flex: 2;
`;
