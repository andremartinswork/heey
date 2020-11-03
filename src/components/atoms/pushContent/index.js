import React from 'react';
import styled from 'styled-components';

export default function PushContent(props) {
  const { children } = props;

  return (
    <Block>
      <Left />
      <Right>
        {children}
      </Right>
    </Block>
  )
}

const Block = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 268px;

  @media screen and (max-width: 1410px) {
    width: 200px;
  }

  @media screen and (max-width: 1200px) {
    width: 150px;
  }
  @media screen and (max-width: 1024px) {
    width: 0
  }
`;
const Right = styled.div`
  flex: 2;
`;