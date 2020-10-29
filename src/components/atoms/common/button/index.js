import React from 'react';
import styled, { css } from 'styled-components';
import Ink from 'react-ink';

export default function Button(props) {
  function renderAnchor() {
    const {
      buttonTheme,
      type,
      text,
      anchor
    } = props;

    if (type === "anchor") {
      return (
        <a to={anchor}>
          <Atom buttonTheme={buttonTheme}>
            <Ink style={{ color: 'white' }} />
            <Text>
              {text}
            </Text>
          </Atom>
        </a>
      )
    }
    return null;
  }

  function renderHref() {
    const {
      buttonTheme,
      type,
      text,
      href
    } = props;

    if (type === "href") {
      return (
        <a href={href} target="_blank">
          <Atom buttonTheme={buttonTheme}>
            <Ink style={{ color: 'white' }} />
            <Text>
              {text}
            </Text>
          </Atom>
        </a>
      )
    }
    return null;
  }


  return (
    <>
      {renderAnchor()}
      {renderHref()}
    </>
  )
}

const Text = styled.span`
  font-family: 'Oxygen', sans-serif;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 1px;
`;

const Atom = styled.button`
  position: relative;
  padding: 16px 48px;
  transition: all 0.3s ease;

  ${({ theme, buttonTheme }) => buttonTheme === "theme1" && css`
    background-color: ${theme.colors.primary};

    ${Text} {
      color: ${theme.colors.white};
    }

    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  `}
`;


