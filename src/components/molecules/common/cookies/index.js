import React, {  useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  Text,
  Button
} from '../../../atoms';

import {
  checkCookie,
  setCookie
} from '../../../../utils/cookies';

export default function Cookies(props) {
  const {
    title,
    text,
    button
  } = props;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!checkCookie('ac')) {
      setTimeout(() => {
        setOpen(true);
      }, 4000)
    }
  }, [])

  function onClick() {
    setCookie('ac', 'yes', 366)
    setOpen(false)
  }

  const variants = {
    open: { opacity: 1, y: 0, zIndex: 10000 },
    closed: { opacity: 0, y: "100%" },
  }

  return (
    <Modal animate={open ? "open" : "closed"} variants={variants}>
      <Content>
        <Text
          classes="h5"
          tag="div"
          text={title}
          uppercase
          bold
        />
        <Text
          classes="body2"
          tag="p"
          text={text}
          style={{ marginTop: '16px', marginBottom: '24px' }}
        />

        <Button
          {...button}
          click={onClick}
        />
      </Content>
    </Modal>
  )
}

const Modal = styled(motion.div)`
  position: fixed;
  left: 32px;
  bottom: 32px;
  z-index: 10000;
  width: 400px;
  background-color: white;
  box-sizing: border-box;
  border: 2px solid rgba(0,0,0,1);
  opacity: 0;
  z-index: -1;
  transform: translateY(100%);
`;
const Content = styled.div`
  padding: 32px 48px;
`;