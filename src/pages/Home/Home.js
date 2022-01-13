import React from 'react'

import { Accordion, InfoSection, Feature, OptForm } from '../../components'
import HeaderContainer from '../../Containers/HeaderContainer'
import HomeFooterContainer from '../../Containers/HomeFooterContainer'

function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                    <OptForm>
                        <OptForm>
                            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                            <OptForm.Input placholder='Email address' type='email' />
                            <OptForm.Button>Get Started</OptForm.Button>
                        </OptForm>
                    </OptForm>
                </Feature> 
            </HeaderContainer>
            <main>
                <InfoSection />
                <Accordion />
                <HomeFooterContainer />
            </main>
        </>
    )
}

export default Home
