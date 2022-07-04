import styles from './style.module.css';

const Grid = ({ customClass, children }) => {
  return (
    <section className={styles[customClass]} role="grid">
      {children}
    </section>
  )
}

export default Grid;
