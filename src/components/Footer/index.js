import React from 'react'
import { Column, Break, Container, Link, Text, Title, Row, Background } from './styles/Footer'

function Footer( {pad, children, ...restprops}) {
    return <Background {...restprops}>{children} </Background>
}
Footer.Container = function FooterContainer( {children, ...restprops}) {
    return <Container {...restprops}>{children} </Container>
}

Footer.Title = function FooterTitle({children, ...restprops}) {
    return <Title {...restprops}>{children} </Title>
}

Footer.Break = function FooterBreak({ children, ...restprops }) {
    return <Break {...restprops}>{children} </Break>
}

Footer.Row = function FooterRow({ children, ...restprops }) {
    return <Row {...restprops}>{children} </Row>
}
Footer.Column = function FooterColumn({ children, ...restprops }) {
    return <Column {...restprops}>{children} </Column>
}
Footer.Link = function FooterLink({ children, ...restprops }) {
    return <Link {...restprops}>{children} </Link>
}
Footer.Text = function FooterText({children, ...restprops}) {
    return <Text {...restprops}>{children} </Text>
}


export default Footer
