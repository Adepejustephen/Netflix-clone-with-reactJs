import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import {   useUserAuth } from '../../contexts/firebaseContext'
import { Form } from '../../components';
import HeaderContainer from '../../Containers/HeaderContainer';
// import { firebaseRef } from '../../lib/firebase.prod';

import * as ROUTES from '../../constants/routes'

const SignUp = () => {

    const history = useNavigate()
    // const firebase = useContext(firebaseContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');
    const  {signUp} = useUserAuth();
    
    


    // Check if form input elements are valid

    const isInvalid = password === '' || email === '' ||userName === '';

    const handleSubmit =  async (e) => {
        e.preventDefault();
        setError('')

        try {
            await signUp(email, password);
            history(ROUTES.BROWSE)

        } catch (err) {
            console.log(err.message)

            setError(err.message);
        }
        
    }

    

    return (
        <>
            <HeaderContainer>
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
            </HeaderContainer>
        </>
    )
};

export default SignUp
