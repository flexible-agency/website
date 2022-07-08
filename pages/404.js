import React from "react";
import Link from "next/link";

// import SEO from "../components/SEO";

function NotFoundPage() {
  return (
    <>
      {/*<SEO title="Not found" />*/}

      <h2 className="text-3xl font-bold inline-block mb-4">
        Sorry, there&apos;s nothing here...
      </h2>
      <p className="prose">
        Let&apos;s go <Link href="/">back home</Link>.
      </p>
    </>
  );
}

export default NotFoundPage;
