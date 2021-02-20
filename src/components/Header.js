import React from "react";
import avatar from "../img/Avatar.png";

const Header = (props) => (
  <header className="hero grid-container">
    {/* <h1>Kyle Johnson</h1> */}
    <div className="grid-x">
      <p className="cell small-12 medium-6">
        Hey, I'm Kyle. I'm a New York City area software engineer at{" "}
        <a target="_blank" rel="noreferrer" href="https://corp.voxmedia.com/">
          Vox Media
        </a>{" "}
        working on
        <a
          target="_blank"
          rel="noreferrer"
          href="https://getchorus.voxmedia.com/"
        >
          {" "}
          Chorus
        </a>
        .
      </p>

      <div className="cell small-12 medium-6">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  </header>
);

export default Header;
