import React, { useEffect } from "react";
import { useRouter } from "next/router";

const getApiKey = (router) => router?.query?.id?.replace("sub_", "");

function ThumbnailsCloudSubscribedPage() {
  const router = useRouter();
  const apiKey = getApiKey(router);

  useEffect(() => {
    if (apiKey && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-10784498299/6y_4CKSxyvsCEPvEuZYo",
      });
    }
  }, [apiKey]);

  return (
    <>
      <h2 className="text-4xl font-bold mb-10 mt-4">Thanks for subscribing!</h2>

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

      <a href={"/thumbnails-cloud/#usage"} className="text-blue-500 underline">
        More details
      </a>
    </>
  );
}

export default ThumbnailsCloudSubscribedPage;
