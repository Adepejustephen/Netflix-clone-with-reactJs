import React, { useEffect, useState } from 'react'
import { Movies, Banner, Loading, Header } from '../../components'
import requests from "../../requests";



function Browse() {

    

    // const logo = 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);


    }, []);


    return (
        <>
            
            {loading ? <Loading /> : <Loading.ReleaseBody />}
            <Header noBackground>
                <Banner/>
            </Header>
            

            {/* <Banner/> */}
            <Movies title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginal} isLargeRow isLarge />
            <Movies title='Trending Now' fetchUrl={requests.fetchtrending} />
            <Movies title='Top rated' fetchUrl={requests.fetchTopRated} />
            <Movies title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Movies title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Movies title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
            <Movies title='Documentries' fetchUrl={requests.fetchDocumentary} />
        </>
    )
}

export default Browse
