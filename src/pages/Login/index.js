import React from 'react';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { loginUser } from '../../services/user';

import './style.css';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function validatedForm() {
    const regex = /[\w.\-+]+@[\w-]+\.[\w-.]/gi;
    const validatedEmail = regex.test(email);
    if (email && validatedEmail && password) {
      return '';
    } else if (email ==='' || password ==='') {
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
      loginUser(email, password)
      .then((response) => {
          switch (response.status) {
            case 200:
              console.log(response.json());
              break;
            case 400:
              message.textContent = "Preencha todos os campos!";
              break;
            default:
              message.textContent = "Erro, tente novamente!";
          }
        })
    }
  } 

  return (
    <form className="form-user">
      <Logo />
      <Input label='login-email' text='EMAIL' type='email' placeholder='Digite o email' onChange={(e)=> setEmail(e.target.value)}/>
      <Input label='login-password' text='SENHA' type='password' placeholder='Digite a senha' onChange={(e)=> setPassword(e.target.value)}/>
      <p id="message"></p>
      <Button type={'submit'} id={'button-login'} text={'ENTRAR'} onClick={(e) => sendForm(e)} />
    </form>
  );
}

export default Login;
