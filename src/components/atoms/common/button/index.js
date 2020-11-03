import React from "react";
import styled, { css } from "styled-components";
import Ink from "react-ink";
import { Link } from "react-scroll";

export default function Button(props) {
  function renderAnchor() {
    const { buttonTheme, type, text, anchor } = props;

    if (type === "anchor") {
      return (
        <Link to={anchor}>
          <Atom buttonTheme={buttonTheme}>
            <Ink style={{ color: "white" }} />
            <Text>{text}</Text>
          </Atom>
        </Link>
      );
    }
    return null;
  }

  function renderHref() {
    const { buttonTheme, type, text, href } = props;

    if (type === "href") {
      return (
        <a href={href} target="_blank">
          <Atom buttonTheme={buttonTheme}>
            <Ink style={{ color: "white" }} />
            <Text>{text}</Text>
          </Atom>
        </a>
      );
    }
    return null;
  }

  function renderButton() {
    const { buttonTheme, type, text, click } = props;

    if (type === "button") {
      return (
        <Atom buttonTheme={buttonTheme} onClick={click} as="button">
          <Ink style={{ color: "white" }} />
          <Text>{text}</Text>
        </Atom>
      );
    }
    return null;
  }
  // PEDRO: Aqui bastava teres uma funçao. E os ifs la dentro
  // ANDRÉ: Eu sei xD

  return (
    <>
      {renderAnchor()}
      {renderHref()}
      {renderButton()}
    </>
  );
}

const Text = styled.span`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 1px;
  font-weight: bold;
  transition: all 0.4s ease;
  text-transform: uppercase;

  @media screen and (max-width: 578px) {
    font-size: 14px;
  }
`;

const Atom = styled.div`
  position: relative;
  padding: 16px 48px;
  transition: all 0.4s ease;

  ${({ theme, buttonTheme }) =>
    buttonTheme === "theme1" &&
    css`
      background-color: ${theme.colors.primary};

      ${Text} {
        color: ${theme.colors.white};
      }


      :hover {
        opacity: 0.8;
        cursor: pointer;
      }
    `}

  ${({ theme, buttonTheme }) => buttonTheme === "theme2" && css`
    background-color: ${theme.colors.black};

    ${Text} {
      color: ${theme.colors.white};
    }

    :hover {
      ${Text} {
        color: ${theme.colors.black};
      }
      background-color: ${theme.colors.white};
      /* opacity: 0.8; */
      cursor: pointer;
    }
  `}

  ${({ theme, buttonTheme }) => buttonTheme === "theme3" && css`
    border: 1px solid black;

    ${Text} {
      color: ${theme.colors.black};
    }

    :hover {
      ${Text} {
        color: ${theme.colors.white};
      }
      background-color: ${theme.colors.black};
      /* opacity: 0.8; */
      cursor: pointer;
    }
  `}

  @media screen and (max-width: 578px) {
    padding: 16px 32px;
  }
`;
