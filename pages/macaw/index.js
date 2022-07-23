import React from "react";

import Section from "../../components/layout/Section";

export async function getStaticProps() {
  return {
    props: {
      menuTitle: "Macaw Email",
    },
  };
}

function MaacawPage() {
  return (
    <Section>
      <div className="prose prose-lg mb-10">
        <h1>Transactional emails at scale</h1>
      </div>
      <div className="prose prose-lg">
        <p>
          At many of the tech startups we've worked with, we've had a need for
          transactional emails. You know, the ones that welcome you after you
          created your account, or help you reset your lost password, or update
          you about the status of your support request.
        </p>
        <p>
          When it’s just one or two emails, it’s still relatively simple to
          manage them. At some point, however, there will be a few dozen, not
          all using the same layouts, possibly in multiple languages, and things
          become more complicated.
        </p>
        <p>
          Partnerships will want to be in control of the copy in the emails, the
          UI designer wants and easy way to update templates without having to
          dive into the business logic, and engineers just want to be able to
          fire off the right template at the right moment, without having to
          touch the design or copy at all.
        </p>

        <h2>Introducing Macaw</h2>
        <p>
          That’s why we have built a toolkit named{" "}
          <a href="https://github.com/includable/macaw">Macaw</a>. It builds on
          the experience we’ve gained setting up transactional emails at scale
          for companies like <a href="https://near.st/">NearSt</a> and{" "}
          <a href="https://streetartcities.com/">Street Art Cities</a>.
        </p>
      </div>

      <div className="lg:-mx-10">
        <img
          alt="In-browser email preview tool"
          title="In-browser email preview tool"
          src="/images/macaw/browser-preview.png"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="prose prose-lg">
        <h2>Templating structure</h2>
        <p>
          It introduces a neat structure for managing email templates,
          separating out copy and layouts as re-usable components:
        </p>
        <ul>
          <li>
            In Macaw, an email <strong>template</strong> is a simple Markdown
            file with some frontmatter to choose what layout to use, and
            optionally set a subject, etc. This makes it easy to edit the copy
            of emails, even for non-developers.
          </li>
          <li>
            A <strong>layout</strong> is written in{" "}
            <a href="https://mjml.io/">MJML</a>, a simple HTML-like markup
            language that allows you to design responsive and cross-client
            compatible emails.
          </li>
        </ul>
        <p>
          Keeping these two things separate allows easy editing by each
          stakeholder (designers can work on the layout files, partnerships can
          work on the actual templates).
        </p>

        <h2>The toolkit</h2>
        <p>
          The <a href="https://github.com/includable/macaw">Macaw toolkit</a> is
          open source and available on Github.
        </p>
        <p>It currently consists of the following tools:</p>
        <ul>
          <li>
            <strong>Node.js library</strong> to discover, parse and send emails
            with a few lines of Javascript.
          </li>
          <li>
            <strong>In-browser preview tool</strong> to help you view what your
            emails will look like while editing them, in real-time.
          </li>
          <li>
            <strong>Command-line utility</strong> that automates the process of
            setting up the email templates structure in your project.
          </li>
        </ul>
        <p>
          I’m excited for people to see this, and look forward to extending it
          in the coming months with additional functionality.
        </p>
        <p>
          <a
            className="button"
            rel="noopener noreferrer"
            href="https://github.com/includable/macaw"
            target="_blank"
          >
            View on Github
          </a>
        </p>
      </div>
    </Section>
  );
}

export default MaacawPage;
