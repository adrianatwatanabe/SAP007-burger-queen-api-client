import React from 'react';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../validation/useForm';
import { userLogin } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Login() {
  const navigate = useNavigate();
  const { addInputValue, validatedForm, form } = useForm();
  const [message, setMessage] = React.useState();
  let validation = '';

  function sendForm(e) {
    e.preventDefault();
    validation = validatedForm();
    if (validation === '') {
      userLogin(form.email, form.password)
      .then((data) => {
        if(data !== '') setMessage(data);
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
      {message && <p id='message'>{message}</p>}
      <Button type={'submit'} text={'ENTRAR'} onClick={sendForm} />
    </form>
  );
}

export default Login;
