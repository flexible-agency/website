import React from "react";

import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans leading-normal text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-3xl px-6 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>
    </div>
  );
}

export default Layout;
