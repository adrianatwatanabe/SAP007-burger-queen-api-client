import React from 'react';
import useForm from '../../hooks/useForm';
import { createUser } from '../../services/user';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Radio from '../../components/Radio';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import Text from '../../components/Text';

const Register = () => {
  const { addInputValue, validatedForm, cleanForm, form } = useForm();
  const [message, setMessage] = React.useState();

  const sendForm = (e) => {
    e.preventDefault();
    let validation = validatedForm();
    if (validation === '') {
      createUser(form.name, form.email, form.password, form.role)
        .then((data) => {
          data === '' ? validation = 'Funcionário(a) cadastrado(a)!' : validation = data;
        })
        .then(() => setMessage(validation));
    }
    setMessage(validation);
  }

  return (
    <>
      <Header text='CADASTRO DE FUNCIONÁRIOS' />
      <Container containerGeneral='containerGeneral' container='container'>
        <Form customClass='formUser'>
          <Radio
            textGeneral='CADASTRO DO (A):'
            classText='textRadio'
            classContainerRadio='containerRadio'
            classLabel='formLabelRadio'
            classInput='inputRadio'
            name='role'
            text={['ADMINISTRADOR', 'ATENDIMENTO', 'COZINHA']}
            options={['admin', 'waiter', 'cook']}
            onChange={addInputValue}
          />
          <Input
            classLabel='formLabel'
            classInput='formInput'
            type='text'
            name='name'
            value={form.name}
            text='NOME'
            placeholder='Digite o nome do(a) funcionário(a)'
            onChange={addInputValue}
          />
          <Input
            classLabel='formLabel'
            classInput='formInput'
            type='text'
            name='email'
            value={form.email}
            text='EMAIL'
            placeholder='Digite o email'
            onChange={addInputValue}
          />
          <Input
            classLabel='formLabel'
            classInput='formInput'
            type='password'
            name='password'
            value={form.password}
            text='SENHA'
            placeholder='Digite a senha'
            onChange={addInputValue}
          />
          <Input
            classLabel='formLabel'
            classInput='formInput'
            type='password'
            name='passwordRepeat'
            value={form.passwordRepeat}
            text='REPITA A SENHA'
            placeholder='Digite a senha novamente'
            onChange={addInputValue}
          />
          {message && <Text class='formMessage'>{message}</Text>}
          <Grid customClass='registerButton'>
            <Button type='button' customClass='cancellButton' onClick={() => {
              cleanForm();
              setMessage('');
            }} role='clean'>
              LIMPAR
            </Button>
            <Button type='submit' customClass='confirmButton' onClick={sendForm} role='register'>
              CADASTRAR
            </Button>
          </Grid>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
