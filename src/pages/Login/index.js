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
        data === '' ? validation = 'Funcionário(a) cadastrado(a)!' : validation = data;
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
    }
    setMessage(validation);
  }

  return (
    <Form class='form-login'>
      <Logo class='login-logo'/>
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
      {message && <Text class='form-message'>{message}</Text>}
      <Button href='#' classLink='button-link' type='submit' class='button' onClick={sendForm}>
        ENTRAR
      </Button>
    </Form>
  );
}

export default Login;
