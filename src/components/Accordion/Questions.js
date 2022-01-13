import React, {useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { VscAdd } from 'react-icons/vsc'
import { IconContext } from 'react-icons/lib'
import { AccordionBody, AccordionHeader, AccordionItem } from './styles/Accordion'



const Questions = (props) => {
    const { header, body } = props
    const [showBody, setShowBody] = useState(false);
    return (
        <IconContext.Provider value={{color: 'fff'}}>
            <AccordionItem>
                <AccordionHeader onClick={() => setShowBody((showBody) => !showBody)}>
                    {header}
                    {showBody ? <AiOutlineClose /> : <VscAdd />}
                    {/* <button className="btn"> {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button> */}
                </AccordionHeader>
                {/* {showInfo && <p>{info}</p>} */}
                {showBody ? <AccordionBody> {body} </AccordionBody> : null}

            </AccordionItem>
        </IconContext.Provider>
    )
}

export default Questions
