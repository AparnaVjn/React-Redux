import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from './Redux'

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of IceCreams - {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream} >Buy Ice Cream</button>
    </div>
  )
}


const mapStateToProp = state => {
  return{
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProp = dispatch =>{
  return{
    buyIceCream: () => dispatch(buyIceCream())
  }
}
export default connect( 
  mapStateToProp, 
  mapDispatchToProp 
) (IceCreamContainer)