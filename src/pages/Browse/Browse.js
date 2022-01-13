import React from 'react'
import {Movies, Banner} from '../../components'
import requests from "../../requests";

function Browse() {
    return (
        <>
            <Banner/>
            <Movies title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginal} isLargeRow isLarge/>
            <Movies title='Trending Now' fetchUrl={requests.fetchtrending} />
            <Movies title='Top rated' fetchUrl={requests.fetchTopRated} />
            <Movies title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Movies title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Movies title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
            <Movies title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Movies title='Documentries' fetchUrl={requests.fetchDocumentary} />
        </>
    )
}

export default Browse
