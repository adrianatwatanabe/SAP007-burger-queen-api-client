import Text from '../Text';
import Input from '../Input';
import Button from '../Button';
import styles from './style.module.css';

const OrderTable = ({ flavor, name, complement, counter, price, subTotal, changeCounter, deleteProduct }) => {
  return (
    <li className={styles.foodCard}>
      {flavor && complement ? (
        <Text customClass='title'>
          {name} {' - ' + flavor.toUpperCase()} {'- com adicional de ' + complement.toUpperCase()}
        </Text>
      ) : null}
      {flavor && complement === null ? (
        <Text customClass='title'>
          {name} {' - ' + flavor.toUpperCase()}
        </Text>
      ) : null}
      {flavor === null && complement === null ? (
        <Text customClass='title'>
          {name}
        </Text>
      ) : null}
      <Input
        type='number'
        value={counter}
        onChange={changeCounter}
      />
      <Text>{price}</Text>
      <Text>{subTotal}</Text>
      <Button type='button' onClick={deleteProduct}>Excluir Pedido</Button>
    </li>
  );
};

export default OrderTable;