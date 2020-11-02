import React from "react";
import styled from "styled-components";

import { 
  Section, 
  Wrapper, 
  Container, 
  Text
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
          <Block>
            <Left />
            <Right>
              <Text
                classes="h3"
                tag="h3"
                text={title}
                color={theme.colors.black}
              />
              <Wrapper top sm>
                <Text
                  classes="body2"
                  tag="p"
                  text={text}
                  color={theme.colors.darkGrey}
                  maxWidth="600px"
                />
              </Wrapper>
              <Wrapper top lg>
                <ContactForm />
              </Wrapper>
            </Right>
          </Block>
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
