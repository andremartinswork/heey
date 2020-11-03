import React from 'react';
import styled from 'styled-components';

import {
  Section,
  Wrapper,
  Container,
  Text
} from '../../atoms';

import theme from '../../../styles/theme';

export default function BannerLegal(props) {
  const {
    sectionName,
    title
  } = props;

  return (
    <Section classes={sectionName} backgroundColor={theme.colors.primary}>
      <Wrapper top md />
      <Wrapper both xl>
        <Container lg>
          <Text
            classes="h3"
            tag="h3"
            text={title}
            color={theme.colors.white}
            uppercase
            bold
          />
        </Container>
      </Wrapper>
    </Section>
  )
}
