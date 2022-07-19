import React from "react";
import PopularMovies from "./components/PopularMovies";
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
        <PopularMovies />
        <PopularMovies />
        <PopularMovies />
        <PopularMovies />
        <PopularMovies />
        <PopularMovies />
        <PopularMovies />
      </div>
      <Footer />
    </div>
  );
}

export default App;
