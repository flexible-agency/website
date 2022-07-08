import React from "react";
import Link from "next/link";

function IndexPage() {
  return (
    <>
      <h1 className="text-4xl md:text-6xl max-w-3xl font-extrabold leading-tight md:leading-tight mb-2 md:mb-5">
        Crafting digital platforms and developer tools
      </h1>

      <p className="text-xl md:text-2xl max-w-3xl leading-relaxed md:leading-relaxed mb-12 md:mb-20">
        We build the tech that powers social enterprises in education, fashion and education,
        and help developers with tools to create amazing web and mobile apps.
      </p>

      <div
        className="rounded-lg bg-blue-100 bg-center bg-cover bg-no-repeat relative overflow-hidden mb-10"
        style={{
          backgroundImage: `url(/images/cover-thumbnails-cloud.svg)`,
        }}
      >
        <div className="md:w-1/2 p-10 md:p-16 relative z-20">
          <h2 className="text-2xl font-bold mb-3">Thumbnails Cloud</h2>
          <p className="text-lg mb-12">
            Generate image previews for more than 50 file types on the fly.
          </p>
          <Link href="/thumbnails-cloud">
            <a className="font-semibold text-blue-600">Get started &rarr;</a>
          </Link>
        </div>
      </div>

      <div
        className="rounded-lg bg-yellow-100 bg-contain bg-right bg-no-repeat relative overflow-hidden mb-10"
        style={{
          backgroundImage: `url(/images/cover-macaw.svg)`,
        }}
      >
        <div className="w-2/3 md:w-1/2 p-10 md:p-16 relative z-20">
          <h2 className="text-2xl font-bold mb-3">Macaw</h2>
          <p className="text-lg mb-12">
            A toolkit for sending transactional emails with simple templates.
          </p>
          <Link href="/macaw">
            <a className="font-semibold text-blue-600">Learn more &rarr;</a>
          </Link>
        </div>
      </div>
      <div className="rounded-lg bg-gray-100 bg-contain bg-right bg-no-repeat relative overflow-hidden mb-10">
        <div className="p-10 md:p-16 relative z-20">
          <h2 className="text-2xl font-bold mb-3">Consulting</h2>
          <p className="text-lg mb-12">
            I&apos;m happy to help you with anything else related to tech
            architecture or strategy.
          </p>
          <div className="flex flex-wrap">
            <a
              className="font-semibold text-blue-600 mt-4 mr-6"
              href="https://calendly.com/tschof/consulting-30-mins?utm_source=includable-website"
            >
              Book a 30 minute session &rarr;
            </a>
            <a
              className="font-semibold text-blue-600 mt-4 mr-6"
              href="https://calendly.com/tschof/consulting?utm_source=includable-website"
            >
              Book a 1 hour session &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
