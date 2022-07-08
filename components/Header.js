import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

function Header({ title, menu }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header>
      <Head>
        <title>{`${
          title || "Helping you build better apps"
        } | Includable`}</title>
        <meta name="revisit-after" content="1 day" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="language" content="English" />
        <meta
          name="description"
          content="An agency of design-minded people-people, building mobile apps and web platforms using the latest technologies, like React, React Native, and Serverless."
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://includable.com/favicon.ico"
        />
      </Head>
      <div className="flex flex-wrap items-center text-gray-600 justify-between py-6 px-8 md:py-8 mx-auto">
        <Link href="/">
          <a title="Includable">
            <h1 className="flex items-center no-underline text-gray-900">
              <div className="p-3 -mx-3 md:-my-2">
                <svg
                  className="h-5 md:h-6"
                  viewBox="0 0 131 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Includable</title>
                  <path
                    d="M2.677 5.063c1.194 0 2.177-.957 2.177-2.15 0-1.168-.983-2.138-2.177-2.138C1.47.775.5 1.745.5 2.912c0 1.194.97 2.15 2.177 2.15zM.92 20.027h3.514V6.912H.92v13.115zM15.922 6.69c-1.613 0-3.134.655-4.21 1.914h-.04V6.912H8.16v13.115h3.515V13.43c0-2.334 1.194-3.58 2.977-3.58 1.627 0 2.518.774 2.518 3.28v6.91h3.515v-7.79c0-4.04-1.954-5.56-4.76-5.56zm14.124 13.56c2.636 0 4.67-1.05 5.797-2.36l-2.413-2.125c-.617.695-1.653 1.324-3.043 1.324-2.085 0-3.515-1.484-3.515-3.634 0-2.125 1.39-3.607 3.49-3.607a3.92 3.92 0 0 1 3.054 1.402l2.374-2.046C34.465 7.542 32.3 6.69 30.216 6.69c-4.065 0-6.91 2.766-6.91 6.793 0 4.026 2.858 6.767 6.74 6.767zm8.406-.223h3.515V.25h-3.515v19.777zM54.188 6.912v6.36c0 2.545-1.377 3.817-2.91 3.817-1.64 0-2.35-.79-2.35-3.2V6.91h-3.514v7.895c0 4 1.994 5.443 4.827 5.443 1.484 0 2.874-.616 3.897-1.823h.052v1.6h3.514V6.912H54.19zM70.62.25h3.515v19.777H70.79V18.44h-.078c-.918 1.167-2.268 1.81-4.013 1.81-3.635 0-6.284-2.69-6.284-6.74 0-3.988 2.662-6.82 6.177-6.82 1.6 0 2.977.577 3.96 1.704h.066V.25zm-3.278 16.853c1.928 0 3.462-1.43 3.462-3.58 0-2.1-1.442-3.673-3.45-3.673-1.887 0-3.37 1.43-3.37 3.672 0 2.125 1.39 3.58 3.358 3.58zm19.67-10.19h3.516v13.114h-3.345V18.44h-.065c-.905 1.167-2.23 1.81-3.922 1.81-3.633 0-6.282-2.69-6.282-6.74 0-3.988 2.662-6.82 6.177-6.82 1.55 0 2.9.576 3.87 1.704h.054V6.912zm-3.173 10.19c1.82 0 3.316-1.43 3.316-3.58 0-2.1-1.403-3.673-3.305-3.673-1.887 0-3.37 1.43-3.37 3.672 0 2.125 1.39 3.58 3.358 3.58zm0 0zM101.515 6.69c3.515 0 6.177 2.83 6.177 6.82 0 4.05-2.65 6.74-6.282 6.74-1.743 0-3.094-.643-4.012-1.81h-.067v1.586h-3.356V.25h3.515v8.144h.065c.984-1.127 2.36-1.705 3.96-1.705zm-.748 10.412c1.98 0 3.357-1.456 3.357-3.58 0-2.243-1.482-3.673-3.357-3.673-2.02 0-3.45 1.573-3.45 3.67 0 2.15 1.52 3.58 3.45 3.58zm9.94 2.924h3.514V.25h-3.514v19.777zm19.42-6.675c0 .42-.025 1.023-.09 1.26h-9.194c.42 1.56 1.666 2.504 3.344 2.517 1.377.014 2.413-.603 3.135-1.48l2.282 2.123c-1.115 1.417-3.03 2.48-5.666 2.48-3.843 0-6.754-2.702-6.754-6.793 0-3.987 2.78-6.768 6.505-6.768 3.857 0 6.44 2.82 6.44 6.66zm-6.32-3.567c-1.43 0-2.544.774-2.95 2.295h5.783c-.353-1.39-1.31-2.296-2.832-2.296z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Includable</span>
              </div>
              {title && (
                <span className="pl-4 ml-4 font-medium text-sm md:text-base border-l opacity-75 border-gray-900/30">
                  {title}
                </span>
              )}
            </h1>
          </a>
        </Link>

        <button
          className="items-center block px-2 py-2 -mr-1 md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded
              ? `block bg-white mt-3 md:mt-0 px-5 pb-3 md:pb-0 md:px-0 rounded`
              : `hidden`
          } md:block md:items-center w-full md:w-auto md:pr-1`}
          onClick={() => toggleExpansion(false)}
        >
          {menu ? (
            menu
          ) : (
            <>
              <Link href="/consultancy">
                <a className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-8">
                  Consulting
                </a>
              </Link>
              <a
                className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-8"
                href="https://github.com/includable?utm_source=includable-website"
              >
                Open source
              </a>
              <a
                className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-8"
                href="mailto:hello@includable.com"
              >
                Contact
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
