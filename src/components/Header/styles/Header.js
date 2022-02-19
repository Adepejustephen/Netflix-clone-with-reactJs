import styled from "styled-components";
import { Link } from "react-router-dom";


const backgroundLink = 'https://assets.nflxext.com/ffe/siteui/vlv3/c16cf196-e89e-4c46-8cc7-f2eca6fb0762/26de60db-e28b-4ac5-bff4-1697c19f883f/NG-en-20220103-popsignuptwoweeks-perspective_alpha_website_medium.jpg'

export const Background = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background: ${({ noBackground }) => noBackground ? 'none' : `url(${backgroundLink}) bottom right / cover no-repeat`};
height: 100%;
position: relative;
z-index: 5;
/* background-color: #000; */

@media screen and ( min-width: 600px){
    background: url(${backgroundLink}) bottom right / cover no-repeat;
    background: ${({ noBackground }) => noBackground ? 'none' : `url(${backgroundLink}) bottom right / cover no-repeat`};
}


&::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.8);
    opacity: .75;
    background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
    z-index: -1;
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
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
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
  width: 100px;
  top: 32px;
  right: 10px;
  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${Link} {
      cursor: pointer;
    }
    ${Picture} {
      cursor: default;
    }
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

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;