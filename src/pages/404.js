import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Link } from "gatsby";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Not found" />

      <section>
        <h2 className="text-3xl font-bold inline-block mb-4">
          Sorry, there&apos;s nothing here...
        </h2>
        <p className="prose">
          Let&apos;s go <Link to="/">back home</Link>.
        </p>
      </section>
    </Layout>
  );
}

export default NotFoundPage;
