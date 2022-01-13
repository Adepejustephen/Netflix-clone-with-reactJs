import React from 'react'

import { Base, Error, Link, SmallText, Submit, Container, Input, Text, Title } from './styles/Form'

const form = ({children, ...restprops}) => {
    return (
        <Container {...restprops}>{children} </Container>
    )
}

form.Base = function FormBase({children, ...restprops}) {
    return <Base {...restprops}>{children} </Base>
}

form.Title = function FormTitle({children, ...restprops}) {
    return <Title {...restprops}>{children} </Title>
}

form.Error = function FormError({children, ...restprops}) {
    return <Error {...restprops}>{children} </Error>
}

form.Text = function FormText({children, ...restprops}) {
    return <Text {...restprops}>{children} </Text>
}

form.SmallText = function FormTextSmall({children, ...restprops}) {
    return <SmallText {...restprops}>{children} </SmallText>
}

form.Link = function FormLink({children, ...restprops}) {
    return <Link {...restprops}>{children} </Link>
}

form.Input = function FormTitle({ children, ...restprops }) {
    return <Input {...restprops}/>
}

form.Submit = function FormSubmit({ children, ...restprops }) {
    return <Submit {...restprops}>{children} </Submit>
}

export default form
