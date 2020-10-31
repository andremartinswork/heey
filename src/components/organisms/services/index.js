import React from 'react';
import styled, { css } from 'styled-components';
import { Section, Text, Wrapper } from '../../atoms';
import { Parallax } from 'react-scroll-parallax';

export default function Services(props) {
  const {
    sectionName,
    items
  } = props;

  return (
    <Section classes={sectionName}>
      <Wrapper bottom lg>

      
      {
        items.map((item, index) => {
          if (index % 2 == 0) {
            return (
              <Item key={String(index)}>
                <Left blue>
                  <Content>
                  <Parallax y={[50, 0]}>
                      <img src={item.illlustration} alt={item.title} />
                    </Parallax>
                  </Content>
                </Left>
                <Right>
                  <Content>
                    <div>
                      <Text
                        classes="h5"
                        tag="h5"
                        text={item.title}
                      />
                      <Text
                        classes="body2"
                        tag="div"
                        text={item.description}
                        style={{ marginTop: '24px' }}
                        maxWidth="400px"
                      />
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
                    />
                    <Text
                      classes="body2"
                      tag="div"
                      text={item.description}
                      style={{ marginTop: '24px' }}
                      maxWidth="400px"
                    />
                  </div>
                </Content>
              </Left>
              <Right blue>
                <Content>
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
    </Section>
  )
}

const Item = styled.div`
  display: flex;
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
`;
const Right = styled.div`
  width: 50%;
  min-height: 350px;
  background-color: white;

  ${({ blue, theme }) => blue && css`
    background-color: ${theme.colors.primary};
    overflow: hidden;
  `}
`;
const Content = styled.div`
  width: 570px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


