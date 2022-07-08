import Grid from '../Grid';
import Text from '../Text';
import Input from '../Input';
import Button from '../Button';
import styles from './style.module.css';

const OrderTable = ({ flavor, name, complement, counter, price, subTotal, changeCounter, deleteProduct }) => {
  return (
    <li className={styles.foodCard}>
      <Grid customClass='tableContainer'>
        {flavor ? (
          <Text customClass='title'>
            {name} - {flavor.toUpperCase()}
          </Text>
        ) : (
          <Text customClass='title'>{name}</Text>
        )}
        {complement && <Text customClass='textComplement'>{complement}</Text>}
      </Grid>
      <Input
        type='number'
        value={counter}
        onChange={changeCounter}
      />
      <Text>{price}</Text>
      <Text>{subTotal}</Text>
      <Button type='button' onClick={deleteProduct} >Excluir Pedido</Button>
    </li>
  );
};

export default OrderTable;