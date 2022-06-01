import React from 'react';
import Input from '../../components/Input';
import Radio from '../../components/Radio';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { createUser } from '../../services/user';
import './style.css';

function Register() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });
  const [role, setRole] = React.useState('');
  const [error, setError] = React.useState('');

  const addInputValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  function validatedForm() {
    const regex = /[\w.\-+]+@[\w-]+\.[\w-.]/gi;
    const validatedEmail = regex.test(form.email);

    if (form.name && form.email && validatedEmail && form.password && form.passwordRepeat && role) {
      if (form.password !== form.passwordRepeat) {
        setError('As duas senhas não coincidem. Digite-as novamente!');
        return false;
      } else {
        setError(null);
        return true;
      }
    } else if (form.name === '' || form.email === '' || form.password === '' || form.passwordRepeat === '' || role === '') {
      setError('Preencha todos os campos!');
      return false;
    } else {
      setError('Preencha o campo de email corretamente!');
      return false;
    }
  }

  function sendForm(e) {
    e.preventDefault();
    const validation = validatedForm();

    if (validation) {
      createUser(form.name, form.email, form.password, role)
      .then((response) => {
        switch (response.status) {
          case 200:
            console.log('página de menu');
            break;
          case 403:
            setError('Email já cadastrado!');
            break;
          default:
            setError('Erro, tente novamente!');
        }
      });
    }
  }

  function cleanForm(e) {
    e.preventDefault();
    setForm({
      name: '',
      email: '',
      password: '',
      passwordRepeat: '',
      role: '',
    });
    setRole('');
    setError('');
  }

  return (
    <>
      <Header text='CADASTRO DE FUNCIONÁRIOS' />
      <form className='form-user'>
        <p className='text-radio'>
          CADASTRO DO (A):
          <span className='container-radio'>
            <Radio
              label={'form-label-radio'}
              class={'input-radio'}
              name={'role'}
              text={['ATENDIMENTO', 'COZINHA']}
              options={['waiter', 'cook']}
              value={role}
              setValue={setRole}
              onChange={addInputValue}
            />
          </span>
        </p>
        <Input
          label='form-label'
          name='name'
          class='form-input'
          value={form.name}
          text='NOME'
          type='text'
          placeholder='Digite o nome do(a) funcionário(a)'
          onChange={addInputValue}
        />
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
        <Input
          label='form-label'
          name='passwordRepeat'
          class='form-input'
          value={form.passwordRepeat}
          text='REPITA A SENHA'
          type='password'
          placeholder='Digite a senha novamente'
          onChange={addInputValue}
        />
        {error && <p id='message'>{error}</p>}
        <Button type={'submit'} text={'CADASTRAR'} onClick={sendForm} />
        <Button type={'button'} text={'LIMPAR'} onClick={cleanForm} />
      </form>
    </>
  );
}

export default Register;
