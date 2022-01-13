import styled from "styled-components";
// import {BsFillPlayFill} from 'react-icons/bs'

export const BannerHeader = styled.header`

  /* background-color: #fff; */
  object-fit: contain;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;


`


                    

export const BannerContents = styled.div`

margin-left: 50px;

`
export const BannerTitle = styled.h1`
color: #fff;
`

export const Icon = styled.i`

padding-right: 10px;
font-size: 1.5rem;
display: flex;
align-items: center;

`
export const BannerDescription = styled.p`
color: #fff;
max-width: 32rem;
line-height: 1.3;
padding: 1rem 0;
text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

`
export const BannerButtons = styled.div`
display: flex;
/* color: #fff; */
`
export const BannerButton = styled.button`
color: ${({ primary }) => (primary ? '#000' : '#fff')};
background-color: ${({ primary }) => (primary ? '#fff' : 'rgba(109,109,110,0.7)')};
border-radius: 3px;
outline: none;
border: none;
font-weight: 500;
cursor: pointer;
padding: .5rem 2rem;
margin-right: ${({ primary }) => (primary ? '10px' : '0')};
font-size: 1.1rem;
display: flex;
/* justify-content: space-evenly; */
align-items: center;

&:hover {
    opacity: .8;
    transition: opacity .3s;
}

`