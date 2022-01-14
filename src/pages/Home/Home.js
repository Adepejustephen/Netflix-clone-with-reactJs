import React from 'react'

import { Accordion, InfoSection, Feature, OptForm } from '../../components'
import {HomeHeader, HomeFooter} from '../../Containers'


function Home() {
    return (
        <>
            <HomeHeader>
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
            </HomeHeader>
            <main>
                <InfoSection />
                <Accordion />
                <HomeFooter />
            </main>
        </>
    )
}

export default Home
