import React from 'react';

import {
  Section,
  Wrapper,
  Container,
  Text,
  Align,
  Button
} from '../../atoms';

import theme from '../../../styles/theme';

export default function Liked(props) {
  const {
    sectionName,
    title,
    text,
    button,
  } = props;

  return (
    <Section classes={sectionName}>
      <Wrapper both xl>
        <Container lg>
          <Text
            classes="h3"
            tag="h3"
            text={title}
            color={theme.colors.black}
            align="center"
          />
          <Wrapper top xs>
            <Align>
              <Text
                classes="body2"
                tag="p"
                text={text}
                color={theme.colors.black}
                maxWidth="350px"
                align="center"
              />
            </Align>
          </Wrapper>
          <Wrapper top sm>
            <Align>
              <Button {...button} />
            </Align>
          </Wrapper>
        </Container>
      </Wrapper>
    </Section>
  )
}
