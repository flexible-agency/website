import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Link } from "gatsby";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Helping you build better apps" />

      <section>
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight md:leading-tight mb-2 md:mb-5">
          Helping you build better apps
        </h1>

        <p className="text-xl md:text-2xl leading-relaxed md:leading-relaxed mb-12 md:mb-20">
          We build tools and libraries for developers to simplify creating
          amazing web and mobile apps.
        </p>

        <div
          className="rounded-lg bg-blue-100 bg-center bg-cover bg-no-repeat relative overflow-hidden mb-10"
          style={{
            backgroundImage: `url(${require("../assets/images/cover-thumbnails-cloud.svg")})`,
          }}
        >
          <div className="w-1/2 p-10 md:p-16 relative z-20">
            <h2 className="text-2xl font-bold mb-3">Thumbnails Cloud</h2>
            <p className="text-lg mb-12">
              Generate image previews for more than 50 file types on the fly.
            </p>
            <Link
              className="font-semibold text-blue-600"
              to="/thumbnails-cloud"
            >
              Get started &rarr;
            </Link>
          </div>
        </div>

        <div
          className="rounded-lg bg-yellow-100 bg-contain bg-right bg-no-repeat relative overflow-hidden mb-10"
          style={{
            backgroundImage: `url(${require("../assets/images/cover-macaw.svg")})`,
          }}
        >
          <div className="w-1/2 p-10 md:p-16 relative z-20">
            <h2 className="text-2xl font-bold mb-3">Macaw</h2>
            <p className="text-lg mb-12">
              A toolkit for sending transactional emails with simple templates.
            </p>
            <a
              className="font-semibold text-blue-600"
              href="https://macaw.email"
            >
              Learn more &rarr;
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
