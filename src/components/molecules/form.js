import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import theme from "../../styles/theme";
import { Text, Align, Button, Wrapper } from "../atoms";

function ContactForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xqkyedgy",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(
          true,
          "Message Submitted! We'll reply as soon as possible",
          form
        );
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  const button = {
    buttonTheme: "theme1",
    type: "button",
    text: "Submit",
    anchor: "Projects",
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <InputWrapper>
        <TextField
          id="name"
          type="name"
          name="name"
          required
          placeholder="Name*"
        />
      </InputWrapper>
      <Wrapper top sm>
        <InputWrapper>
          <TextField
            id="email"
            type="email"
            name="email"
            required
            placeholder="Email*"
          />
        </InputWrapper>
      </Wrapper>

      <Wrapper top sm>
        <InputWrapper>
          <TextArea
            rows={5}
            id="message"
            name="message"
            placeholder="Message*"
          >
          </TextArea>
        </InputWrapper>
      </Wrapper>

      <Wrapper top md>
        <Button {...button} disabled={serverState.submitting} />
      </Wrapper>

      {serverState.status && (
        <Wrapper top top>
          <Text
            classes="body2"
            tag="p"
            text={serverState.status.msg}
            color={theme.colors.darkGrey}
          />
        </Wrapper>
      )}
    </Form>
  );
}

export default ContactForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputWrapper = styled.div`
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
`;

const TextField = styled.input`
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 24px;
  border-bottom: 1px solid #000;
  color: #000;

  font-family: Oxygen;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;

  ::placeholder {
    font-weight: bold;
    color: #000000;
    text-transform: uppercase;
  }

  :focus {
    transition: all 0.4s ease;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 24px;
  border-bottom: 1px solid #000;
  color: #000;
  font-family: Oxygen;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;

  ::placeholder {
    font-weight: bold;
    color: #000000;
    text-transform: uppercase;
  }

  :focus {
    transition: all 0.4s ease;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
