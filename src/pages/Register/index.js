import React from 'react';
import Input from '../../components/Input';
import Radio from '../../components/Radio';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Container from '../../components/Container';
import useForm from '../validation/useForm';
import { createUser } from '../../services/user';

import './style.css';

function Register() {
  const { addInputValue, validatedForm, cleanForm, form, role, setRole } = useForm();
  const [message, setMessage] = React.useState();
  let validation = '';

  function sendForm(e) {
    e.preventDefault();
    validation = validatedForm();
    if (validation === '') {
      
      createUser(form.name, form.email, form.password, role)
      .then((data) => {

        data === '' ? setMessage('Funcionário(a) cadastrado(a)!') : setMessage(data);

        data === '' ? validation = 'Funcionário(a) cadastrado(a)!' : validation = data;
        
        console.log(data);
      });
    }
    console.log(validation);
    setMessage(validation);
  }

  return (
    <>
      <Header text='CADASTRO DE FUNCIONÁRIOS' />
      <Container>
        <form className='form-user'>
          <p className='text-radio'>
            CADASTRO DO (A):
            <span className='container-radio'>
              <Radio
                label={'form-label-radio'}
                class={'input-radio'}
                name={'role'}
                text={['ADMINISTRADOR', 'ATENDIMENTO', 'COZINHA']}
                options={['admin', 'waiter', 'cook']}
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
          {message && <p id='message'>{message}</p>}
          <Button type={'submit'} text={'CADASTRAR'} onClick={sendForm} />
          <Button type={'button'} text={'LIMPAR'} onClick={cleanForm} />
        </form>
      </Container>
      <Menu />
    </>
  );
}

export default Register;
