import React from 'react';
import Grid from '../Grid';
import Text from '../Text';
import Button from '../Button';
import Radio from '../Radio';
import './style.css';

const FoodCard = (props) => {
  const changeCount = '';

  return (
    <Grid class='food-card'>
      <Text class='text'>{props.text}</Text>
      <Grid class='counter-container'>
        <Button type='button' class='counter counter-green' onClick={changeCount} role='counter'>
          +
        </Button>
        <Text class='counter'>{props.counter}</Text>
        <Button type='button' class='counter counter-red' onClick={changeCount} role='counter'>
          -
        </Button>
        <Text class='total'>{props.total}</Text>
      </Grid>
      <Radio />
      <Grid class='ingredient-container'>
        <Button type='button' class='ingredient add-cheese' onClick={changeCount} role='cheese'>
          Mais Queijo
        </Button>
        <Button type='button' class='ingredient add-egg' onClick={changeCount} role='egg'>
          Mais Ovo
        </Button>
      </Grid>
    </Grid>
  );
};

export default FoodCard;
