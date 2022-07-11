import styles from './style.module.css';

const Button = ({ type, customClass, children, ...props }) => {
  return (
    <button
      type={type}
      className={styles[customClass]}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
