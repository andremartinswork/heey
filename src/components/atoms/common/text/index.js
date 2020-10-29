import React from 'react';
import styled, { css } from 'styled-components';

export default function Typography(props) {
  const {
    classes = "typography",
    tag = "span", // PODES DEFINIR A A TAG QUE QUISERES H1, H2, P ...
    text,

    // TEXT
    align = "inherit",
    uppercase,
    underline,
    noWrap,
    hyphens,
    ellipsis, // PASS NUMBER OF LINES
    lineHeight, 
    letterSpacing,
    maxWidth,
    bold,

    // COLOR
    color,

    // STYLE-INLINE
    style,
  } = props;

  const stylesProps = {
    align,
    uppercase,
    underline,
    noWrap,
    hyphens,
    ellipsis,
    lineHeight,
    letterSpacing,
    maxWidth,
    bold,
    color,
    style
  }

  if (text) {
    return (
      <Atom
        {...stylesProps}
        className={classes}
        as={tag}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    )
  }
  return null;
}

const Atom = styled.div`
  ${({ align }) => align && css`
    text-align: ${align}!important;;
  `}
  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase!important;;
  `}
  ${({ underline }) => underline && css`
    text-decoration: underline!important;;
  `}
  ${({ noWrap }) => noWrap && css`
    white-space: nowrap;
  `}
  ${({ hyphens }) => hyphens && css`
    hyphens: ${hyphens};
  `}
  ${({ ellipsis }) => ellipsis && css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${ellipsis};
    -webkit-box-orient: vertical;
  `}
  ${({ lineHeight }) => lineHeight && css`
    line-height: ${lineHeight}!important;;
  `}
  ${({ letterSpacing }) => letterSpacing && css`
    letter-spacing: ${letterSpacing}!important;
  `}
  ${({ maxWidth }) => maxWidth && css`
    max-width: ${maxWidth};
  `}
  ${({ bold }) => bold && css`
    font-weight: bold!important;
  `}
  ${({ color }) => color && css`
    color: ${color}!important;
  `}

  ul {
    list-style-type: circle;
    padding-left: 18px;
  }
`;