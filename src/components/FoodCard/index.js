import React from 'react';
import Grid from '../Grid';
import Text from '../Text';
import Button from '../Button';
import './style.css';

const FoodCard = (props) => {
  return (
    <li class='food-card'>
      <Grid class='text-container'>
        {props.flavor ? 
         <Text class='title'>{props.text} {props.flavor.toUpperCase()}</Text> :
         <Text class='title'>{props.text}</Text>
        }
        {props.complement &&
          <Text class='text text-complement'>{props.complement}</Text>
        }
      </Grid>
      <Grid class='counter-container'>
        <Button type='button' class='button-counter counter-red' onClick={props.removeCounter} role='counter'>-</Button>
        <Text class='text text-counter'>{props.counter}</Text>
        <Button type='button' class='button-counter counter-green' onClick={props.addCounter} role='counter'>+</Button>
        <Text class='text text-total'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.price)}</Text>
      </Grid>
    </li>
  );
};

export default FoodCard;
