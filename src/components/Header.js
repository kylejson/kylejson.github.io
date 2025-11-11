import React from "react";
import avatar_alt from "../img/avatar_2025.png";

const Header = () => (
  <header className="hero grid-container">
    {/* <h1>Kyle Johnson</h1> */}
    <div className="grid-x">
      <p className="cell small-12 medium-6">
        Hey, I'm Kyle. I'm a New York City area Senior Software Engineer.
      </p>

      <div className="cell small-12 medium-6 avatar">
        <img src={avatar_alt} alt="avatar" />
        <div className="rectangle"></div>
      </div>
    </div>
  </header>
);

export default Header;
