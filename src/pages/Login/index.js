import React from 'react';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './style.css';

function Login() {
  return (
    <form className="form-user">
      <Logo />
      <Input labelFor='login-email' text='EMAIL' inputId={'login-email'} inputType='email' inputPlaceholder='Digite seu email' />
      <Input labelFor='login-password' text='SENHA' inputType='password' inputPlaceholder='Digite sua senha' />
      <p id="message"></p>
      <Button type={'submit'} id={'button-login'} text={'ENTRAR'} />
    </form>
  );
}

export default Login;
