import React from "react";
import Link from "next/link";
import Image from "next/image";

import Section from "../components/layout/Section";

function IndexPage() {
  return (
    <>
      <Section>
        <h1 className="text-5xl md:text-7xl max-w-4xl font-extrabold leading-tight md:leading-tight mb-5 md:mb-8">
          Helping your first company take flight
        </h1>

        <p className="text-xl md:text-2xl leading-relaxed md:leading-relaxed mb-12 md:mb-20">
          We help startups get off the ground by providing personal advice and crafting the tech that powers
          social enterprises in education, retail and hospitality.
        </p>

      <div className="grid gap-8 mb-12">
        <Link href="/case-studies/districthive">
          <a className="black bg-blue-900 relative rounded-lg">
            <Image
              alt="DistrictHive Pod"
              src="/images/case-studies/districthive/cover.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              quality={100}
            />
            <span className="block p-8 md:p-16 max-w-4xl bg-blue-900 bg-opacity-60 md:bg-transparent md:bg-gradient-to-r md:from-blue-900 md:pr-64 lg:pr-[30rem] rounded-lg relative z-10">
              <span className="block prose text-white mb-10 lg:mb-14">
                <img
                  src="/images/case-studies/districthive/logo.png"
                  className="h-9 block "
                  alt="DistrictHive logo"
                />
                <h2 className="text-white mt-0 mb-4">
                  Building an autonomous hotel from scratch
                </h2>
                <p>
                  How we built electronics and a technology platform for the
                  world's first fully autonomous pod hotel in Grenada, Spain.
                </p>
              </span>
              <span className="inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full text-blue-900 bg-white hover:shadow hover:text-black hover:opacity-90 transition">
                Read the case study &nbsp;&rarr;
              </span>
            </span>
          </a>
        </Link>

        <Link href="/case-studies/spoorwijs">
          <a className="block bg-red-900 relative rounded-lg">
            <Image
              alt="Playing games on a train"
              src="/images/case-studies/spoorwijs/cover.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              quality={100}
            />
            <div className="p-8 md:p-16 max-w-4xl bg-red-900 bg-opacity-60 md:bg-transparent md:bg-gradient-to-r md:from-red-900 md:pr-64 lg:pr-[30rem] rounded-lg relative z-10">
              <div className="prose text-white mb-10 lg:mb-14">
                <img
                  src="/images/case-studies/spoorwijs/logo.png"
                  className="h-3 block "
                  alt="DistrictHive logo"
                />
                <h2 className="text-white mt-0 mb-4">
                  Making long train journeys more fun
                </h2>
                <p>
                  Building a real-time location-aware trivia game to play
                  against other travellers in the same train carriage.
                </p>
              </div>
              <span className="inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full text-red-900 bg-white hover:shadow hover:text-black hover:opacity-90 transition">
                Read the case study &nbsp;&rarr;
              </span>
            </div>
          </a>
        </Link>

          <div className="text-center text-gray-500 bg-gray-100 rounded lg p-16">
            <p className="mb-6">Some other recent project partners</p>
            <img
              src="/images/home/customers.svg"
              className="max-w-xl w-full mx-auto"
              alt="CityHub, NS, Infowijs, IBA, Loyalis, Provincie Limburg"
            />
          </div>

          <div className="text-center rounded-lg mt-16 mb-10">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Want to work together?
            </h2>
            <a
              href="mailto:hello@includable.com"
              className="inline-flex items-center px-5 py-2 mx-2 text-sm font-semibold mt-2 rounded-full text-white bg-gray-800 hover:shadow hover:opacity-90 transition"
            >
              Send a message &nbsp;&rarr;
            </a>
            <Link href="/consultancy">
              <a className="inline-flex items-center px-5 py-2 mx-2 text-sm mt-2 font-semibold rounded-full text-white bg-gray-800 hover:shadow hover:opacity-90 transition">
                Book a call &nbsp;&rarr;
              </a>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

export default IndexPage;
