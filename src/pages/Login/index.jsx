import React from 'react';
import { userLogin } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Form from '../../components/Form';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';

const Login = () => {
  const navigate = useNavigate();
  const { addInputValue, validatedForm, form } = useForm();
  const [message, setMessage] = React.useState();

  const sendForm = (e) => {
    e.preventDefault();
    let validation = validatedForm();
    if (validation === '') {
      userLogin(form.email, form.password)
        .then((data) => {
          validation = data;
          switch (data.role) {
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
        })
        .then(() => setMessage(validation));
    }
    setMessage(validation);
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
      {message && <Text customClass='formMessage'>{message}</Text>}
      <Button type='submit' customClass='button' onClick={sendForm} role="login">
        ENTRAR
      </Button>
    </Form>
  );
}

export default Login;
