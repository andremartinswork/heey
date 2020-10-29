import React from 'react';
import styled from 'styled-components';

import {
  Parallax
} from 'react-scroll-parallax';

import {
  Section,
  Wrapper,
  Container,
  Text,
} from '../../atoms'
import theme from '../../../styles/theme';

export default function Projects(props) {
  const {
    sectionName,
    title,
    text,
    items,
    textDrag
  } = props;

  return (
    <Section classes={sectionName}>
      <Parallax className="custom-class" x={[-20, 20]} tagOuter="div">
        <Text
          classes="h2"
          tag="h2"
          text={title}
          color={theme.colors.black}
          uppercase
        />
      </Parallax>
      <Wrapper bottom lg>
        <Wrapper top md>
          <Container lg>
            <Text
              classes="body2"
              tag="div"
              text={text}
              color={theme.colors.black}
              maxWidth="500px"
            />
          </Container>
        </Wrapper>
      </Wrapper>
    </Section>
  )
}
