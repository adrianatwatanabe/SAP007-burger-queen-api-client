import React from 'react';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../services/useForm';
import './style.css';

function Login() {
  const { addInputValue, sendForm, form, error } = useForm();

  return (
    <form className='form-user'>
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
