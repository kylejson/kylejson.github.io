import React from "react";

class Navigation extends React.Component {
  scroll(px, e) {
    e.preventDefault();
    window.scrollTo(0, px);
  }

  render() {
    return (
      <div className="navigation">
        <nav className="grid-container">
          <ul className="menu align-right">
            <li onClick={(e) => this.scroll(360, e)}>Skills</li>
            <li onClick={(e) => this.scroll(660, e)}>Work</li>
            <li onClick={(e) => this.scroll(3440, e)}>Experience</li>
            <li onClick={(e) => this.scroll(3940, e)}>Education</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
