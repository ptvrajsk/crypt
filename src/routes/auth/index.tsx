import React, { useState } from 'react';
import InputFloatingLabel from '../../shared/components/input_floating_label';
import DarkAuthLogo from '../../shared/components/dark_auth_logo';
import './auth.scss';

export default function ComponentAuth() {

  const [isSignUp, setSignUp] = useState(true)

  return (
    <div className='auth_component_container'>
      <DarkAuthLogo className='dark_auth_logo_auth_class'/>
      <div className='auth_component_inputs'>
        <InputFloatingLabel type='text' label='Username' placeholder='Enter a unique username'/>
        {
          isSignUp &&
          <InputFloatingLabel type='text' label='Email' placeholder='Enter your email'/>
        }
        <InputFloatingLabel type='password' label='Password'placeholder='Enter your password'/>
      </div>
    </div>
  );
}

