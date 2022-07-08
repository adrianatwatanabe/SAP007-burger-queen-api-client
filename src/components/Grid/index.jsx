import styles from './style.module.css';

const Grid = ({ customClass, children }) => {
  return (
    <div className={styles[customClass]} role="grid">
      {children}
    </div>
  )
}

export default Grid;
