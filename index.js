const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

// Actions

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIcecream() {
    return{
        type: BUY_ICECREAM
    }
}


//Reducers

// const initialState = {
//     numOfCake: 10,
//     numOfIcecream: 20
// }

const initialCakeState = {
    numOfCake: 10
}

const initialIcecreamState = {
    numOfIcecream: 20
} 



// const reducer = ( state= initialState, action ) => {
//     switch ( action.type ) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCake: state.numOfCake - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIcecream: state.numOfIcecream - 1
//         }
//         default : return state
//     }
// }


const cakeReducer = ( state= initialCakeState, action ) => {
    switch ( action.type ) {
        case BUY_CAKE: return {
            ...state,
            numOfCake: state.numOfCake - 1
        }
        default : return state
    }
}

const icecreamReducer = ( state= initialIcecreamState, action ) => {
    switch ( action.type ) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecream: state.numOfIcecream - 1
        }
        default : return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})


const store = createStore( rootReducer)

console.log('Initial State',store.getState())

const unsubscribe = store.subscribe( () => console.log('Updated State',store.getState()))

store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyCake())

unsubscribe()
