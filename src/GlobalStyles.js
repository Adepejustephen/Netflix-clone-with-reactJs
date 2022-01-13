import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,::before,::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    /* background: #000; */
    
    
}

`;

export const GlobalBody = createGlobalStyle`
body{
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    scrollbar-width: none;
     background: #000;
     width: 100%;
    font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    
}

`;

export const Container = styled.div`

width: 100%;
max-width: 95%;
margin: 0 auto;
padding: 0 20px;

@media screen and (min-width: 600px) {
max-width: 90%;
}
@media screen and (min-width: 920px) {
max-width: 1200px;
}
`

export const Button = styled.button`
border-radius: 4px;
background: ${({ primary }) => (primary ? '#4b59f7' : '#0467fb')};
white-space: nowrap;
padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({ fontBig }) => (fontBig ? '24px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
transition: .3s ease;
background: #fff;
background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
}

@media screen and ( max-width: 960px) {
    width: 100%;
}`



export default GlobalStyle