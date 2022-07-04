import styles from './style.module.css';

const Container = ({ containerGeneral, container, children }) => {
  return (
    <section className={styles[containerGeneral]}>
      <section className={styles[container]}>
        {children}
      </section>
    </section >
  )
}

export default Container;
