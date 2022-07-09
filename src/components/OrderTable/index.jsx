import Text from '../Text';
import Input from '../Input';
import Button from '../Button';
import Grid from '../Grid';
import styles from './style.module.css';

import iconDelete from '../../img/icons/delete.png';

const OrderTable = ({ flavor, name, complement, counter, price, subTotal, changeCounter, deleteProduct }) => {
  return (
    <li className={styles.listOrders}>
      {flavor && complement ? (
        <Text customClass='tableText'>
          {name} {' - ' + flavor.toUpperCase()} {'- com adicional de ' + complement.toUpperCase()}
        </Text>
      ) : null}
      {flavor && complement === null ? (
        <Text customClass='tableText'>
          {name} {' - ' + flavor.toUpperCase()}
        </Text>
      ) : null}
      {flavor === null && complement === null ? (
        <Text customClass='tableText'>
          {name}
        </Text>
      ) : null}
      <Grid customClass='orderTableInfo'>
        <Input
          type='number'
          value={counter}
          onChange={changeCounter}
          classInput='orderTableInput'
        />
        <Text customClass='tablePrice'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</Text>
        <Text customClass='tablePrice'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subTotal)}</Text>
        <Button type='button' onClick={deleteProduct} customClass='deleteProduct'>
          <img src={iconDelete} alt='Ícone de excluir pedido' className={styles.icon} />
        </Button>
      </Grid>
    </li>
  );
};

export default OrderTable;