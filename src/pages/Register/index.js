import React, { useState } from 'react';
import Input from '../../components/Input';
import Radio from '../../components/Radio';
import Button from '../../components/Button';
import './style.css';
import Header from '../../components/Header';

function Register() {
  const [employee, setEmployee] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  function validatedForm() {
    const regex = /[\w.\-+]+@[\w-]+\.[\w-.]/gi;
    const validatedEmail = regex.test(email);

    if (name && email && validatedEmail && password && passwordRepeat && employee) {
      return (password !== passwordRepeat) ? 'As duas senhas não coincidem. Digite-as novamente!' : '';
    } else if (name ==='' || email ==='' || password ==='' || passwordRepeat ==='' || employee ==='') {
      return 'Preencha todos os campos!';
    } else {
      return 'Preencha o campo de email corretamente!';
    }
  }

  function sendForm(e) {
    e.preventDefault();
    const message = document.querySelector('#message');
    message.textContent = '';
    const validation = validatedForm();
    if (validation !== '') { 
      message.textContent = validation;
    } else {
      console.log('enviou');
    }
  }

  return (
    <>
    <Header text='CADASTRO DE USUÁRIOS'/>
    <form className="form-user">
      <p className='text-radio'>
        CADASTRO  DO (A):
        <span className='container-radio'>
          <Radio name='user' selectedValue='waiter' text='ATENDIMENTO' onChange={(e)=> setEmployee(e.target.value)}/>
          <Radio name='user' selectedValue='cook' text='COZINHA' onChange={(e)=> setEmployee(e.target.value)}/>
        </span>
      </p>
      <Input label='login-name' text='NOME' id={'login-name'} type='text' placeholder='Digite o nome do(a) funcionário(a)' onChange={(e)=> setName(e.target.value)}/>
      <Input label='login-email' text='EMAIL' id={'login-email'} type='email' placeholder='Digite o email' onChange={(e)=> setEmail(e.target.value)}/>
      <Input label='login-password' text='SENHA' type='password' placeholder='Digite a senha' required onChange={(e)=> setPassword(e.target.value)}/>
      <Input label='login-password-repeat' text='REPITA A SENHA' type='password' placeholder='Digite a senha novamente' required onChange={(e)=> setPasswordRepeat(e.target.value)}/>
      <p id="message"></p>
      <Button type={'submit'} id={'button-login'} text={'CADASTRAR'} onClick={(e) => sendForm(e)}/>
    </form>
    </>
  );
}

export default Register;
