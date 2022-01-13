import styled from "styled-components/macro";


export const Item = styled.div`

display: flex;
border-bottom: 8px solid #222;
padding: 50px 5%;
overflow: hidden;

`
export const Inner  = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* text-align: center; */
max-width: 1100px;
margin: auto;
width: 100%;

@media screen and (min-width: 1000px) {
    /* max-width: 1100px; */
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
}

`

export const Pane = styled.div`
width: 50%;
color: #fff;
/* text-align: center; */

@media screen and (max-width: 1000px) {

 width: 100%;
 padding: 0 45px;
 text-align: center;
 
}


`

export const Title = styled.h1`

font-size: 	1.625rem;
line-height: 1.1;
margin-bottom: .625rem;
/* font-weight: normal; */

@media screen and (min-width: 550px) and (max-width: 949px) {

 font-size: 2.5rem;
}

@media screen and (min-width: 950px) {

 font-size: 3.1875rem;
}

`
export const SubTitle = styled.h2`
font-size: 1.125rem;
font-weight: 400;

@media screen and (min-width: 600px) {

 font-size: 1.625rem;
}

`


    



export const Image = styled.img`

max-width: 100%;
height: auto;

`


export const ItemContainer = styled.section`

@media screen and (max-width: 1000px) {
    ${Item}:last-of-type h2 {
        margin-bottom: 	3.125rem;
    }
   
}


`
