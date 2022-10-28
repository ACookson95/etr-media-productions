import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Stack,
  Alert,
} from "react-bootstrap";
import { PatternFormat } from "react-number-format";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const initialState = {
    name: "",
    email: "",
    number: "",
    comments: "",
  };
  const [state, setState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        setSubmitted(true);
        setState(initialState);
      })
      .catch((error) => alert(error));
  };

  return (
    <Layout>
      <Container className="my-5">
        <h1>Contact</h1>
        <div className="my-3">
          Fill out the form with your contact information. Feel free to ask any
          questions you have about us or our process. We'll get back with you as
          soon as we can.
        </div>
        {submitted && (
          <Alert variant="success">
            Thanks for contacting us. We'll be in touch with you soon!
          </Alert>
        )}
        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <Stack gap={2}>
            <Form.Group>
              <Form.Label>Your Name:</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Email:</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Phone Number:</Form.Label>
              <Form.Control
                as={PatternFormat}
                allowEmptyFormatting
                format="(###) ###-####"
                mask="_"
                name="number"
                value={state.number}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message:</Form.Label>
              <Form.Control
                required
                as="textarea"
                type="text"
                name="comments"
                value={state.comments}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Stack>
        </Form>
      </Container>
    </Layout>
  );
}

export const Head = () => <SEO />;
