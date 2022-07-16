import React from "react";
import Image from "next/image";
import Button from "../../components/Button";

export default function DistrictHiveCaseStudy() {
  return (
    <>
      <h3 className="text-blue-600 md:text-lg font-bold mb-2 uppercase">
        <a href="/">Case study</a>
      </h3>
      <h1 className="text-4xl md:text-6xl max-w-3xl font-extrabold leading-tight md:leading-tight mb-2 md:mb-5">
        Building an autonomous hotel from scratch
      </h1>
      <div className="prose prose-lg">
        <p>
          In 2019, we started working together with DistrictHive to launch the
          first autonomous off-grid hotel. We built custom electronics, a
          back-end API, mobile app and a host dashboard.
        </p>
      </div>
      <div className="my-16">
        <Image
          alt="DistrictHive Pod in Grenada."
          height="500px"
          width="1000px"
          className="block rounded-lg bg-gray-200"
          src="/images/case-studies/districthive/cover.jpg"
        />
      </div>

      <div className="prose">
        <h2>How it started</h2>
        <p>
          Priyesh Patel had a grand idea for a completely stand-alone podtel
          concept. After realising we were involved in building tech for another
          podtel concept called{" "}
          <a href="https://cityhub.com/" target="_blank">
            CityHub
          </a>{" "}
          before, he reached out and we started working on the technical element
          of the concept.
        </p>
        <p>
          We worked with{" "}
          <a href="https://infowijs.nl" target="_blank">
            Infowijs
          </a>{" "}
          to develop the design for the mobile app, whilst Priyesh worked with
          world-class architects and engineers to design and build the physical
          structure.
        </p>

        <h2>What we built</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-5">
        <div className="border border-gray-200 rounded-lg p-6 md:p-9 pb-0 md:pb-0 prose">
          <h4 className="text-base uppercase mb-4 text-gray-600">
            Custom electronics
          </h4>
          <p>
            Together with the brilliant team at Infowijs, we built custom
            circuit boards for the pod, including a extensible system for adding
            sensors, lights and switches.
          </p>
          <p>
            It includes a central computing unit powered by Raspberry Pi,
            nicknamed the HiveMind.
          </p>
          <div className="flex justify-center mt-8">
            <img
              src="/images/case-studies/districthive/hivemind.png"
              alt="The HiveMind unit"
              style={{ maxHeight: 300 }}
            />
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg flex flex-col justify-between p-6 md:p-9 pb-0 md:pb-0">
          <div className="prose mb-8">
            <h4 className="text-base uppercase mb-4 text-gray-600">
              Mobile app
            </h4>
            <p>
              The DistrictHive mobile app allows guests to control every aspect
              of their experience from their phones. This includes opening the
              door, buying products from the mini-bar, controlling lights,
              aircon and fragrance.
            </p>
            <p>
              It's built using React Native and available for both iPhone and
              Android.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/case-studies/districthive/app.png"
              alt="DistrictHive app"
              className="block"
              style={{ maxHeight: 350 }}
            />
          </div>
        </div>
      </div>

      <div className="prose mt-14">
        <h2>Technologies used</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-5">
        <div className="border border-gray-200 rounded-lg p-5 prose text-center">
          <img src="/images/technologies/nodejs.svg" className="h-12 block mx-auto mb-3" alt="Node.js"/>
          Node.js
        </div>
        <div className="border border-gray-200 rounded-lg p-5 prose text-center">
          <img src="/images/technologies/reactnative.svg" className="h-12 block mx-auto mb-3" alt="React Native"/>
          React Native
        </div>
        <div className="border border-gray-200 rounded-lg p-5 prose text-center">
          <img src="/images/technologies/react.svg" className="h-12 block mx-auto mb-3" alt="React"/>
          React
        </div>
        <div className="border border-gray-200 rounded-lg p-5 prose text-center">
          <img src="/images/technologies/aws.svg" className="h-12 block mx-auto mb-3" alt="Amazon Web Services"/>
          AWS
        </div>
      </div>

      <div className="prose mt-14">
        <h2>Learn more</h2>
        <p>
          he first DistrictHive pod launched in Grenada, Spain in 2021, with
          more to come. It's available to book on all the major hotel booking
          sites.
        </p>
      </div>
      <div className="mt-8">
        <Button href="https://districthive.com?utm_source=includable-website">
          View the website &nbsp;&nbsp;&rarr;
        </Button>
      </div>
    </>
  );
}
