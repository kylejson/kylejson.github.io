import React from "react";

const Experience = () => {
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
              href="https://open.nytimes.com/"
            >
              The New York Times
            </a>{" "}
            - Senior Software Engineer
          </h5>
          <ul>
            <li>
              Implemented a B2B based product offering with Auth0, resulting in multiple million dollar group subscription deals
            </li>
            <li>
              Migrated millions of The Athletic user accounts building a bespoke login and password reset experience
            </li>
            <li>
              Increased newsletter signup for Wirecutter by 15% by reducing friction with a simplified registration flow
            </li>
            <li>
              Led load testing and performance readiness initiatives across NYT identity services in preparation for 2024 Election coverage, ensuring high availability under peak traffic
            </li>
          </ul>
        </div>

        <div className="job cell small-12 medium-10">
          <h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.coinbase.com/"
            >
              Coinbase
            </a>{" "}
            - Software Engineer IC4
          </h5>
          <ul>
            <li>
              Increased trade volume by 1.5% building an asset review feature on web and mobile clients with React
            </li>
            <li>
              Drove 100k+ Coinbase Wallet downloads with an educational in app tutorial feature
            </li>
            <li>
              Migrated video product surface to a Graphql based architecture from legacy REST API endpoints 
            </li>
            <li>
              Implemented client side validators for user generated content
            </li>
          </ul>
        </div>

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
      </div>
    </div>
  );
};

export default Experience;
