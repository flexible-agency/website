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
      <div className="min-h-screen font-sans leading-normal text-gray-900">
        <Header title={pageProps.menuTitle} />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default App;
