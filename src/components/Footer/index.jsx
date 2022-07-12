import { useLocation, useNavigate } from 'react-router-dom';
import { getUserData, deleteUserData } from '../../services/storage';
import OrdersList from '../../assets/icons/orders-list.png';
import FinalizeOrders from '../../assets/icons/finalize-orders.png';
import OrdersDelivered from '../../assets/icons/orders-delivered.png';
import Logout from '../../assets/icons/logout.png';
import Back from '../../assets/icons/back.png';
import Button from '../Button';
import Link from '../Link';
import styles from './style.module.css';

const Footer = () => {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    deleteUserData();
    navigate('/');
  };

  const location = useLocation();
  let waiterIcons = getUserData()[2] === 'waiter';
  let adminIcons = getUserData()[2] === 'admin';

  return (
    <nav id={styles.footerMenu}>
      <ul className={styles.listContainer}>
        <Button type='submit' customClass='iconButton' onClick={logout} title="logout">
          <img src={Logout} alt='Sair da conta BURGER Queen' className={styles.icon} />
        </Button>
        {waiterIcons ? (
          <>
            <Link href='/delivery' customClass='iconButton'>
              <img src={OrdersDelivered} alt='Ir para a seção de Pedidos Entregues' className={styles.icon} />
            </Link>
            <Link href='/finish' customClass='iconButton'>
              <img src={FinalizeOrders} alt='Ir para a seção de Finalizar Pedidos' className={styles.icon} />
            </Link>
            <Link href='/orders' customClass='iconButton'>
              <img src={OrdersList} alt='Ir para a seção de Pedidos' className={styles.icon} />
            </Link>
          </>
        ) : null}
        {adminIcons !== (location.pathname === '/menu') ? (
          <Link href='/menu' customClass='iconButton'>
            <img src={Back} alt='Voltar para o Menu' className={styles.icon} />
          </Link>
        ) : null}
      </ul>
    </nav>
  );
};

export default Footer;
