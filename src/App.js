import React from "react";
import MoviesPopular from "./components/MoviesPopular";
import MoviesTopRated from "./components/MoviesTopRated";
import MoviesNowPlaying from "./components/MoviesNowPlaying";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App" style={{ background: "#000000" }}>
      <NavBar />
      <Jumbotron />
      <div
        className="container-home"
        style={{ position: "relative", zIndex: 0 }}
      >
        <MoviesNowPlaying />
        <MoviesTopRated />
        <MoviesPopular />
      </div>
      <Footer />
    </div>
  );
}

export default App;
