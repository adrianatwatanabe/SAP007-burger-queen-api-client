import styles from './style.module.css';

const Text = ({ customClass, children }) => {
  return (
    <p className={styles[customClass]}>
      {children}
    </p>
  );
}

export default Text;