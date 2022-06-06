import React, { useState, useEffect } from "react";
import {
  MoviesContainer,
  MoviesRowTitle,
  MoviesCard,
  MovieImg,
} from "./styles/Movies";
import axios from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Movies({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // const [showFeature, setShowFeature] = useState(false)

  // Fetch movies

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(movie.name);
      movieTrailer(null, { tmdbId: movie?.id })
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <MoviesContainer>
      <MoviesRowTitle>{title}</MoviesRowTitle>
      <MoviesCard>
        {movies.map((movie) => {
          return (
            <MovieImg
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
              key={movie.id}
            />
          );
        })}
      </MoviesCard>
     
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      
    </MoviesContainer>
  );
}

/* {showFeature && <MovieFeature key={movie.id}>{movie.overview}</MovieFeature>} */

export default Movies;
