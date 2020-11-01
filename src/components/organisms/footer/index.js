import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import {
  Container,
  Text,
} from '../../atoms';

import theme from '../../../styles/theme';

export default function Footer(props) {
  const {
    sectionName,
    legalText,
    legalLink,
    rights,
  } = props;

  return (
    <footer className={sectionName}>
      <Content>
        <Container lg>
          <Block>
            <Left>
              <Text
                classes="body3"
                tag="span"
                text={rights}
                color={theme.colors.white}
              />
            </Left>
            <Right>
              <Link href={legalLink}>
                <a>
                  <Text
                    classes="body3"
                    tag="span"
                    text={legalText}
                    color={theme.colors.white}
                  />
                </a>
              </Link>
            </Right>
          </Block>
        </Container>
      </Content>
    </footer>
  )
}

const Content = styled.div`
  width: 100%;
  
  background-color: ${({ theme }) => theme.colors.primary};
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;
const Left = styled.div`
  
`;
const Right = styled.div`
  a {
    span {
      transition: all 0.4s ease;
    }

    :hover {
      span {
        color: ${({ theme }) => theme.colors.black}!important;
      }
    }
  }
`;