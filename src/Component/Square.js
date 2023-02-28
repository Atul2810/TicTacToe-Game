import React from 'react'
import './Square.css'
function Square(props) {
  return (
    <div className='cell' onClick={props.onClick}>
      <h5>{props.val}</h5>
    </div>
  )
  
}

export default Square
