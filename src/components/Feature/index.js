import React from 'react'
import { Container, Title, SubTitle } from './styles/Feature'

const Feature = ({children, ...restprops}) => {
    return (
        <Container {...restprops}>{children} </Container>
    )
}

Feature.Title = function FeatureTitle({children, ...restprops}) {
    return <Title {...restprops}>{children}</Title>
}

Feature.SubTitle = function FeatureSubTitle({children, ...restprops}) {
    return <SubTitle {...restprops}>{children}</SubTitle>
}
// Feature.Title = function FeatureTitle({children, ...restprops}) {
//     return <Title {...restprops}>{children}</Title>
// }

export default Feature
