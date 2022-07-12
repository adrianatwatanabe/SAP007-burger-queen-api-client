import React from 'react';

const useEmployees = () => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [modal, setModal] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
    role: '',
  });

  const addInputValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const validatedForm = () => {
    const regex = /[\w.\-+]+@[\w-]+\.[\w-.]/gi;
    const validatedEmail = regex.test(form.email);
    if (form.name && form.email && validatedEmail && form.password && form.passwordRepeat && form.role) {
      if (form.password !== form.passwordRepeat) {
        setErrorMessage('As duas senhas não coincidem. Digite-as novamente!');
        setModal(true);
        return false;
      }
    } else if (form.email === '' || form.password === '' || form.passwordRepeat === '' || form.name === '' || form.role === '') {
      setErrorMessage('Preencha todos os campos!');
      setModal(true);
      return false;
    } else if (!validatedEmail) {
      setErrorMessage('Preencha o campo de email corretamente!');
      setModal(true);
      return false;
    } else {
      return true;
    }
  }

  const cleanForm = () => {
    setForm({
      name: '',
      email: '',
      password: '',
      passwordRepeat: '',
      role: '',
    });
    const checked = window.document.querySelectorAll('[name="role"]');
    let index = 0;
    checked.forEach((radio, position) => { return radio.checked === true ? index = position : null });
    checked[index].checked = false;
    checked[index].classList.remove('inputRadio:checked:before');
  }

  return { addInputValue, validatedForm, cleanForm, form, setForm, setErrorMessage, errorMessage, setModal, modal };
}

export default useEmployees;
