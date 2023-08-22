import React, { useState } from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact = ({ data }) => {
  const { title, summary, image } = data.markdownRemark.frontmatter;
  const contactImage = getImage(image?.childImageSharp?.gatsbyImageData);

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
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-4">
          <div className="flex flex-col gap-4">
            <div className="bg-zinc-100 rounded-lg p-10">
              <div className="text-2xl">{title}</div>
              <div className="mt-2">{summary}</div>
            </div>
            <GatsbyImage
              className="object-cover rounded-lg w-full hidden sm:block"
              image={contactImage}
              alt="Contact Us Image"
            />
          </div>
          {submitted ? (
            <div className="bg-zinc-100 rounded-lg p-8 gap-8 h-full flex flex-col">
              <div className="bg-green-500/50 rounded-lg p-4">✔ Successfully Submitted</div>
              <div className="text-lg p-4 self-center">
                Thanks for reaching out! We'll be in touch as soon as we're able.
              </div>
            </div>
          ) : (
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col self-center bg-zinc-100 rounded-lg p-8 gap-4 h-full"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label htmlFor="bot-field">
                  Don’t fill this out:{" "}
                  <input id="bot-field" name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-zinc-700 text-sm font-bold mb-2">
                    Name:
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-zinc-700 text-sm font-bold mb-2">
                    Email:
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="number" className="block text-zinc-700 text-sm font-bold mb-2">
                    Phone Number (optional):
                  </label>
                  <input
                    id="number"
                    type="tel"
                    name="number"
                    value={state.number}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="comments" className="block text-zinc-700 text-sm font-bold mb-2">
                    Message:
                  </label>
                  <textarea
                    id="comments"
                    required
                    name="comments"
                    value={state.comments}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full h-24 py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <button
                  className="py-3 px-5 text-zinc-50 bg-sky-700 rounded hover:bg-sky-800"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query PageQuery {
    markdownRemark(frontmatter: { path: { eq: "/contact" } }) {
      frontmatter {
        title
        summary
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <SEO />;
