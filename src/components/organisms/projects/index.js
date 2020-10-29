import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Swiper from 'react-id-swiper';

import {
  Parallax
} from 'react-scroll-parallax';

import {
  Section,
  Wrapper,
  Container,
  Text,
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
    <Section classes={sectionName}>
      <SwiperStyles />
      <Index>
      <Parallax className="custom-class" x={[20, -20]} tagOuter="div">
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
      <WrapperSwiper>
        <Swiper {...params}>
          {
            items.map((item, index) => (
              <div className={`item ${item.size}`} key={String(index)}>
                <img src={item.image} alt={item.alt} />
              </div>
            ))
          }
        </Swiper>
      </WrapperSwiper>
      <Wrapper both sm>
        <Container lg>
          <Flex>
            <Text
              classes="body3"
              tag="span"
              text={dragText}
              color={theme.colors.black}
            />
            <Bar />
          </Flex>
        </Container>
      </Wrapper>
      </Index>
      <Triangle />
    </Section>
  )
}

const Index = styled.div`
  position: relative;
  z-index: 2;
`;
const WrapperSwiper = styled.div`
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
const Flex = styled.div`
  display: flex;
  align-items: center;
`;
const Bar = styled.div`
  margin-left: 24px;
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
      animation-timing-function: ease-out;
    }
    100% {
      transform: translateX(60px);
      animation-timing-function: ease-in
    }
  }
`;
const Triangle = styled.div`
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
  border-top: 100vh solid transparent;
  border-bottom: 0px solid transparent;
  border-right: 100vw solid ${({ theme }) => theme.colors.grey};
`;