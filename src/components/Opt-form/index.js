import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'
import {OptFormContainer, Input, Text, Button} from "./styles/Opt-form"

 export default function OptForm({children, ...restProps}) {
    
    return <OptFormContainer {...restProps}> {children} </OptFormContainer>
}
OptForm.Input = function OptFormInput({...restProps}) {
    return <Input {...restProps}/>
}
OptForm.Button = function OptFormInput ({children, ...restProps}) {
    return <Button {...restProps}> {children} <AiOutlineRight/> </Button>

}

OptForm.Text = function OptformText ({children, ...restProps}){

    return <Text {...restProps} > {children} </Text>
}

