import React from "react";
import Image from "next/image";

import Button from "../../components/Button";
import Section from "../../components/layout/Section";

export default function SpoorwijsCaseStudy() {
  return (
    <Section>
      <h3 className="text-gray-900 md:text-lg font-bold mb-2 uppercase">
        <a href="/">Case study</a>
      </h3>
      <h1 className="text-4xl md:text-6xl max-w-3xl font-extrabold leading-tight md:leading-tight mb-2 md:mb-5">
        Making long train journeys more fun
      </h1>
      <div className="prose prose-lg">
        <p>
          For Dutch Design Week, in collaboration with design studio Waarmakers,
          we built a real-time location-aware trivia game to play against other
          travellers in the same train carriage.
        </p>
      </div>
      <div className="my-16">
        <Image
          alt="Game play day in 2017."
          height="500px"
          width="1000px"
          layout="responsive"
          className="block rounded-lg bg-gray-200"
          src="/images/case-studies/spoorwijs/cover.jpg"
        />
      </div>

      <div className="prose max-w-none">
        <h2>How it started</h2>
        <p>
          <a href="https://ns.nl">NS</a> is the national passenger rail service provider in the Netherlands. For <a href="https://ddw.nl">Dutch Design Week</a>, they reached out to Amsterdam design studio <a href="https://www.heijltjesakkaya.com">HeijltjesAkkaya</a> to develop a novel concept on how an overcrowded rush hour train could contribute to a positive travelling experience.
        </p>

        <h2>What we built</h2>
        <p>In multiple hands-on design concept development sessions with HeijltjesAkkaya, we developed and tested different types of quiz questions and how train travellers interacted with them. The result is a game played in real time against the other people in your train carriage, with questions about the landmarks and areas you travel through. Scores are calculated in real time to determine a 'carriage champion' at the end of every leg of the journey.</p>
        <p>The game was tested over 2 days with a host and props in the train from Amsterdam to Eindhoven, where the Dutch Design Week events were taking place.</p>
      </div>

      <div className="my-10">
      <Image
        alt="Screenshots."
        height="594px"
        width="1000px"
        layout="responsive"
        src="/images/case-studies/spoorwijs/screens.png"
      />
      </div>

      <div className="prose max-w-none mt-16">
        <h2>Rapid prototyping</h2>
        <p>
          By relying as much as possible on existing tools, like Google's Custom Maps, we were able to allow the design team to easily make changes and quickly test behaviours.
        </p>
      </div>

        <video className="my-10 rounded-lg bg-gray-200 overflow-hidden shadow" autoPlay loop muted playsInline poster="/images/case-studies/spoorwijs/maps.mp4.jpg">
          <source src="/images/case-studies/spoorwijs/maps.mp4"/>
        </video>


      <div className="prose mt-14">
        <h2>Technologies used</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-5">
        <div className="border border-gray-200 rounded-lg p-5 prose text-center">
          <img
            src="/images/technologies/nodejs.svg"
            className="h-12 block mx-auto mb-3"
            alt="Node.js"
          />
          Node.js
        </div>
        <div className="border border-gray-200 rounded-lg p-5 prose text-center">
          <img
            src="/images/technologies/reactnative.svg"
            className="h-12 block mx-auto mb-3"
            alt="React Native"
          />
          React Native
        </div>
        <div className="border border-gray-200 rounded-lg p-5 prose text-center">
          <img
            src="/images/technologies/websockets.svg"
            className="h-12 block mx-auto mb-3"
            alt="Websockets"
          />
          Websockets
        </div>
        <div className="border border-gray-200 rounded-lg p-5 prose text-center">
          <img
            src="/images/technologies/aws.svg"
            className="h-12 block mx-auto mb-3"
            alt="Amazon Web Services"
          />
          AWS
        </div>
      </div>

      <div className="prose mt-14">
        <h2>Learn more</h2>
        <p>
          Read more about the project on the HeijltjesAkkaya website.
        </p>
      </div>
      <div className="mt-8">
        <Button href="https://www.heijltjesakkaya.com/ns-spoorwijs">
          Read more &nbsp;&nbsp;&rarr;
        </Button>
      </div>
    </Section>
  );
}
