import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
border-bottom: 8px solid #222;
max-width: 950px;
margin: 0 auto;
padding: 60px 0;


@media screen and (min-width: 600px) {

padding: 165px 45px;

}
`

export const Title = styled.h1`

color: #fff;
max-width: 640px;
font-size: 1.75rem;
/* font-weight: 500; */
margin: auto;

@media screen and (min-width: 600px) {
font-size: 3.125rem;
}


`
export const SubTitle = styled.h2`

color: #fff;
max-width: 640px;
font-size: 1.125rem;
font-weight: 500;
margin: 1rem auto;

@media screen and (min-width: 600px) {
font-size: 1.625rem;
}

`