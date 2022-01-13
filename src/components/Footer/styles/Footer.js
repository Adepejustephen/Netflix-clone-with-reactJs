import styled from "styled-components/macro";


export const Background = styled.section`
width: 100%;
background-color: rgba(0, 0, 0, .5);
`
export const Container = styled.div`

display: flex;
padding: 70px 30px;
padding: ${({pad})=> (pad ? '40px 30px' : '70px 30px')};
width: 100%;
max-width: 1000px;
margin: auto;
flex-direction: column;
/* align-items: center; */

@media screen and ( min-width: 1000px) {
padding: 70px 56px;
padding: ${({ pad }) => (pad ? '30px 30px' : '70px 56px')};
}

`

export const Row = styled.div`

display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
grid-gap: .9375rem;

@media screen and ( min-width: 768px) {
grid-template-columns:  repeat(auto-fill, minmax(130px, 1fr));
}

@media screen and ( min-width: 1000px) {
grid-template-columns:  repeat(auto-fill, minmax(210px, 1fr));
}

`

export const Column = styled.div`
display: flex ;
flex-direction: column;
text-align: left;

`

export const Link = styled.a`
color: #757575;
font-size: .8125rem;
text-decoration: none;
margin-bottom: 1.25rem;

&:hover {
    text-decoration: underline;
}
`

export const Title = styled.p`
color: #757575;
font-size: 1rem;
margin-bottom: 2.5rem;

`

export const Break = styled.p`
flex-basis: 100%;
height: 0;
`
export const Text = styled.p`
color: #757575;
font-size: .8125rem;
`
