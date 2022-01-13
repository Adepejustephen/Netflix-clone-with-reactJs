import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import requests from "../../requests";
import { BannerHeader, BannerContents, BannerTitle, BannerButtons, BannerButton, BannerDescription, Icon } from './styles/Banner'
// import { FaPlay } from 'react-icons/fa'
import { GrPlayFill} from 'react-icons/gr'
import { RiErrorWarningLine} from 'react-icons/ri'
import { IconContext } from 'react-icons'

// const base_url = 'https://image.tmdb.org/t/p/original/'

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            // console.table(request.data.results);

            return request;
        }

        fetchData()


    }, [])


    return (
        <>
            <IconContext.Provider value={{ marginRight: '24px' }}>
                <BannerHeader
                    style={{
                        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                >

                    <BannerContents>
                        <BannerTitle>
                            {movie?.title || movie?.name || movie?.original_name}

                        </BannerTitle>

                        <BannerDescription> 
                            {movie?.overview} 
                        </BannerDescription>
                        
                        <BannerButtons>
                            <BannerButton primary>  <Icon> <GrPlayFill /> </Icon> Play</BannerButton>
                            <BannerButton ><Icon> <RiErrorWarningLine /></Icon>More Info</BannerButton>
                        </BannerButtons>

                    </BannerContents>
                    {/* <LinearBackground></LinearBackground> */}
                </BannerHeader>
            </IconContext.Provider>


            {/* <header 
                style={{
                    // backgroundSize: "cover",
                    // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    // backgroundPosition: "center center",
                    backgroundColor: '#fff',
                }}>

                <BannerContents>
                    <BannerTitle>
                        {movie?.title || movie?.name || movie?.original_name}

                    </BannerTitle>
                    <BannerButtons>
                        <BannerButton>Play</BannerButton>
                        <BannerButton>More Info</BannerButton>
                    </BannerButtons>
                </BannerContents>
            </header> */}
        </>
    )
}

export default Banner
