import React from 'react';
import Input from '../../components/Input';
import Radio from '../../components/Radio';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { createUser } from '../../services/user';
import './style.css';

function Register() {
  const [employee, setEmployee] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRepeat, setPasswordRepeat] = React.useState('');

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
      createUser(name, email, password, employee)
      .then((response) => {
          switch (response.status) {
            case 200:
              console.log('página de menu');
              break;
            case 400:
              message.textContent = "Preencha todos os campos!";
              break;
            case 403:
              message.textContent = "Email já cadastrado!";
              break;
            default:
              message.textContent = "Erro, tente novamente!";
          }
        })
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
      <Input label='login-name' text='NOME' type='text' placeholder='Digite o nome do(a) funcionário(a)' onChange={(e)=> setName(e.target.value)}/>
      <Input label='login-email' text='EMAIL' type='email' placeholder='Digite o email' onChange={(e)=> setEmail(e.target.value)}/>
      <Input label='login-password' text='SENHA' type='password' placeholder='Digite a senha' onChange={(e)=> setPassword(e.target.value)}/>
      <Input label='login-password-repeat' text='REPITA A SENHA' type='password' placeholder='Digite a senha novamente' onChange={(e)=> setPasswordRepeat(e.target.value)}/>
      <p id="message"></p>
      <Button type={'submit'} id={'button-login'} text={'CADASTRAR'} onClick={(e) => sendForm(e)}/>
    </form>
    </>
  );
}

export default Register;
