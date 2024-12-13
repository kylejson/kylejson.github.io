import React from "react";

const Footer = () => (
  <footer>
    <div className="grid-container">
      <div className="grid-x">
        <p className="cell small-12 medium-6"> &copy; Kyle Johnson 2024</p>

        <div className="cell small-12 medium-6">
          <ul className="float-right">
            <a
              href="https://github.com/kylejson"
              rel="noreferrer"
              target="_blank"
            >
              <li>
                <i className="devicon-github-original"></i>
              </li>
            </a>

            <a href="mailto:kylejohnsonbrandon@gmail.com">
              <li>
                <i className="devicon-google-plain"></i>
              </li>
            </a>

            {/* <a href="" rel="noreferrer" target="_blank">
              <li>
                <i className="devicon-linkedin-plain"></i>
              </li>
            </a> */}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
