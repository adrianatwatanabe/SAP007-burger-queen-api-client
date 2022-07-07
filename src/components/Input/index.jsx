import styles from './style.module.css';

const Input = ({ classLabel, text, type, name, classInput, value, placeholder, onChange, ...props }) => {
  return (
    <label className={styles[classLabel]}>
      <p>{text}</p>
      <input
        type={type}
        name={name}
        className={styles[classInput]}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};

export default Input;
