import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import requests from "../../requests";
import { BannerHeader, BannerContents, BannerTitle, BannerButtons, BannerButton, BannerDescription, FadeButtom, Icon, Container, Logo, LinkText, Group, Profile, ProfileText, Picture, Dropdown } from './styles/Banner'
import { GrPlayFill} from 'react-icons/gr'
import { RiErrorWarningLine} from 'react-icons/ri'
import { IconContext } from 'react-icons'
import * as ROUTES from '../../constants/routes'
import { useUserAuth } from '../../contexts/firebaseContext';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// const base_url = 'https://developers.google.com/youtube/player_parameters'

function Banner() {
    const logoLink = 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg' 
    const profileImage = 'https://occ-0-1168-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdweZW5Ra69F4jKL39o-nRkek0fp03WngXS4tiegd4gIiZ4I2PB8LUc6LHsWhoAlvvBKtkw754aLQEjB7cWPyZ5fSw.png?r=bf3'


    const [movie, setMovie] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
   

    const { user, logOut } = useUserAuth();

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
        
    }


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])  

            return request;
        }

        fetchData()


    }, [])
    const handleTrailer = ( movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        }
        else{
            movieTrailer(movie?.name || '')
            .then((url) => {
                const urlParams = new URLSearchParams( new URL(url).search);
                setTrailerUrl(urlParams.get("v"))
            }) 
            .catch((error)=> console.log(error))
        }
    }

    const handleLogOut = async () => {

        try {
            await logOut;
        } catch (error) {
         console.log(error)   
        }
    }

    return (
        <>
            <IconContext.Provider value={{ marginRight: '24px' }}>
                <BannerHeader
                    style={{
                        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",

                    
                    }}
                >
                    <Container> 
                        <Group>
                            <Logo to={ROUTES.HOME} src={logoLink} alt="Netflix logo" />
                        </Group>
                        <Group>
                            <Profile >
                                <Picture src={profileImage} />
                                
                            <Dropdown>
                                    <ProfileText>{user && user.email}</ProfileText>
                           <Group>
                               <LinkText onClick={handleLogOut}>Sign out</LinkText>
                           </Group>
                            </Dropdown>
                            </Profile>
                        </Group>
                    </Container>

                    <BannerContents>
                        <BannerTitle>
                            {movie?.title || movie?.name || movie?.original_name}

                        </BannerTitle>

                        <BannerDescription> 
                            {movie?.overview} 
                        </BannerDescription>
                        
                        <BannerButtons>
                            <BannerButton primary onClick={handleTrailer}>  <Icon> <GrPlayFill /> </Icon> Play</BannerButton>
                            <BannerButton ><Icon> <RiErrorWarningLine /></Icon>More Info</BannerButton>
                        </BannerButtons>

                    </BannerContents>
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                    <FadeButtom></FadeButtom>
                </BannerHeader>
            </IconContext.Provider>

        </>
    )
}

export default Banner
