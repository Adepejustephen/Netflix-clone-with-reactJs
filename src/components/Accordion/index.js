import React from 'react'
import faqs from '../Fixtures/faqs.json'
import { AccordionContainer, AccordionTitle, AccordionFrame } from './styles/Accordion'
import Questions from './Questions'
import OptForm from '../Opt-form'

function Accordion({topMargin}) {

    return (

        <>
            <AccordionContainer>
                <AccordionFrame>
                    <AccordionTitle>Frequently Asked Questions</AccordionTitle>
                    {faqs.map((question) => {
                        return <Questions key={question.id}  {...question} />
                    })}
                    <OptForm topMargin= {topMargin}>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                        <OptForm.Input placholder='Email address' type= 'email' />
                        <OptForm.Button>Get Started</OptForm.Button>
                    </OptForm>
                </AccordionFrame>
            </AccordionContainer>

        </>
    )
}

export default Accordion
