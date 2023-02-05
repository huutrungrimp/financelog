import React, { useState, FunctionComponent, PropsWithChildren, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { signIn } from './authSlice';
import { Form, Row, Col, Button, FormLabel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {

    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state)
    const navigate = useNavigate();

    const [userSignIn, setUserSignIn] = useState({
        username: "",
        password: "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUserSignIn({
            ...userSignIn,
            [e.target.name]: e.target.value
        })
    }

    const onClick = (e: React.MouseEvent) => {
        dispatch(signIn(userSignIn));
        setTimeout(() => {
            document.location.reload();
        }, 1000);
        navigate(`/${userSignIn.username}`);
    };

    return (
        <div className='signin'>
            <h3>Sign In</h3>
            <div className='gx-0'>
                <Form className='row my-3 mx-3'>
                    <Form.Group className='row mb-3 gx-0'>
                        <FormLabel>Username</FormLabel>
                        <Form.Control type='text' name='username' placeholder='Your username' onChange={onChange}></Form.Control>
                    </Form.Group>
                    <Form.Group className='row mb-3 gx-0'>
                        <FormLabel>Password</FormLabel>
                        <Form.Control type='password' name='password' placeholder='Your password' onChange={onChange}></Form.Control>
                    </Form.Group>

                    <div className='forgetPassword'>
                        <p><Link to='/signup'>Forget password?</Link></p>
                        <p><Link className='text-right' to='/signup'>Sign Up</Link></p>
                    </div>
                    <Row className='mb-3 gx-0'>
                        <Button onClick={onClick}>Submit</Button>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default SignIn;