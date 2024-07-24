import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react"
import { TinaMarkdown } from "tinacms/dist/rich-text";


// 754ad8a5-538e-5732-9ee2-8655a457b63f
export const query = graphql`
  query($id: String!) {
    mdx(id: {eq: $id}) {
      id
      body
      frontmatter {
        title
        heroImg
        excerpt
        author
        date
      }
    }
  }
`;
const shortcodes = { Link }

const BlogPostTemplate = ({ data, children }) => {
  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <TinaMarkdown content={data.mdx.body}/>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </>
  );
};

export default BlogPostTemplate;