import React, { useState } from 'react';
import InputFloatingLabel from '../../shared/components/input_floating_label';
import DarkAuthLogo from '../../shared/components/dark_auth_logo';
import AppButton from '../../shared/app_button';
import './auth.scss';
import AppTitle from '../../shared/app_title';

export default function ComponentAuth() {

  const [isSignUp, setSignUp] = useState(true)

  return (
    <div className='auth_component_container'>
      <DarkAuthLogo className='dark_auth_logo_auth_class'/>
      <AppTitle />
      <div className='auth_component_inputs'>
        <InputFloatingLabel type='text' label='Username' placeholder='Enter a unique username'/>
        {
          isSignUp &&
          <InputFloatingLabel type='text' label='Email' placeholder='Enter your email'/>
        }
        <InputFloatingLabel type='password' label='Password'placeholder='Enter your password'/>
      </div>
      <AppButton className="dark_generic_button" text="sign up"/>
    </div>
  );
}

