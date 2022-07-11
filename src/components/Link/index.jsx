import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

const Link = ({ href, customClass, children }) => {
  return (
    <NavLink to={href} className={styles[customClass]} role="link">
      {children}
    </NavLink>
  );
}

export default Link;