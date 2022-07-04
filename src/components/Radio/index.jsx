import styles from './style.module.css';

const Radio = ({ classText, classContainerRadio, textGeneral, options, classLabel, classInput, name, onChange, text }) => {
  return (
    <p className={styles[classText]}>
      {textGeneral}
      <div className={styles[classContainerRadio]}>
        {options && options.map((option, index) => (
          <label className={styles[classLabel]} key={option}>
            <input
              type='radio'
              role={option}
              className={styles[classInput]}
              name={name}
              value={option}
              onChange={onChange}
            />
            {text[index]}
          </label>
        ))}
      </div>
    </p>
  );
};

export default Radio;
