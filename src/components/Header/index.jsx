import Logo from '../Logo';
import styles from './style.module.css';

const Header = ({ text }) => {
  return (
    <header id={styles.containerHeaderGeneral}>
      <div id={styles.containerHeader}>
        <Logo customClass='loginHeader' />
        <p className={styles.headerText}>{text}</p>
      </div>
    </header>
  );
}

export default Header;
