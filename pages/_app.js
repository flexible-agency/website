import React from "react";

import Header from "../components/Header";

import "../styles/globals.css";
import Footer from "../components/Footer";

function App({ Component, pageProps }) {
  if (pageProps.fullScreen) {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <div className="flex flex-col min-h-screen font-sans leading-normal text-gray-900">
        <Header title={pageProps.menuTitle} />

        <main className="flex-1 w-full max-w-5xl p-8 mx-auto md:py-16">
          <Component {...pageProps} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;