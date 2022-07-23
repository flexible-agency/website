import React from "react";
import Link from "next/link";
import Head from "next/head";

import Section from "../components/layout/Section";

function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Not found</title>
      </Head>

      <Section>
      <h2 className="text-3xl font-bold inline-block mb-4">
        Sorry, there&apos;s nothing here...
      </h2>
      <p className="prose">
        Let&apos;s go <Link href="/">back home</Link>.
      </p>
      </Section>
    </>
  );
}

export default NotFoundPage;
