import React from 'react';
import './style.css';

const Grid = (props) => {
  return (
    <section className={props.class} role="grid">
      {props.children}
    </section>
  )
}

export default Grid;
