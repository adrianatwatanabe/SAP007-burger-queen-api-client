import styles from './style.module.css';

const Input = ({ classLabel, text, type, name, classInput, value, placeholder, onChange }) => {
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
      />
    </label>
  );
};

export default Input;
