import React from 'react';
import './style.css';

const TableContainer = (props) => {
  return (
    <div className={props.class}>
      {props.children}
    </div>
  )
}

export default TableContainer
