import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
import { getRandom } from "../utils/utils";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[getRandom(movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movie);
  

  return <div>Main</div>;
};

export default Main;
