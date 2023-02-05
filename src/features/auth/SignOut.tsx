import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';
import { signOut } from './authSlice';
import { useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const onClick = (e: React.MouseEvent) => {
    dispatch(signOut(''));
    setTimeout(() => {
      document.location.reload();
    }, 500);
    navigate('/');
  }

  return (
    <div className='mainPage'>
      <div className='signout'>
        <h5>Are you sure to logout?</h5>
        <div>
          <Button className='btn' onClick={onClick}>Yes</Button>
          <Button className='btn' onClick={() => { navigate(-1) }}>No</Button>
        </div>
      </div>
    </div>
  )
}
