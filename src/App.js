import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Skills />
        <Work />
        <Experience />
        <Education />
        <Footer />
      </div>
    );
  }
}

export default App;
