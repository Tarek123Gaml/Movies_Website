import React from "react";
import { Row } from "react-bootstrap";
import Slider from "./Slider";
import CardMovie from "./CardMovie";
const MoviesList = ({ movies, getSelected, getPage }) => {
  return (
    <Row>
      {movies.length >= 1 ? (
        movies.map((item) => {
          return <CardMovie key={item.id} item={item} />;
        })
      ) : (
        <h2>No Data Found</h2>
      )}
      {movies.length >= 1 ? (
        <Slider getPage={getPage} getSelected={getSelected} />
      ) : null}
    </Row>
  );
};
export default MoviesList;
