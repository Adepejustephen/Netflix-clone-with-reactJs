import styled from "styled-components";

export const OptFormContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: ${({topMargin})=> (topMargin? '20px' : '')};
height: 100%;
align-items: center;
    padding: 0 5%;

@media screen and (min-width: 1000px) {
    flex-direction: row;
justify-content: center;
flex-wrap: wrap;
padding: .85rem 0 0 0;


}
`

export const Input = styled.input`
max-width: 450px;
width: 100%;
border: none;
padding: 10px;
height: 48px;
/* box-sizing: border-box; */

@media screen and (min-width: 740px){
height: 60px;
    
}

`
export const Button = styled.button`
display: flex;
align-items: center;
min-height: 40px;
height: 100%;
background: #e50914;
color: #fff;
border: none;
padding: 0 32px;
font-size: 1rem;
cursor: pointer;
margin: 10px 0;
background-image: linear-gradient(to bottom,#e50914,#db0510);
box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
border-radius: 2px;
transition: opacity .25s;



@media screen and (min-width: 1000px){
min-height: 60px;
font-size: 1.625rem; 
margin: 0 ;
border-radius: 0;
border-left: 1px solid #333;

}

&:hover {
    opacity: .9;
}
`
export const Text = styled.p`
text-align: center;
font-size: 1.125rem;
padding-bottom: 20px;
color: #fff;

@media screen and (min-width: 1000px) {

}
`