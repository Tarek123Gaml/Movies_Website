import React, { useEffect, useState, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const MovieDetails = () => {
  const para = useParams();
  const [state, setState] = useState([]);
  console.log(para.id);
  //get the movie details
  const getDetails = useCallback(async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${para.id}?api_key=c674dd46617f5d6c45f4323a0b3f927e&language=en-US`
    );
    setState(res.data);
  }, [para.id]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);
  return (
    <>
      <div>
        <Row className="justify-content-center">
          <Col md="12" xs="12" sm="12" className="mt-4 ">
            <div className="card-detalis  d-flex align-items-center ">
              <img
                className="img-movie w-30"
                src={`https://image.tmdb.org/t/p/w500/` + state.poster_path}
                alt="ascad"
              />
              <div className="justify-content-center text-center  mx-auto">
                <p className="card-text-details border-bottom">
                  Movie Name: {state.title}
                </p>
                <p className="card-text-details border-bottom">
                  Release Date: {state.release_date}
                </p>
                <p className="card-text-details border-bottom">
                  Number Of Reviews: {state.vote_count}
                </p>
                <p className="card-text-details border-bottom">
                  Reviews: {state.vote_average}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md="12" xs="12" sm="12" className="mt-1 ">
            <div className="card-story  d-flex flex-column align-items-start">
              <div className="text-end p-4 ">
                <p className="card-text-title border-bottom">The Story:</p>
              </div>
              <div className="text-end px-2">
                <p className="card-text-story">{state.overview}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md="10"
            xs="12"
            sm="12"
            className="mt-2 d-flex justify-content-center "
          >
            <Link to="/">
              <button
                style={{ backgroundColor: "#b45b35", border: "none" }}
                className="btn btn-primary mx-2"
              >
                Back to Home Page
              </button>
            </Link>
            <a href={state.homepage}>
              <button
                style={{ backgroundColor: "#b45b35", border: "none" }}
                className="btn btn-primary"
              >
                Watch The Movie
              </button>
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default MovieDetails;
