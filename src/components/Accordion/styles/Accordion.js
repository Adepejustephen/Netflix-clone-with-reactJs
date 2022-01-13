import styled from 'styled-components'



export const AccordionContainer = styled.section`
display: flex;
border-bottom: 8px solid #222;
color: #fff;
`
export const AccordionFrame = styled.div`
/* background-color: ; */
display: flex;
flex-direction: column;
max-width: 815px;
width: 100%;
padding: 70px 0;

/* margin: auto; */

@media screen and (min-width: 600px) {
padding: 70px 45px;
width: 75%;
margin: auto;
}
`
export const AccordionItem = styled.article`

margin-bottom: 10px;
/* max-width: 670px; */
/* width: 100%; */

:first-of-type {
    margin-top: 3em;
}

`
export const AccordionHeader = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
margin-bottom: 1px;
font-size: 1rem;
font-weight: normal;
padding: .8em 2.2em .8em 1.2em;
background-color: #303030;
user-select: none;
/* color: #fff; */
/* font-size: 3.125rem;
margin-bottom: 8px; */

@media screen and (min-width: 600px) {
    font-size: 1.625rem;
}

`
export const AccordionBody = styled.p`

background-color: #303030;
max-height: 1200px;
font-size: 1rem;
transition: max-height .25s cubic-bezier(.5, 0, .1, 1);
font-weight: normal;
line-height: 22px;
padding: .8em 2.2em;
white-space: pre-wrap;
user-select: none;

@media screen and (min-width: 600px) {
    font-size: 1.625rem;
    line-height: normal;
}

`
export const AccordionTitle = styled.h1`
font-size: 2.187rem;
margin-bottom: 8px;
line-height: 1.1;
text-align: center;

@media screen and (min-width: 600px) {
    font-size: 3.125rem;
}

`


