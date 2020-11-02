import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';

import {
  Parallax
} from 'react-scroll-parallax';

import {
  Section,
  Wrapper,
  Container,
  Text,
  PushContent
} from '../../atoms';

import SwiperStyles from './swiperStyles';
import theme from '../../../styles/theme';

export default function Projects(props) {
  const {
    sectionName,
    title,
    text,
    items,
    dragText
  } = props;

  const params = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: false,
    grabCursor: true,
    freeMode: true,
    loop: true
  }

  return (
    <Section classes={sectionName} backgroundColor={theme.colors.white}>>
      <SwiperStyles />

      <Wrapper top lg>
        <Parallax className="custom-class" x={[20, 0]} tagOuter="div">
          <Text
            classes="h2"
            tag="h2"
            text={title}
            color={theme.colors.black}
            uppercase
            align="center"
          />
        </Parallax>
      </Wrapper>
      <Wrapper both lg>
        <Container lg>
          <PushContent>
            <Text
              classes="body2"
              tag="div"
              text={text}
              color={theme.colors.darkGrey}
              maxWidth="500px"
            />
          </PushContent>
        </Container>
      </Wrapper>

      <WrapperSwiper>
        <Spacer />
        <Swiper {...params}>
          {
            items.map((item, index) => (
              <div className={`item ${item.size}`} key={String(index)}>
                <img src={item.image} alt={item.alt} />
              </div>
            ))
          }
        </Swiper>
        <Container lg zIndex={2}>
          <PushContent>
            <Spacer>
              <Flex>
                <Text
                  classes="body3"
                  tag="span"
                  text={dragText}
                  color={theme.colors.black}
                  uppercase
                  bold
                />
                <Bar />
              </Flex>
            </Spacer>
          </PushContent>
        </Container>
        <Background />
      </WrapperSwiper>
    </Section>
  )
}

const WrapperSwiper = styled.div`
  position: relative;
    
  .large {
    width: 800px!important;
    height: 640px;
  }
  
  .medium {
    width: 640px!important;
    height: 640px;
  }
  
  .small {
    width: 430px!important;
    height: 640px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
/** TO DO*/
const Spacer = styled.div`
  width: 100%;
  height: calc(100px + (140 - 100) * ((100vw - 320px) / (1920 - 320)));
  display: flex;
 
  align-items: center;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Bar = styled.div`
  margin-left: 16px;
  position: relative;
  width: 60px;
  height: 1px;
  overflow: hidden;
  
  :after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 30px;
    height: 1px;
    background-color:${({ theme }) => theme.colors.primary};
    animation: loop 2.5s infinite both;
  }
  
  @keyframes loop {
    0% {
      transform: translateX(-120px);
      animation-timing-function: ease- out;
    }
    100% {
      transform: translateX(60px);
      animation-timing-function: ease-in
    }
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: calc(1140px + ((100vw - 1140px) / 2));
  background: #F5F4FB;
`;