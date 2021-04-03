import React from "react";

import Header from "../../components/Header";
import SEO from "../../components/SEO";

function ThumbnailsCloudPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans leading-normal text-gray-900">
      <SEO title="File thumbnails API" siteTitle="Thumbnails Cloud" />
      <div
        className="bg-blue-100 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${require("../../assets/images/cover-thumbnails-cloud.svg")})`,
        }}
      >
        <Header title="Thumbnails Cloud" menu={<>
          <a
            className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
            href="#usage"
          >
            Documentation
          </a>
          <a
            className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
            href="mailto:info@flexible.agency"
          >
            Contact
          </a>
        </>} />
        <main className="flex-1 w-full max-w-3xl px-6 py-8 mx-auto md:px-8 md:py-16 pr-40 md:pr-16">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-tight mb-2 md:mb-5">
            Generate file thumbnails on the fly
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed md:leading-relaxed mb-12 md:mb-16">
            The simplest API you&apos;ve ever used for generating previews of
            50+ file types.
          </p>
          <a
            className="inline-block py-3 mb-6 font-bold text-lg px-6 bg-gray-900 text-white rounded hover:bg-blue-800"
            href="https://schofco.chargebee.com/hosted_pages/plans/thumbnails-cloud"
            target="_blank" rel="noreferrer"
          >
            Get your API key
          </a>
        </main>
      </div>

      <main className="flex-1 w-full max-w-3xl px-6 pt-8 mb-0 mx-auto md:px-8 md:pt-16">
        <section>
          <h2 className="text-2xl font-bold mt-3 mb-3">Features</h2>

          <p className="prose">
            The thumbnails.cloud API generates JPEG file previews for all common
            document formats, using a simple API. Get an API token for $8/mo for
            personal and small-scale projects, and create an unlimited number of
            preview images! For large-scale and enterprise licensing, please{" "}
            <a href="mailto:info@schof.co?subject=Thumbnails%20Cloud%20pricing%20inquiry">
              contact us
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Examples</h2>
          <p className="prose mb-2">
            The API supports a ton of formats, but here are some examples:
          </p>
          <table className="is-bordered">
            <tbody>
              <tr className="text-sm">
                <th width="25%">
                  <a href="https://lowcdn.com/2x/bf7/598f234dbb76-0037a0222e/example.doc">
                    example.doc
                  </a>
                </th>
                <th width="25%">
                  <a href="https://lowcdn.com/2x/a4b/5054667bf29b-00397017f1/example-docx.docx">
                    example.docx
                  </a>
                </th>
                <th width="25%">
                  <a href="https://lowcdn.com/2x/756/f6d9194b1767-0051f03200/example.ai">
                    example.ai
                  </a>
                </th>
                <th width="25%">
                  <a href="https://lowcdn.com/2x/7a7/edfb731fd240-00aff01a99/example.eps">
                    example.eps
                  </a>
                </th>
              </tr>
              <tr>
                <td width="25%">
                  <a
                    data-mediabox="doc"
                    target="_blank"
                    href="https://thumbnails.cloud/v1/jpg?token=example&url=https://lowcdn.com/2x/bf7/598f234dbb76-0037a0222e/example.doc&size=1200"
                    rel="noreferrer"
                  >
                    <img
                      alt=".doc example"
                      src="https://thumbnails.cloud/v1/jpg?token=example&url=https://lowcdn.com/2x/bf7/598f234dbb76-0037a0222e/example.doc&size=1200"
                    />
                  </a>
                </td>
                <td width="25%">
                  <a
                    data-mediabox="docx"
                    target="_blank"
                    href="https://thumbnails.cloud/v1/jpg?token=example&url=https://lowcdn.com/2x/a4b/5054667bf29b-00397017f1/example-docx.docx&size=1200"
                    rel="noreferrer"
                  >
                    <img
                      alt=".docx example"
                      src="https://thumbnails.cloud/v1/jpg?token=example&url=https://lowcdn.com/2x/a4b/5054667bf29b-00397017f1/example-docx.docx&size=1200"
                    />
                  </a>
                </td>
                <td width="25%">
                  <a
                    data-mediabox="ai"
                    target="_blank"
                    href="https://thumbnails.cloud/v1/jpg?token=example&url=https://lowcdn.com/2x/756/f6d9194b1767-0051f03200/example.ai&size=1200"
                    rel="noreferrer"
                  >
                    <img
                      alt=".ai example"
                      src="https://thumbnails.cloud/v1/jpg?token=example&url=https://lowcdn.com/2x/756/f6d9194b1767-0051f03200/example.ai&size=1200"
                    />
                  </a>
                </td>
                <td width="25%">
                  <a
                    data-mediabox="eps"
                    target="_blank"
                    href="https://thumbnails.cloud/v1/jpg?token=example&url=https://lowcdn.com/2x/7a7/edfb731fd240-00aff01a99/example.eps&size=1200"
                    rel="noreferrer"
                  >
                    <img
                      alt=".eps example"
                      src="https://thumbnails.cloud/v1/jpg?token=example&url=https://lowcdn.com/2x/7a7/edfb731fd240-00aff01a99/example.eps&size=1200"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <a name="usage"/>
          <h2 id="usage" className="text-2xl font-bold mt-10 mb-3">Usage</h2>
          <p className="prose">URL structure:</p>
          <pre className="rounded bg-gray-200 mt-2 mb-5 p-4 px-5">
            <code>{`https://thumbnails.cloud/v1/jpg
  ?token=your-api-token
  &url=https://example.com/my-file.doc
  &size=600
  &mode=crop`}</code>
          </pre>

          <table className="is-bordered">
            <thead>
              <tr className="text-sm">
                <th>Parameter</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className="prose">
              <tr>
                <td>
                  <code>url</code>
                </td>
                <td>
                  ✅
                </td>
                <td>
                  The URL of the original document. Should be publicly available
                  via HTTP or HTTPS. Make sure to{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Percent-encoding"
                    target="_blank"
                    rel="noreferrer"
                  >
                    urlencode
                  </a>{" "}
                  your URL!
                </td>
              </tr>
              <tr>
                <td>
                  <code>token</code>
                </td>
                <td>
                  ✅
                </td>
                <td>Your API token. Sign up above.</td>
              </tr>
              <tr>
                <td>
                  <code>size</code>
                </td>
                <td>
                </td>
                <td>
                  Pixel width of your thumbnail. Defaults to <code>600</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>mode</code>
                </td>
                <td>

                </td>
                <td>
                  Specify <code>crop</code> to get a square image, or{" "}
                  <code>orig</code> to maintain original aspect ratio. Defaults
                  to <code>crop</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>gravity</code>
                </td>
                <td>

                </td>
                <td>
                  For documents, specify where the gravity lies for cropping.
                  Options: <code>North</code>, <code>South</code>,{" "}
                  <code>East</code>, <code>West</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>format</code>
                </td>
                <td>

                </td>
                <td>
                  By default, an image is returned. Specify <code>json</code> to
                  get back a base64 encoded version in a JSON object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>offset</code>
                </td>
                <td>

                </td>
                <td>
                  For videos, specify a second offset to use for the thumbnail.
                  Defaults to <code>0</code>. If you specify a offset higher
                  than the duration of the video, the conversion will fail.
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold mt-10 mb-3">
            Supported file extensions
          </h2>
          <p className="prose">
            You can query the <code>/v1/extensions</code> endpoint to get an
            up-to-date overview of the supported file extensions. Note that this
            refers to the file types that can be converted into JPG, PDF support
            is currently slightly more limited.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3">
            How we handle your data
          </h2>
          <p className="prose">
            We care about privacy, and know that you might be using our API to
            create previews for potentially confidential documents. That&apos;s
            why we don&apos;t log the URLs of the documents you convert, nor do
            we keep the original documents after we&apos;ve converted them.
          </p>
          <p className="prose my-4">
            We do however temporarily store the create preview image using on
            our CDN servers, to allow hot linking to dynamic previews, without
            having to recreate the preview image on every request. There is,
            however, no way for other users of the service to access a list of
            the files you converted through the API.
          </p>
        </section>
      </main>
      <div className="bg-gray-100 py-10 md:py-20 mt-16 md:mt-24 flex items-center justify-center">
        <a
          href="https://www.producthunt.com/posts/thumbnails-cloud?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-thumbnails-cloud"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=164600&theme=dark"
            alt="Thumbnails Cloud - The simplest API for generating file thumbnails | Product Hunt Embed"
          />
        </a>
      </div>
    </div>
  );
}

export default ThumbnailsCloudPage;
