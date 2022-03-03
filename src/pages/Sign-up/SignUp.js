import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Form } from '../../components';
import { LoginSignUpFooter, LoginSignUpHeader } from '../../Containers'

import * as ROUTES from '../../constants/routes'
import { useUserAuth } from '../../contexts/firebaseContext'

const SignUp = () => {
    
    const navigate = useNavigate()
    const { signUp } = useUserAuth()


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');





    // Check if form input elements are valid

    const isInvalid = password === '' || email === '' || userName === '';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')

        try {
            await signUp(email, password)

            navigate(ROUTES.BROWSE)
        }
        catch (err) {
            setEmail('');
            setPassword('');
            setUserName('');
            setError(err.message);
        }

    }



    return (
        <>
            <LoginSignUpHeader>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error> {error} </Form.Error>}

                    <Form.Base onSubmit={handleSubmit}>
                        <Form.Input
                            placeholder="Name"
                            value={userName}
                            onChange={({ target }) => setUserName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />

                        <Form.Input
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)} />

                        <Form.Submit disabled={isInvalid} type='submit'>Sign up</Form.Submit>
                    </Form.Base>

                    <Form.Text>Already a user? <Form.Link to='/SignIn'>Sign in now</Form.Link></Form.Text>
                    <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more</Form.SmallText>
                </Form>

                < LoginSignUpFooter />
            </LoginSignUpHeader>
        </>
    )
};

export default SignUp
