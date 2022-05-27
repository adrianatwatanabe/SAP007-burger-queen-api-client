import React from 'react';
import Input from '../../components/Input';
import InputRadio from '../../components/Radio';
import Button from '../../components/Button';
import './style.css';
import Header from '../../components/Header';

function Register() {
  return (
    <>
    <Header text='CADASTRO DE USUÁRIOS'/>
    <form className="form-user">
      <InputRadio />
      <Input labelFor='login-email' text='EMAIL' inputId={'login-email'} inputType='email' inputPlaceholder='Digite o email' />
      <Input labelFor='login-password' text='SENHA' inputType='password' inputPlaceholder='Digite a senha' required />
      <Input labelFor='login-password-repeat' text='REPITA A SENHA' inputType='password' inputPlaceholder='Digite a senha novamente' required/>
      <p id="message"></p>
      <Button type={'submit'} id={'button-login'} text={'CADASTRAR'} />
    </form>
    </>
  );
}

export default Register;
