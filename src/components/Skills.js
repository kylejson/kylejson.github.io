import React from "react";

const Skills = (props) => (
  <section>
    <div className="skills grid-container">
      <h2>Skills</h2>

      <div className="grid-x">
        <div className="cell small-12 medium-4">
          <ul>
            <li>
              <i className="devicon-javascript-plain"> </i>Javascript
            </li>
            <li>
              <i className="devicon-html5-plain"> </i>HTML + CSS
            </li>
            <li>
              <i className="devicon-ruby-plain"> </i>Ruby
            </li>
            <li>
              <i className="devicon-python-plain"> </i>Python
            </li>
          </ul>
        </div>

        <div className="cell small-12 medium-4">
          <ul>
            <li>
              <i className="devicon-rails-plain"> </i>Rails
            </li>
            <li>
              <i className="devicon-vuejs-plain"> </i>Vue.js
            </li>
            <li>
              <i className="devicon-react-original"> </i>React
            </li>
            <li>
              <i className="devicon-nodejs-plain"> </i>Node
            </li>
          </ul>
        </div>

        <div className="cell small-12 medium-4">
          <ul>
            <li>
              <i className="devicon-mysql-plain"> </i>MySQL
            </li>
            <li>
              <i className="devicon-mongodb-plain"> </i>MongoDB
            </li>
            <li>
              <i className="devicon-devicon-plain"> </i>Elasticsearch
            </li>
            <li>
              <i className="devicon-devicon-plain"> </i>MRSS Feeds
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
