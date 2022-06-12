import React from 'react';

const useForm = () => {

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
        return 'As duas senhas não coincidem. Digite-as novamente!';
      } else {
        return '';
      }
    } else if (form.email && validatedEmail && form.password) {
      return '';
    } else if(!form.email || !form.password) {
      return 'Preencha todos os campos!';
    } else {
      return 'Preencha o campo de email corretamente!';
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
    checked.forEach((radio, position) => { return radio.checked === true ? index = position : null});
    checked[index].checked = false;
    checked[index].classList.remove('input-radio:checked:before');
  }

  return { addInputValue, validatedForm, cleanForm, form };
}

export default useForm;
