import React from "react";

const Experience = (props) => {
  return (
    <div className="experience grid-container">
      <h2>Experience</h2>
      <div className="grid-x">
        <div className="cell small-12">
          <p>
            <a
              href="https://hackny.org/fellows-program"
              target="_blank"
              rel="noreferrer"
            >
              hackNY Fellowship Class of 2014
            </a>{" "}
            - hackNY aims to build an inclusive and responsible innovation
            community in NYC.
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="grid-y">
        <div className="job cell small-12 medium-10">
          <h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://corp.voxmedia.com/"
            >
              Vox Media
            </a>{" "}
            - Software Engineer II
          </h5>
          <span>Oct 2017 - present</span>
          <ul>
            <li>
              Built and documented several reusable web components for Vox
              Media's design system, Resonance
            </li>
            <li>
              Held a primary role in rewriting Chorus Video - a video
              distribution platform with Vue.js and GraphQL
            </li>
            <li>
              Lead the data migration for one of Vox Media's recent SaaS
              customers, The Chicago Sun Times
            </li>
            <li>
              Lead development on the custom Chorus Video Player, a primary
              video player on Revolt.tv
            </li>
            <li>Updated multiple MRSS feeds for consumption by OTT networks</li>
            <li>
              Built a video upload sidebar with drag and drop, upload progress,
              and failure states.
            </li>
          </ul>
        </div>

        <div className="job cell small-12 medium-10">
          <h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://paste.bywetransfer.com/"
            >
              Paste by FiftyThree
            </a>{" "}
            - Software Engineer
          </h5>
          <ul>
            <li>Wrote API endpoints to facilitate Slack integrations</li>
            <li>
              Implemented a real time notifications module with React and Redux
            </li>
          </ul>
        </div>

        <div className="job cell small-12 medium-10">
          <h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.younow.com/login"
            >
              YouNow
            </a>{" "}
            - Web Application Engineer
          </h5>
          <ul>
            <li>Built super chat features on top of a custom video player</li>
            <li>Implemented a performant auto-playing feed of videos</li>
            <li>
              Built a gif to png sequence library for interactive stickers
              during live broadcasts
            </li>
            <li>Lead the migration from jwPlayer to videoJs</li>
          </ul>
        </div>

        <div className="job cell small-12 medium-10">
          <h5>
            <a target="_blank" rel="noreferrer" href="https://bitly.com/">
              Bit.ly
            </a>{" "}
            - Front-end Developer
          </h5>
          <ul>
            <li>
              Implemented the marketing site redesign for Bitly Enterprise
            </li>
            <li>Migrated legacy Wordpress site into main web application</li>
            <li>
              Built a Stripe checkout integration for Bitly enterprise that
              converted 50% more sales leads
            </li>
            <li>Refactored the anonymous URL shortener for maintainability</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
