import React from 'react';

function useForm() {

  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });
  const [role, setRole] = React.useState('');
  const [error, setError] = React.useState('');

  function addInputValue(e) {
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
    } else if (form.email && validatedEmail && form.password) {
      setError(null);
      return true;
    } else if(!form.email || !form.password) {
      setError('Preencha todos os campos!');
      return false;
    } else {
      setError('Preencha o campo de email corretamente!');
      return false;
    }
  }

  function cleanForm() {
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

  return { addInputValue, validatedForm, cleanForm, form, role, error, setRole, setError };
}

export default useForm;
