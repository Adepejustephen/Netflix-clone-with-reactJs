import styled from "styled-components";

export const MoviesContainer = styled.section`
display: flex;
flex-direction: column;
padding-left: 50px;

&:first-of-type {
    margin-top: 20x;
    z-index: 2;

}

@media screen and (max-width: 800px) {
    padding-left: 20px;
    margin-top: 50px;
}


`
export const MoviesRow = styled.div`

/* width: 100%; */

`

export const MoviesRowTitle = styled.h2`
color: #f2f2f2;
font-weight: 500;
line-height: 1.25vw;
font-size: 1.4vw;
margin-top: 20px;
z-index: 5;

@media screen and (max-width: 800px) {
    font-size: 1.1rem;
}
`

export const MoviesCard = styled.div`
display: flex;
overflow-y: hidden;
overflow-x: scroll;
padding: 10px 0 10px 20px;
-moz-overflow-x: scroll;
-moz-overflow-y: hidden;



&::-webkit-scrollbar {
    display: none;
    opacity: 0;
}
@media screen and (max-width: 800px) {
    padding-left: 0;
}
`
export const MovieImg = styled.img`
width: 100%;
object-fit: contain;
height:100%;
max-height: ${({ isLarge }) => (isLarge ? '350px' : '200px')};
margin-right: 5px;
cursor: pointer;
transition: transform .4s;


&:hover {
    transform: scale(1.2);
}
`

export const MovieFeature = styled.p`

`

