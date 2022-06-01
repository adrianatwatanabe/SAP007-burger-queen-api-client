import Input from '../../components/Input';
import Radio from '../../components/Radio';
import Button from '../../components/Button';
import Header from '../../components/Header';
import useForm from '../../services/useForm';
import './style.css';

function Register() {
  const { addInputValue, sendForm, cleanForm, form, role, error, setRole } = useForm();
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
