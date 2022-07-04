import styles from './style.module.css';

const Form = ({ customClass, children }) => {
  return (
    <form className={styles[customClass]}>
      {children}
    </form>
  )
}

export default Form
