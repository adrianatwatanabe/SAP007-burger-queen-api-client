import React from 'react'
import './style.css';

const Container = ({children}) => {
  return (
    <section id='container-general'>
      <div id='container'>
        {children}
      </div>
    </section>
  )
}

export default Container;
