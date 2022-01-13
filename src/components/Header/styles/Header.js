import styled from "styled-components";
import { Link } from "react-router-dom";


const backgroundLink = 'https://assets.nflxext.com/ffe/siteui/vlv3/c16cf196-e89e-4c46-8cc7-f2eca6fb0762/26de60db-e28b-4ac5-bff4-1697c19f883f/NG-en-20220103-popsignuptwoweeks-perspective_alpha_website_medium.jpg'

export const Background = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background: url(${backgroundLink}) bottom right / cover no-repeat;
height: 100%;
position: relative;
z-index: 5;
/* background-color: #000; */


&::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.8);
    opacity: .75;
    background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
    z-index: -1;
}


`
export const Container = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
height: 64px;
 margin: 0 5%;
 padding-top: 20px;
 position: relative;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;


@media screen and (min-width: 1000px) {
    margin: 0 3.5rem;
}


`
export const Logo = styled.img`

height: 24px;
width: 108px;

@media sreen and (min-width: 1000px) and (max-width: 950px){
    height: 32px;
    width: 108px;
}

@media only screen and (min-width: 950px) and (max-width: 1449px)
{
    height: 36px;
    width: 134px;

}
`


export const ButtonLink = styled(Link)`

display: block;
background-color: #e50914;
height: fit-content;
color: #fff;
border: none;
font-size: .99rem;
border-radius: 3px;
cursor: pointer;
text-decoration : none;
padding: 8px 17px;
padding: 0.25rem 0.5rem;

&:hover {
    background-color: #f40612;

}

@media only screen and (min-width: 600px)
{
    padding: 8px 17px;
    width: 84px;
}
`