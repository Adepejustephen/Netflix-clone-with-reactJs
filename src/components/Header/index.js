import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {Background, Container, Logo, ButtonLink} from './styles/Header'


const Header = ({ children, ...restprops}) => {
    return (
        <Background {...restprops}> {children} </Background>
    )
}

Header.Frame = function HeaderFrame({children, ...restprops}) {
    return <Container {...restprops}>{ children} </Container>
}

Header.Logo = function HeaderLogo({ to, ...restprops}) {
    return <RouterLink to={to}>
        <Logo {...restprops} />
     </RouterLink>
}

Header.ButtonLink = function HeaderButton({ children, ...restprops }) {
    return <ButtonLink {...restprops}> {children} </ButtonLink>
}

export default Header
