import React from 'react';
import styled, { css } from 'styled-components';

export default function Section(props) {
  const {
    ids,
    classes,
    overflow,
    zIndex,
    backgroundColor,
    backgroundImage,
    full,
    children,
    style
  } = props;

  return (
    <Atom
      id={ids}
      className={classes}
      zIndex={zIndex}
      overflow={overflow}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      full={full}
      style={style}
    >
      {children}
    </Atom>
  )
}

const Atom = styled.section`
  position: relative;

  ${({ zIndex }) => zIndex && css`
    z-index: ${zIndex};
  `}

  ${({ overflow }) => overflow && css`
    overflow: hidden;
  `}

  ${({ full }) => full && css`
    min-height: 100vh;
  `}

  ${({ backgroundColor }) => backgroundColor && css`
    background-color: ${backgroundColor};
  `}

  ${({ backgroundImage }) => backgroundImage && css`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}
`;

