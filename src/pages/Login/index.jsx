import React from 'react';
import { userLogin } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import useEmployee from '../../customHooks/useEmployees';
import { setUserData } from '../../services/storage';
import Form from '../../components/Form';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';

const Login = () => {
  const navigate = useNavigate();
  const { addInputValue, validatedForm, form, setErrorMessage, errorMessage } = useEmployee();

  const authenticatedUser = (role) => {
    switch (role) {
      case 'admin':
        navigate('../menu');
        break;
      case 'waiter':
        navigate('../orders');
        break;
      case 'cook':
        navigate('../orders-progress');
        break;
      default:
        navigate('../');
    }
  }

  const sendForm = async (e) => {
    e.preventDefault();
    const validation = validatedForm();
    if (validation !== false) {
      const response = await userLogin(form.email, form.password);
      switch (response.status) {
        case 200:
          const data = await response.json();
          setUserData(data.name, data.token, data.role);
          authenticatedUser(data.role);
          break;
        case 400:
          setErrorMessage('Email e/ou senha incorretos. Tente novamente!');
          break;
        default:
          setErrorMessage('Erro, tente novamente!');
      }
    }
    setTimeout(() => setErrorMessage(''), 5000);
  }

  return (
    <Form customClass='formLogin'>
      <Logo customClass='loginLogo' />
      <Input
        classLabel='formLabel'
        classInput='formInput'
        text='EMAIL'
        type='text'
        name='email'
        value={form.email}
        placeholder='Digite o seu email'
        onChange={addInputValue}
      />
      <Input
        classLabel='formLabel'
        classInput='formInput'
        text='SENHA'
        type='password'
        name='password'
        value={form.password}
        placeholder='Digite a sua senha'
        onChange={addInputValue}
      />
      {errorMessage && <Text customClass='formMessage'>{errorMessage}</Text>}
      <Button type='submit' customClass='button' onClick={sendForm} role="login">
        ENTRAR
      </Button>
    </Form>
  );
}

export default Login;
