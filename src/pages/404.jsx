import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Error 404: Page Not Found</h1>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <SEO />;
