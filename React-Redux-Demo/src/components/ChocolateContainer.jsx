import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyChocolate } from './Redux'

function ChocolateContainer() {
    const numOfChocolates = useSelector( state => state.chocolate.numOfChocolates)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>No of Chocolates - {numOfChocolates} </h2>
        <button onClick={() => dispatch(buyChocolate())}>Buy Chocolate</button>
    </div>
  )
}

export default ChocolateContainer