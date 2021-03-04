import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    jobs: {},
  };

  componentDidMount() {
    this.fetchJobs();
  }

  fetchJobs = () => {
    fetch(
      "https://spreadsheets.google.com/feeds/list/1aRZFPZ0NwlPHqe7-vlEvFPEnWTY5fUzmwtKPQA9xaGY/od6/public/basic?alt=json",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Skills />
        <Work />
        {/* <Experience jobs={this.state.jobs} /> */}
        {/* <Education /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
