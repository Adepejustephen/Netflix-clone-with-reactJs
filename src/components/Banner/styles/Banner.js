import styled from "styled-components";
import { Link } from 'react-router-dom'

// import {BsFillPlayFill} from 'react-icons/bs'

export const BannerHeader = styled.div`
  width: 100%;
  max-height: 600px;
  height: 100%;
  background-size: cover;

  @media screen and (max-width: 800px) {
    background-image: none !important;
    height: 100%;
    max-height: 100%;
  }

  /* background-color: #fff; */
  /* object-fit: contain; */
  /* height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; */
`;




export const BannerContents = styled.div`

margin-left: 50px;
display: flex;
padding-top: 100px;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  
  
  @media (max-width: 800px) {
    display: none;
  }

`
export const BannerTitle = styled.h1`
color: #fff;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 20px;
  

`

export const Icon = styled.i`

padding-right: 10px;
font-size: 1.5rem;
display: flex;
align-items: center;

`
export const BannerDescription = styled.p`
/* color: #fff;
max-width: 32rem;
line-height: 1.3;
padding: 1rem 0;
text-shadow: 2px 2px 4px rgb(0 0 0 / 45%); */
color: #FFF;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 10px;

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
margin-top: 20px;
&:hover {
    opacity: .8;
    transition: opacity .3s;
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

display: ${({ doNotDisplay }) => doNotDisplay ? 'none' : 'block'};
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

export const LinkText = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  margin-left: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};
  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  font-size: 24px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Picture = styled.button`
  background: url(${({ src }) => src}});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 150px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${LinkText} {
    cursor: pointer;
    margin: 0;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ${LinkText}, ${Picture} {
    cursor: default;
  }

  button {
    margin-right: 10px;
  }
  
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const ProfileText = styled.p`
color: #fff;
font-size: 14px;
padding-bottom: 15px;
`

export const FadeButtom = styled.div`
height: 7.4rem;
background-image: linear-gradient(
  180deg,
  transparent,
  rgba(37, 37, 37, .61),
  #111
);

@media screen and ( max-width: 800px) {
  display: none;
}
`