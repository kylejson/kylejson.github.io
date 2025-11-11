import React from "react";
import revolt_img from "../img/revolt-player.gif";
import uploader_img from "../img/cv-uploader.gif";
import files_table_img from "../img/cv-files-table.gif";
import tags_img from "../img/cv-tags.gif";
import wirecutter_img from '../img/wirecutter-newsletter-component.png'

const Work = () => (
  <div className="work grid-container">
    <h2>Work</h2>
    <div className="grid-x">
      <div className="cell small-12">
        <p>
          <a
            href="https://product.voxmedia.com/2019/4/30/18515468/designing-for-publishing-tools"
            target="_blank"
            rel="noreferrer"
          >
            Designing for publishing tools
          </a>{" "}
          - How we design industry leading publishing tools such as Chorus Video
        </p>
        <p>
          <a
            href="https://product.voxmedia.com/2018/11/6/18065764/introducing-resonance"
            target="_blank"
            rel="noreferrer"
          >
            Introducing Resonance
          </a>{" "}
          - Creating a design system to power Chorus
        </p>
      </div>
    </div>
    <hr></hr>
    <div className="grid-x">
      <div className="cell small-12 medium-10">
        <h5>Wirecutter newsletter component</h5>
        <p>
          Increased newsletter signup for Wirecutter by 15% by reducing friction with a simplified registration flow
        </p>

        <div className="skill-tags">
          <span>React</span>
          <span>NodeJs</span>
          <span>Sass</span>
        </div>

        <div className="bar">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <img src={wirecutter_img} alt="Wirecutter Newsletter component"></img>
      </div>

      <div className="cell small-12 medium-10">
        <h5>Chorus video custom player</h5>
        <p>
          Built a custom, theme-able video player that is used as a primary
          player on several partner sites.
        </p>

        <div className="skill-tags">
          <span>VideoJS</span>
          <span>Rails</span>
          <span>VueJs</span>
        </div>

        <div className="bar">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <img src={revolt_img} alt="Revolt custom video player"></img>
      </div>
      <div className="cell small-12 medium-10">
        <h5>Chorus Video Upload Sidebar</h5>
        <p>
          Built an upload feature with drag and drop functionality, upload
          progress, and failure states.
        </p>

        <div className="skill-tags">
          <span>VueJs</span>
          <span>Rails</span>
          <span>Sass</span>
          <span>GraphQL</span>
        </div>

        <div className="bar">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <img src={uploader_img} alt="Chorus Video Uploader"></img>
      </div>
      <div className="cell small-12 medium-10">
        <h5>Chorus Video Files Table</h5>
        <p>
          Built a custom table component and view for video project files,
          including processing states.
        </p>

        <div className="skill-tags">
          <span>VueJs</span>
          <span>GraphQL</span>
          <span>Rev</span>
        </div>

        <div className="bar">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <img src={files_table_img} alt="Chorus Video files table"></img>
      </div>
      <div className="cell small-12 medium-10">
        <h5>Video Tags metadata search component</h5>
        <p>
          Built a search input component to search for and attach tags to video
          projects.
        </p>

        <div className="skill-tags">
          <span>VueJs</span>
          <span>GraphQL</span>
          <span>Elasticsearch</span>
        </div>

        <div className="bar">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <img src={tags_img} alt="Video Tags component"></img>
      </div>
    </div>
  </div>
);

export default Work;
