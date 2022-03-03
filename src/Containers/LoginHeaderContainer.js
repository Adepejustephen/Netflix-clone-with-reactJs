import React from 'react'
import Header from '../components/Header'
import * as ROUTES from '../constants/routes'

const logoLink = 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg' 


const LoginSignUpHeaderContainer = ({children}) => {
    
    return (
        <Header noBackground>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logoLink} alt="Netflix logo" />
                <Header.ButtonLink to={ROUTES.SIGN_IN} nodisplay='true'>Sign in</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}

export default LoginSignUpHeaderContainer
