import Grid from '../Grid';
import Text from '../Text';
import Button from '../Button';
import styles from './style.module.css';

const FoodCard = ({ flavor, text, complement, removeCounter, addCounter, counter, price }) => {
  return (
    <li className={styles.foodCard}>
      <Grid customClass='textContainer'>
        {flavor ?
          <Text customClass='title'>{text} {flavor.toUpperCase()}</Text> :
          <Text customClass='title'>{text}</Text>
        }
        {complement &&
          <Text customClass='textComplement'>{complement}</Text>
        }
      </Grid>
      <Grid customClass='counterContainer'>
        <Button type='button' onClick={removeCounter} role='counter' customClass='counterRed'>-</Button>
        <Text customClass='textCounter'>{counter}</Text>
        <Button type='button' onClick={addCounter} role='counter' customClass='counterGreen'>+</Button>
        <Text customClass='textTotal'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</Text>
      </Grid >
    </li >
  );
};

export default FoodCard;
