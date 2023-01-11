import React from "react";
import avatar_alt from "../img/avatar2.jpg";

const Header = () => (
  <header className="hero grid-container">
    {/* <h1>Kyle Johnson</h1> */}
    <div className="grid-x">
      <p className="cell small-12 medium-6">
        Hey, I'm Kyle. I'm an NYC area software engineer at {""}
        <a target="_blank" rel="noreferrer" href="https://open.nytimes.com/">
          The New York Times
        </a>
        .
      </p>

      <div className="cell small-12 medium-6 avatar">
        <img src={avatar_alt} alt="avatar" />
        <div className="rectangle"></div>
      </div>
    </div>
  </header>
);

export default Header;
