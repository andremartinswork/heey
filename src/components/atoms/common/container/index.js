import styled, { css } from 'styled-components';
import { container } from './config';

export default function Container(props) {
  const {
    ids,
    classes,
    zIndex,
    backgroundColor,
    backgroundImage,
    full,
    lg,
    md,
    sm,
    xs,
    children
  } = props;

  return (
    <Atom 
      id={ids}
      className={classes}
      zIndex={zIndex}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      full={full}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
    >
      {children}
    </Atom>
  )
}

const Atom = styled.div`
  position: relative;

  ${({ zIndex }) => zIndex && css`
    z-index: ${zIndex};
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

  ${({ full }) => full && css`
    height: 100%;
  `}

  ${({ lg }) => lg && css`
    width: ${container.lg}px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 1410px) {
      width: ${container.md}px;
    }
    @media screen and (max-width: 1200px) {
      width: calc(100% - 180px);
      margin-left: 90px;
      margin-right: 90px;
    }
    @media screen and (max-width: 768px) {
      width: calc(100% - 120px);
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (max-width: 576px) {
      width: calc(100% - 40px);
      margin-left: 20px;
      margin-right: 20px;
    }
  `}

  ${({ md }) => md && css`
    width: ${container.md}px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 1024px) {
      width: calc(100% - 180px);
      margin-left: 90px;
      margin-right: 90px;
    }
    @media screen and (max-width: 768px) {
      width: calc(100% - 120px);
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (max-width: 576px) {
      width: calc(100% - 40px);
      margin-left: 20px;
      margin-right: 20px;
    }
  `}

  ${({ sm }) => sm && css`
    width: ${container.sm}px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 1024px) {
      width: calc(100% - 180px);
      margin-left: 90px;
      margin-right: 90px;
    }
    @media screen and (max-width: 768px) {
      width: calc(100% - 120px);
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (max-width: 576px) {
      width: calc(100% - 40px);
      margin-left: 20px;
      margin-right: 20px;
    }
  `}

  ${({ xs }) => xs && css`
    width: ${container.xs}px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 768px) {
      width: calc(100% - 120px);
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (max-width: 576px) {
      width: calc(100% - 40px);
      margin-left: 20px;
      margin-right: 20px;
    }
  `}
`;