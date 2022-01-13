import React from 'react'
import { Footer } from '../components'

const HomeFooterContainer = () => {
    return (
        <Footer>
            <Footer.Container>
                <Footer.Title>Questions? Contact us.</Footer.Title>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Link href="#">FAQ</Footer.Link>
                        <Footer.Link href="#">Investor Relations</Footer.Link>
                        <Footer.Link href="#">Privacy</Footer.Link>
                        <Footer.Link href="#">Speed Test</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="#">Help Center</Footer.Link>
                        <Footer.Link href="#">Jobs</Footer.Link>
                        <Footer.Link href="#">Cookie Preferences</Footer.Link>
                        <Footer.Link href="#">Legal Notices</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="#">Account</Footer.Link>
                        <Footer.Link href="#">Ways to Watch</Footer.Link>
                        <Footer.Link href="#">Corporate Information</Footer.Link>
                        <Footer.Link href="#">Only on Netflix</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="#">Media Center</Footer.Link>
                        <Footer.Link href="#">Investor Relations</Footer.Link>
                        <Footer.Link href="#">Terms of Use</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Text>Netflix Nigeria</Footer.Text>
            </Footer.Container>
        </Footer>
    )
}

export default HomeFooterContainer
