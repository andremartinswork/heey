import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

import {
  Section,
  Wrapper,
  Container,
  Text,
  PushContent
} from "../../atoms";

import ContactForm from "../../molecules/form";

import theme from "../../../styles/theme";

export default function Liked(props) {
  const {
    sectionName,
    title,
    text
  } = props;

  return (
    <Section classes={sectionName} backgroundColor={theme.colors.white}>
      <Wrapper both xl>
        <Container lg>
          <PushContent>
            <Fade>
              <Text
                classes="h3"
                tag="h3"
                text={title}
                color={theme.colors.black}
                bold
                uppercase
              />
            </Fade>
            <Wrapper top sm>
              <Fade>
                <Text
                  classes="body2"
                  tag="div"
                  text={text}
                  color={theme.colors.darkGrey}
                  maxWidth="600px"
                />
              </Fade>
            </Wrapper>
            <Fade>
            <Wrapper top lg>
              <ContactForm />
            </Wrapper>
            </Fade>
          </PushContent>
        </Container>
      </Wrapper>
    </Section>
  );
}

const Block = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 268px;
`;
const Right = styled.div`
  flex: 2;
`;
