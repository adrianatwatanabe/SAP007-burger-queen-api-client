import React from 'react'
import './style.css';

const Container = ({children}) => {
  return (
    <section id='container'>
      {children}
    </section>
  )
}

export default Container;
