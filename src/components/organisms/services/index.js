import React from 'react';
import styled, { css } from 'styled-components';
import Fade from 'react-reveal/Fade';

import {
  Section,
  Text,
  Wrapper
} from '../../atoms';

import {
  Parallax
} from 'react-scroll-parallax';

import theme from '../../../styles/theme';

export default function Services(props) {
  const {
    sectionName,
    items
  } = props;

  return (
    <Section classes={sectionName} backgroundColor={theme.colors.white}>
      <Desktop>
        <Wrapper bottom lg>
          {
            items.map((item, index) => {
              if (index % 2 == 0) {
                return (
                  <Item key={String(index)}>
                    <Left blue>
                      <Content illlustration>
                        <Parallax y={[50, 0]}>
                          <img src={item.illlustration} alt={item.title} />
                        </Parallax>
                      </Content>
                    </Left>
                    <Right>
                      <Content>
                        <div>
                          <Fade>
                            <Text
                              classes="h5"
                              tag="h5"
                              text={item.title}
                              align="left"
                              bold
                            />
                          </Fade>
                          <Fade>
                            <Text
                              classes="body2"
                              tag="div"
                              text={item.description}
                              color={theme.colors.darkGrey}
                              style={{ marginTop: '24px' }}
                              maxWidth="400px"
                            />
                          </Fade>
                        </div>
                      </Content>
                    </Right>
                  </Item>
                )
              }
              return (
                <Item key={String(index)}>
                  <Left>
                    <Content>
                      <div>
                        <Text
                          classes="h5"
                          tag="h5"
                          text={item.title}
                          bold
                        />
                        <Text
                          classes="body2"
                          tag="div"
                          text={item.description}
                          color={theme.colors.darkGrey}
                          style={{ marginTop: '24px' }}
                          maxWidth="400px"
                        />
                      </div>
                    </Content>
                  </Left>
                  <Right blue>
                    <Content illlustration>
                      <Parallax y={[0, 50]}>
                        <img src={item.illlustration} alt={item.title} />
                      </Parallax>
                    </Content>
                  </Right>
                </Item>
              )
            })
          }
        </Wrapper>
      </Desktop>
      <Mobile>
        {
          items.map((item, index) => (
            <Item key={String(index)}>
              <Left blue>
                <Content illlustration>
                  <Parallax y={[40, 0]}>
                    <img src={item.illlustration} alt={item.title} />
                  </Parallax>
                </Content>
              </Left>
              <Right>
                <Content>
                  <div>
                    <Fade>
                      <Text
                        classes="h5"
                        tag="h5"
                        text={item.title}
                        bold
                      />
                    </Fade>
                    <Fade>
                      <Text
                        classes="body2"
                        tag="div"
                        text={item.description}
                        color={theme.colors.darkGrey}
                        style={{ marginTop: '24px' }}
                        maxWidth="400px"
                      />
                    </Fade>
                  </div>
                </Content>
              </Right>
            </Item>
          ))
        }
      </Mobile>
    </Section>
  )
}

const Desktop = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Mobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Item = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column; 
  }
`;
const Left = styled.div`
  width: 50%;
  min-height: 350px;
  background-color: white;
  display: flex;
  justify-content: flex-end;

  ${({ blue, theme }) => blue && css`
    background-color: ${theme.colors.primary};
    overflow: hidden;
  `}

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: flex-end;
  }

  @media screen and (max-width: 578px) {
    min-height: 300px;
  }
`;
const Right = styled.div`
  width: 50%;
  min-height: 350px;
  background-color: white;

  ${({ blue, theme }) => blue && css`
    background-color: ${theme.colors.primary};
    overflow: hidden;
  `}

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 578px) {
    min-height: 280px;
  }
`;
const Content = styled.div`
  width: 570px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 1200px) {
    width: 100%;
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (max-width: 992px) {
    ${({ illlustration }) => illlustration && css`
      text-align: center;
    `}

    img {
      width: 80%;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 578px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;


