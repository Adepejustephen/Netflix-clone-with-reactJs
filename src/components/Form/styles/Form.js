import styled from "styled-components";
import { Link as ReachLink} from "react-router-dom";

export const Container = styled.div`
display: flex;
flex-direction: column;
background: rgba(0, 0, 0, .75);
border-radius: 5px;
width: 100%;
max-width: 450px;
margin: auto;
min-height: 550px;
padding: 20px 20px 30px;
margin-bottom: 100px;
/* z-index: 10; */

@media screen and (min-width: 768px) {
padding: 60px 68px 40px;
min-height: 660px;

    
}
`;

export const Base = styled.form`
display: flex;
flex-direction: column;
max-width: 450px;
width: 100%;

`;

export const Error = styled.div`

background-color: #e87c03;
border-radius: 4px;
color: #fff;
padding: 15px 20px;
margin: 0 0 16px;

`;

export const Title = styled.h1`
color: #fff;
font-size: 2rem;
font-weight: bold;
margin-bottom: 1.75rem;

`;

export const Text = styled.p`
color: #737373;
font-size: 1rem;
font-weight: 500;

`;

export const SmallText = styled.p`

margin-top: 10px;
font-size: .8125rem;
line-height: normal;
color: #8C8C8C;

`;

export const Link = styled(ReachLink)`
color: #fff;
text-decoration: none;

&:hover{
    text-decoration: underline;
}
`;

export const Input = styled.input`
background: #444;
border-radius: 4px;
border: none;
color: #fff;
height: 50px;
line-height: 50px;
padding: 5px 20px;
margin-bottom: 20px;

&:last-of-type {
    margin-bottom: 30px;
}

`;

export const Submit = styled.button`
background: #e50914;
border-radius: 4px;
font-size: 1rem;
font-weight: bold;
padding: 1rem;
margin: 24px 0 12px;
border: none;
color: #fff; 
cursor: pointer;

&:disabled {
    opacity: 0.5;
}

`;