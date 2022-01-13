const API_KEY = "da6d741eb0480785f1395c81dde86477"

const requests = {
    fetchtrending: `/trending/all/week?api_key=${API_KEY}&langauge=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=1079`,
    fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests

// https://api.themoviedb.org/3

