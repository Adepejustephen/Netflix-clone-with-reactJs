import React, { useState, useEffect } from 'react'
import { MoviesContainer, MoviesRow, MoviesRowTitle, MoviesCard, MovieImg } from './styles/Movies'
import axios from '../../axios'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Movies({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            // console.table(request.data.results);
            return request;
        }

        fetchData()


    }, [fetchUrl])

    // console.log(movies)

    return (
        <MoviesContainer>
            <MoviesRowTitle>{title}</MoviesRowTitle>
                <MoviesCard >
                    {movies.map(movie => (
                        <MovieImg src={`${base_url}${movie.backdrop_path }`} alt={movie.name}  key={movie.id}/>
                    ))}
                </MoviesCard>
        
        </MoviesContainer>
    )
}

export default Movies
