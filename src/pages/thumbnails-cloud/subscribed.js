import React from "react";
import { Link, navigate } from "gatsby";
import { useLocation } from "@reach/router";
import queryString from "query-string";

import Header from "../../components/Header";
import SEO from "../../components/SEO";

const getApiKey = (location) => {
  if (!location.search) {
    return null;
  }

  const query = queryString.parse(location.search);
  return query.id && query.id.replace("sub_", "");
};

function ThumbnailsCloudSubscribedPage() {
  const location = useLocation();
  const apiKey = getApiKey(location);

  if (!apiKey) {
    navigate('/thumbnails-cloud/', { replace: true }).then();
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen font-sans leading-normal text-gray-900">
      <SEO title="File thumbnails API" siteTitle="Thumbnails Cloud" />
      <div className="bg-blue-100 bg-center bg-cover bg-no-repeat">
        <Header
          title="Thumbnails Cloud"
          menu={
            <>
              <a
                className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
                href={"/thumbnails-cloud/#usage"}
              >
                Documentation
              </a>
              <a
                className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
                href="mailto:info@flexible.agency"
              >
                Contact
              </a>
            </>
          }
        />
      </div>

      <main className="flex-1 w-full max-w-3xl px-6 pt-8 mb-0 mx-auto md:px-8 md:pt-16">
        <section>
          <h2 className="text-4xl font-bold mb-10 mt-4">
            Thanks for subscribing!
          </h2>

          <div className="prose mb-12">
            <p>
              We appreciate it! Check your email for more details and a link to
              manage your subscription.
            </p>

            <p>
              <strong>To get started, here is your API key:</strong>
            </p>

            <pre>
              <code>{apiKey}</code>
            </pre>

            <p>You can use it like this:</p>

            <pre>
              <code>
                &lt;img src=&quot;https://thumbnails.cloud/v1/jpg?token={apiKey}
                &amp;url=https://lowcdn.com/2x/bf7/598f234dbb76-0037a0222e/example.doc&quot;
                /&gt;
              </code>
            </pre>
          </div>

          <Link
            to="/thumbnails-cloud/#usage"
            className="text-blue-500 underline"
          >
            More details
          </Link>
        </section>
      </main>
    </div>
  );
}

export default ThumbnailsCloudSubscribedPage;
