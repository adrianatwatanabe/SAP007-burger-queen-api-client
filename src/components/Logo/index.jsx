import logoBurgerQueen from '../../img/logo-burger-queen.png';
import styles from './style.module.css';

const Logo = ({ customClass }) => {
  return (
    <picture>
      <img src={logoBurgerQueen} alt='Logotipo BURGER Queen' className={styles[customClass]} />
    </picture>
  );
}

export default Logo;
