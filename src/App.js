import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  //get all movies
  const getAll = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=c674dd46617f5d6c45f4323a0b3f927e&language=en-US"
    );
    setMovies(res.data.results);
  };
  //get all movies selected
  const getSelected = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=c674dd46617f5d6c45f4323a0b3f927e&language=en-US&page=${page}`
    );
    setMovies(res.data.results);
  };
  useEffect(() => {
    getAll();
  }, []);
  //get the movies search
  const search = async (word) => {
    if (word === "") {
      getAll();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=c674dd46617f5d6c45f4323a0b3f927e&language=en-US&query=${word}`
      );
      setMovies(res.data.results);
    }
  };
  return (
    <div className="App">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MoviesList movies={movies} getSelected={getSelected} />}
            />
            <Route path="/item/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
