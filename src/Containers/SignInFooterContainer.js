import React from 'react'
import { Footer } from '../components'

const SignInFooterContainer = () => {
    return (
        <Footer pad={true}>
            <Footer.Container>
                <Footer.Title>Questions? Contact us.</Footer.Title>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Link href="#">FAQ</Footer.Link>
                        <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="#">Help Center</Footer.Link>
                        <Footer.Link href="#">Corporate Information</Footer.Link>

                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="#"></Footer.Link>
                        <Footer.Link href="#">Terms of Use</Footer.Link>

                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="#"></Footer.Link>
                        <Footer.Link href="#">Privacy</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Container>
        </Footer>
    )
}

export default SignInFooterContainer
