import React from 'react';
import Grid from '../Grid';
import Text from '../Text';
import Button from '../Button';
import './style.css';

const FoodCard = (props) => {
  const changeCount = '';

  return (
    <li class='food-card'>
      <Grid class='text-container'>
        <Text class='title'>{props.text}</Text>
        <Text class='text text-complement'>{'+ ' + props.complement}</Text>
      </Grid>
      <Grid class='counter-container'>
        <Button type='submit' class='button-counter counter-red' onClick={changeCount} role='counter'>-</Button>
        <Text class='text text-counter'>{props.counter}</Text>
        <Button type='submit' class='button-counter counter-green' onClick={changeCount} role='counter'>+</Button>
        <Text class='text text-total'>{'R$' + props.total}</Text>
      </Grid>
    </li>
  );
};

export default FoodCard;
