import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Form } from '../../components'
import { LoginSignUpFooter, LoginSignUpHeader } from '../../Containers'

import * as ROUTES from '../../constants/routes'
import { useUserAuth } from '../../contexts/firebaseContext'


const SignIn = () => {

    const { signIn } = useUserAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    // Check if form input elements are valid

    const isInvalid = password === '' || email === '';

    const handleSubmit = async (e) => {
        e.preventDefault();

        signIn(email, password)

            .then(() => {
                navigate(ROUTES.BROWSE)
            })

            .catch((err) => {
                setEmail('');
                setPassword('');

                setError(err.message);
            })

    }

    return (
        <>
            < LoginSignUpHeader>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error} </Form.Error>}

                    <Form.Base onSubmit={handleSubmit}>
                        <Form.Input
                            placeholder="Email address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)} />

                        <Form.Input
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)} />

                        <Form.Submit disabled={isInvalid} type='submit'>Sign in</Form.Submit>
                    </Form.Base>

                    <Form.Text>New to Netflix? < Form.Link to='/SignUp'>Sign up now</Form.Link></Form.Text>
                    <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more</Form.SmallText>
                </Form>
                <LoginSignUpFooter />
            </ LoginSignUpHeader>
            {/* <Footer/> */}
        </>
    )
}

export default SignIn
