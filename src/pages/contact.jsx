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
  const  contactImage = getImage(image?.childImageSharp?.gatsbyImageData);

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
      <div className="wrap container mx-auto py-8">
        <div className="grid grid-cols-10">
          <div className="row-span-full col-start-1 col-span-6 self-center">
            <GatsbyImage className="object-cover rounded-lg" image={contactImage} alt="Contact Us Image" />
          </div>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="flex flex-col row-span-full col-span-6 col-end-11 self-center bg-zinc-100/95 rounded-lg p-8 drop-shadow-lg gap-4"
          >
            <h1 className="text-xl">{title}</h1>
            <p className="text-sm">{summary}</p>
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <div>
              <div className="mb-4">
                <label className="block text-zinc-700 text-sm font-bold mb-2">Name:</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-zinc-700 text-sm font-bold mb-2">Email:</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-zinc-700 text-sm font-bold mb-2">Phone Number (optional):</label>
                <input
                  type="tel"
                  name="number"
                  value={state.number}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-zinc-700 text-sm font-bold mb-2">Message:</label>
                <textarea
                  required
                  name="comments"
                  value={state.comments}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full h-24 py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button className="py-3 px-5 text-zinc-50 bg-sky-700 rounded hover:bg-sky-800" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

export const query = graphql`
  query PageQuery {
    markdownRemark(frontmatter: {path: {eq: "/contact"}}) {
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
`

export const Head = () => <SEO />;
