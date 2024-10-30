import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './Redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of Cakes - {props.numberOfCakes}</h2>
        <button onClick={props.buyCake} >Buy Cake</button>
    </div>
  )
}


const mapStateToProp = state => {
  return{
    numberOfCakes: state.numberOfCakes
  }
}

const mapDispatchToProp = dispatch =>{
  return{
    buyCake: () => dispatch(buyCake())
  }
}
export default connect( 
  mapStateToProp, 
  mapDispatchToProp 
) (CakeContainer)