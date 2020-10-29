import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

export default function Preview(props) {
  const {
    isPreview
  } = props;

  if (isPreview) {
    return (
      <Block>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        </Head>
        <Left>
          PREVIEW MODE: <span>ENABLED</span>
        </Left>
        <Right>
          <Link href="/api/preview?mode=disabled">
            <Button>
              DISABLED
            </Button>
          </Link>
        </Right>
      </Block>
    )
  }
  return null;
}

const Block = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 90px;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 48px;
  padding-right: 48px;
  border-top: 1px solid rgba(0,0,0,0.02);
`;
const Left = styled.div`
  font-family: 'Roboto', sans-serif;
  color: black;

  span {
    position: relative;
    color: #14c729;
    margin-left: 20px;

    :after {
      content: '';
      position: absolute;
      left: -16px;
      top: 4px;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: #14c729;
    }
  }
`;
const Right = styled.div`

`;
const Button = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 140px;
  height: 48px;
  background-color: #fa3d2f;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
`;