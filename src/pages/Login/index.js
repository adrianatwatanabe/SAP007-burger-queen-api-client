import React from 'react';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../services/useForm';
import { loginUser } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Login() {
  const navigate = useNavigate();
  const { addInputValue, validatedForm, form, error, setError } = useForm();

  function sendForm(e) {
    e.preventDefault();
    const validation = validatedForm();
    if (validation) {
      loginUser(form.email, form.password)
        .then((response) => {
          switch (response.status) {
            case 200:
              setError('Funcionário(a) cadastrado!');
              return response.json();
            case 400:
              setError('Email e/ou senha incorretos. Tente novamente!');
              break;
            default:
              setError('Erro, tente novamente!');
          }
        })
        .then((data) => {
          switch (data.role) {
            case 'admin':
              navigate('../administracao');
              break;
            case 'waiter':
              navigate('../pedidos');
              break;
            case 'cook':
              navigate('../pedidos-andamento');
              break;
            default:
              navigate('../');
          }
        });
    }
  }

  return (
    <form className='form-login'>
      <Logo />
      <Input
        label='form-label'
        name='email'
        class='form-input'
        value={form.email}
        text='EMAIL'
        type='text'
        placeholder='Digite o email'
        onChange={addInputValue}
      />
      <Input
        label='form-label'
        name='password'
        class='form-input'
        value={form.password}
        text='SENHA'
        type='password'
        placeholder='Digite a senha'
        onChange={addInputValue}
      />
      {error && <p id='message'>{error}</p>}
      <Button type={'submit'} text={'CADASTRAR'} onClick={sendForm} />
    </form>
  );
}

export default Login;
