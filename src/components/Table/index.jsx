import styles from './style.module.css';

const Table = ({ children }) => {
  return (
    <li className={styles.foodCard}>
      {children}
    </li>
  );
};

export default Table;