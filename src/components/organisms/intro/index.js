import React from 'react';
import styled from 'styled-components';

import {
  Section,
  Wrapper,
  Container,
  Text,
  Button
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
    <Section classes={sectionName}>
      <Wrapper md both>
        <Wrapper xl both>
          <Container lg>
            <Block>
              <Left>
                <Text
                  classes="h4"
                  tag="h4"
                  text={title}
                  color={theme.colors.black}
                />
              </Left>
              <Right>
                <Text
                  classes="body2"
                  tag="div"
                  text={text}
                  color={theme.colors.black}
                />
                <Wrapper top md>
                  <Button {...button} />
                </Wrapper>
              </Right>
            </Block>
          </Container>
        </Wrapper>
      </Wrapper>
    </Section>
  )
}

const Block = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 280px;
`;
const Right = styled.div`
  flex: 2;
`;
