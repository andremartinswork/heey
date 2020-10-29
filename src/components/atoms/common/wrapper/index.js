import React from 'react';
import styled from 'styled-components';

import {
  wrapper
} from './config';

export default function Wrapper(props) {
  const {
    ids,
    classes,
    spaces,
    useMargin,
    top,
    bottom,
    both,
    xs,
    sm,
    md,
    lg,
    xl,
    backgroundColor = "transparent",
    children
  } = props;

  function returnSizes() {
    if (xl) {
      return `xl`
    } else if (lg) {
      return `lg`
    } else if (md) {
      return `md`
    } else if (sm) {
      return `sm`
    } else if (xs) {
      return `xs`
    }
    return `md`
  }

  if (spaces) {
    return (
      <Atom
        className={classes}
        useMargin={useMargin}
        top={spaces === 'top' && true}
        bottom={spaces === 'bottom' && true}
        both={spaces === 'both' && true}
        size={returnSizes()}
        style={{ backgroundColor: backgroundColor }}
      >
        {children}
      </Atom>
    )
  }
  return (
    <Atom
      id={ids}
      className={classes}
      useMargin={useMargin}
      top={top}
      bottom={bottom}
      both={both}
      size={returnSizes()}
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </Atom>
  )
}

const Atom = styled.div`
  ${({ useMargin, top, bottom, both, size }) => {
    if (useMargin) {
      if (top) {
        return `
          margin-top: ${wrapper.top.max[size]}px;

          @media only screen and (max-width: 1920px) {
            margin-top: calc(${wrapper.top.min[size]}px + (${wrapper.top.max[size]} - ${wrapper.top.min[size]}) * ((100vw - 320px) / (1920 - 320)));
          }
        `;
      } else if (bottom) {
        return `
          margin-bottom: ${wrapper.bottom.max[size]}px;

          @media only screen and (max-width: 1920px) {
            margin-bottom: calc(${wrapper.bottom.min[size]}px + (${wrapper.bottom.max[size]} - ${wrapper.bottom.min[size]}) * ((100vw - 320px) / (1920 - 320)));
          }
        `
      } else if (both) {
        return `
          margin-top: ${wrapper.top.max[size]}px;
          margin-bottom: ${wrapper.top.max[size]}px;

          @media only screen and (max-width: 1920px) {
            margin-top: calc(${wrapper.top.min[size]}px + (${wrapper.top.max[size]} - ${wrapper.top.min[size]}) * ((100vw - 320px) / (1920 - 320)));
            margin-bottom: calc(${wrapper.bottom.min[size]}px + (${wrapper.bottom.max[size]} - ${wrapper.bottom.min[size]}) * ((100vw - 320px) / (1920 - 320)));
          }
        `
      }
    }
    else {
      if (top) {
        return `
          padding-top: ${wrapper.top.max[size]}px;

          @media only screen and (max-width: 1920px) {
            padding-top: calc(${wrapper.top.min[size]}px + (${wrapper.top.max[size]} - ${wrapper.top.min[size]}) * ((100vw - 320px) / (1920 - 320)));
          }
        `;
      } else if (bottom) {
        return `
          padding-bottom: ${wrapper.bottom.max[size]}px;

          @media only screen and (max-width: 1920px) {
            padding-bottom: calc(${wrapper.bottom.min[size]}px + (${wrapper.bottom.max[size]} - ${wrapper.bottom.min[size]}) * ((100vw - 320px) / (1920 - 320)));
          }
        `
      } else if (both) {
        return `
          padding-top: ${wrapper.top.max[size]}px;
          padding-bottom: ${wrapper.bottom.max[size]}px;

          @media only screen and (max-width: 1920px) {
            padding-top: calc(${wrapper.top.min[size]}px + (${wrapper.top.max[size]} - ${wrapper.top.min[size]}) * ((100vw - 320px) / (1920 - 320)));
            padding-bottom: calc(${wrapper.bottom.min[size]}px + (${wrapper.bottom.max[size]} - ${wrapper.bottom.min[size]}) * ((100vw - 320px) / (1920 - 320)));
          }
        `
      }
    }
  }}
`;
