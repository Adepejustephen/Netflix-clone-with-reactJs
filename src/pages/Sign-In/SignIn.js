import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import {Form } from '../../components'
import HeaderContainer from '../../Containers/HeaderContainer'
import SignInFooterContainer from '../../Containers/SignInFooterContainer'

import * as ROUTES from '../../constants/routes'
import { useUserAuth } from '../../contexts/firebaseContext'

const SignIn = () => {

    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signIn } = useUserAuth();;


    // Check if form input elements are valid

    const isInvalid = password === '' || email === '';

    const handleSubmit =  async (e) => {
        e.preventDefault();

        setError('')

        try {
            await signIn(email, password);
            history(ROUTES.BROWSE)

        } catch (err) {

            setError(err.message);
        }


    }

    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error} </Form.Error>}

                <Form.Base onSubmit={handleSubmit}>
                    <Form.Input 
                    placeholder="Email address"
                    value={email}
                    onChange={({target})=> setEmail(target.value)} />

                    <Form.Input 
                    type= "password"
                    autoComplete = "off"
                    placeholder="Password" 
                    value={password}
                    onChange={({target})=> setPassword(target.value) }/>

                    <Form.Submit disabled={isInvalid} type='submit'>Sign in</Form.Submit> 
                </Form.Base>

                    <Form.Text>New to Netflix? < Form.Link to='/SignUp'>Sign up now</Form.Link></Form.Text>
                    <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more</Form.SmallText>
            </Form>
            <SignInFooterContainer/>
        </HeaderContainer>
        {/* <Footer/> */}
        </>
    )
}

export default SignIn
