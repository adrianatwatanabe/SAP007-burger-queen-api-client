import styles from './style.module.css';

const Input = ({ classLabel, text, type, classInput, value, onChange, ...props }) => {
  return (
    <label className={styles[classLabel]}>
      <p>{text}</p>
      <input
        type={type}
        className={styles[classInput]}
        value={value}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};

export default Input;
