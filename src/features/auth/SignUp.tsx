import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAppDispatch } from '../../app/hooks';
import { signUp } from './authSlice';

export default function SignUp() {

    const dispatch = useAppDispatch();

    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value.trim().toLowerCase()
        })
    };


    return (
        <div className='signup'>
            <h3>Sign Up</h3>
            <div className='gx-0 py-1'>
                <Form className='row my-3 mx-3'>
                    <Form.Group>
                        <Form.Group className='row gx-0'>
                            <Form.Group className='row my-2 gx-0'>
                                <Form.Control type='text' placeholder='Username' name='username' onChange={onChange}></Form.Control>
                            </Form.Group>
                            <Form.Group className='row my-2 gx-0'>
                                <Form.Control type='email' placeholder='Email' name='email' onChange={onChange}></Form.Control>
                            </Form.Group>
                            <Form.Group className='row my-2 gx-0'>
                                <Form.Control type='password' placeholder='Password' name='password' onChange={onChange}></Form.Control>
                            </Form.Group>
                            <Form.Group className='row my-2 gx-0'>
                                <Form.Control type='password' placeholder='Confirm password' name='password2' onChange={onChange}></Form.Control>
                            </Form.Group>
                        </Form.Group>
                        <Form.Group className='row my-2 gx-0'>
                            <Button onClick={() => { dispatch(signUp(newUser)) }}>Submit</Button>
                        </Form.Group>
                    </Form.Group>

                </Form>
            </div>
        </div>
    )
}
