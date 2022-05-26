import './login.css';
import logo from '../../img/logo-burger-queen.png';

function Login() {
  return (
    <>
      <form className="form-user">
        <img src={logo} alt='Logotipo BURGER Queen' className="logo" />
        <label htmlFor="login-email" className="form-label">
          EMAIL
          <input type="email" id="login-email" className="form-input" placeholder="Digite seu email" required/>
        </label>
        <label htmlFor="login-password" className="form-label">
          SENHA
          <input type="password" id="login-password" className="form-input" placeholder="Digite sua senha" required/>
        </label>
        <p id="message"></p>
        <button type="submit" id="button-login" className="button">
          ENTRAR
        </button>
      </form>
    </>
  );
}

export default Login;
