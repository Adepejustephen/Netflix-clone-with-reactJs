import React, { useState , useContext} from 'react'
import { useNavigate } from 'react-router-dom'

import { Form } from '../../components';
import { LoginSignUpFooter, LoginSignUpHeader } from '../../Containers'

import * as ROUTES from '../../constants/routes'
import { useUserAuth } from '../../contexts/firebaseContext'

const SignUp = () => {

    const profileImage = 'https://occ-0-1168-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdweZW5Ra69F4jKL39o-nRkek0fp03WngXS4tiegd4gIiZ4I2PB8LUc6LHsWhoAlvvBKtkw754aLQEjB7cWPyZ5fSw.png?r=bf3'
    const navigate = useNavigate()
    const { signUp } = useUserAuth()
   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');
   




    // Check if form input elements are valid

    const isInvalid = password === '' || email === '' || userName === '';

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')

        // firebase
        //     .auth()
        //     .createUserWithEmailAndPassword(email, password)
        //     .then((result) => {
        //         result.user
        //             .updateProfile({
        //                 displayName: userName,
        //                 photoURL: profileImage,
        //             })
        //             .then(() => {
        //                 navigate(ROUTES.BROWSE);
        //             });
        //     })
        //     .catch((error) => {
        //         setEmail("");
        //         setUserName("");
        //         setPassword("");
        //         setError(error.message);
        //     });
        signUp(email, password)
            .then((result) =>
                result.user
                    .updateProfile({
                        displayName: userName,
                        photoURL: profileImage,

                    })
                    .then(() => {
                        navigate(ROUTES.BROWSE)
                    })
            )
            .catch((err) => {
                setEmail('');
                setPassword('');
                setUserName('');
                setError(err.message);
            })

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
