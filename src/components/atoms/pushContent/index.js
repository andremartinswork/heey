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
`;
const Right = styled.div`
  flex: 2;
`;