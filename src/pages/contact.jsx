import React, { useState } from "react";
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
      <div className="my-5">
        <h1>Contact</h1>
        <div className="my-3">
          Fill out the form with your contact information. Feel free to ask any
          questions you have about us or our process. We'll get back with you as
          soon as we can.
        </div>
        {submitted && (
          <span>
            Thanks for contacting us. We'll be in touch with you soon!
          </span>
        )}
        <form
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
          <div>
            <div>
              <label>Your Name:</label>
              <input
                required
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Your Email:</label>
              <input
                required
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Your Phone Number:</label>
              <input
                as={PatternFormat}
                allowEmptyFormatting
                format="(###) ###-####"
                mask="_"
                name="number"
                value={state.number}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Message:</label>
              <textarea
                required
                name="comments"
                value={state.comments}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export const Head = () => <SEO />;
