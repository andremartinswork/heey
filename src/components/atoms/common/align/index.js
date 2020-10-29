import React from 'react';
import styled from 'styled-components';

export default function Align(props) {
  const {
    classes,
    children,
    left,
    right,
  } = props;

  function convertAlign() {
    if (left) {
      return 'flex-start';
    }
    else if (right) {
      return 'flex-end';
    }
    return 'center'
  }

  return (
    <Atom className={classes} align={convertAlign()}>
      {children}
    </Atom>
  )
}

const Atom = styled.div`
  display: flex;
  justify-content: ${({ align }) => align};
`;