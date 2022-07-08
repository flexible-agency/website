import React from "react";

import Header from "../components/Header";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  if (pageProps.fullScreen) {
    return <Component {...pageProps} />;
  }

  return (
    <div className="flex flex-col min-h-screen font-sans leading-normal text-gray-900">
      <Header title={pageProps.menuTitle} />

      <main className="flex-1 w-full max-w-3xl px-6 py-8 mx-auto md:px-8 md:py-16">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
