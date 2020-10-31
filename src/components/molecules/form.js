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
        <Label htmlFor="name">
          <Text
            classes="body2"
            tag="p"
            text="Name"
            color={theme.colors.darkGrey}
          />
        </Label>
        <TextField id="name" type="name" name="name" required />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="email">
          <Text
            classes="body2"
            tag="p"
            text="Email"
            color={theme.colors.darkGrey}
          />
        </Label>
        <TextField id="email" type="email" name="email" required />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="message">
          <Text
            classes="body2"
            tag="p"
            text="Message"
            color={theme.colors.darkGrey}
          />
        </Label>
        <TextArea rows={5} id="message" name="message"></TextArea>
      </InputWrapper>
      <Wrapper md>
        <Button {...button} disabled={serverState.submitting} />
      </Wrapper>

      {serverState.status && (
        <Wrapper top>
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
const Label = styled.label`
  font-weight: bold !important;
  margin-bottom: 0.5em;
`;

const InputWrapper = styled.div`
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
`;

const TextField = styled.input`\
width: 50%;
background-color: #fff;
border-color: #d2d6dc;
border-width: 1px;
border-radius: .375rem;
padding: .5rem .75rem;
border-style: none;
font-size: 1em; 
border: 1px solid #ccc;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

`;
const TextArea = styled.textarea`
  width: 50%;
  font-size: 1em;
  background-color: #fff;
  border-color: #d2d6dc;
  border-width: 1px;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
