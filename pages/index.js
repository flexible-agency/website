import React from "react";
import Link from "next/link";
import Image from "next/image";

function IndexPage() {
  return (
    <>
      <h1 className="text-4xl md:text-6xl max-w-3xl font-extrabold leading-tight md:leading-tight mb-2 md:mb-5">
        Crafting digital platforms and developer tools
      </h1>

      <p className="text-xl md:text-2xl leading-relaxed md:leading-relaxed mb-12 md:mb-20">
        We build the tech that powers social enterprises in education, fashion
        and hospitality, and provide developers with tools to create amazing
        apps.
      </p>

      <div className="grid gap-8 mb-12">
        <div className="bg-gray-200 relative rounded-lg">
            <Image
            alt="Mountains"
            src="/images/case-studies/districthive/cover.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            quality={100}
          />
          <div className="p-8 md:p-16 max-w-4xl bg-blue-900 bg-opacity-60 md:bg-transparent md:bg-gradient-to-r md:from-blue-900 md:pr-64 lg:pr-[30rem] rounded-lg relative z-10">
            <div className="prose text-white mb-10 lg:mb-14">
          <img
            src="/images/case-studies/districthive/logo.png"
            className="h-9 block "
            alt="DistrictHive logo"
          />
          <h2 className="text-white mt-0 mb-4">Building an autonomous hotel from scratch</h2>
          <p>How we built electronics and a technology platform for the world's first fully autonomous pod hotel in Grenada, Spain.</p>
            </div>
            <Link href="/case-studies/districthive">
            <a className="inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full text-blue-900 bg-white hover:shadow hover:text-black hover:opacity-90 transition">
              Read the case study &nbsp;&rarr;
            </a>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="rounded-lg bg-blue-100 bg-center bg-cover bg-no-repeat relative overflow-hidden mb-10"
        style={{
          backgroundImage: `url(/images/cover-thumbnails-cloud.svg)`,
        }}
      >
        <div className="md:w-1/2 p-8 md:p-16 relative z-20">
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
        <div className="w-2/3 md:w-1/2 p-8 md:p-16 relative z-20">
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
        <div className="p-8 md:p-16 relative z-20">
          <h2 className="text-2xl font-bold mb-3">Consulting</h2>
          <p className="text-lg mb-12">
            I&apos;m happy to help you with anything else related to tech
            architecture or strategy.
          </p>
          <div className="flex flex-wrap">
            <Link href="/consultancy">
            <a
              className="font-semibold text-blue-600 mt-4"
            >
              Learn more &rarr;
            </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
