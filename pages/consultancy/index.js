import React from "react";
import Button from "../../components/Button";

function ConsultingPage() {
  return (
    <>
      <div className="prose md:prose-lg mb-6 md:mb-10 md:mt-10">
        <h1>Tech consulting at any scale</h1>
      </div>
      <div className="prose prose-lg">
        <p>
          We advise and support organizations of all sizes in developing tech
          platforms. In addition, we are well placed to support startup
          companies in developing business plans, resource allocation management
          and go-to-market strategies.
        </p>
      </div>

      <div className="mt-8 mb-16 md:mb-24">
        <Button href="https://calendly.com/tschof/consulting-30-mins?utm_source=includable-website">
          Schedule a session &nbsp;&nbsp;&rarr;
        </Button>
      </div>

      <div className="prose prose-lg">
        <h3>The team</h3>
      </div>

      <div className="border border-gray-200 rounded-lg p-10 mt-4 md:flex items-center">
        <img
          src="/images/consultancy/thomas.svg"
          alt="Thomas Schoffelen"
          className="h-32 mr-10 mb-10 md:mb-0"
        />
        <div className="prose">
          <h4>Thomas Schoffelen</h4>
          <p>
            Having run startups since the age of 16, Thomas has built technology
            platforms for half a dozen companies in the past 8 years and helped
            teams scale MVP tech stacks to products supported by full
            engineering teams.
          </p>
        </div>
      </div>

      <div className="prose prose-lg mt-10 mb-4">
        <h3>Available services</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-24">
        <div className="border border-gray-200 rounded-lg p-10">
          <div className="prose">
            <h4>Startup consulting</h4>
            <p>
              Giving you advise on how to take your idea and turn it into a real
              business, and how to scale that business as the number of
              customers and employees grows.
            </p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-10">
          <div className="prose">
            <h4>Platform architecture</h4>
            <p>
              Planning out long-term engineering projects and the architecture
              decisions that will underpin them. Ready for an agile team to
              start executing.
            </p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-10">
          <div className="prose">
            <h4>Team growth</h4>
            <p>
              As your team grows beyond just founders, you will need to start
              putting in place structures around growth, accountability and
              personal development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConsultingPage;
