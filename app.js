const redux = require('redux')
const createStore = redux.createStore
const readline = require('readline-sync')



const initialState = {
    counter: 0
}

let value = readline.question("Please Enter a Value: ")

// reducer 
const rootReducer = (state = initialState, action) => {
    if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if (action.type === 'SUBTRACT') {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
}

//store
const store = createStore(rootReducer)
console.log(store.getState())

//Subscription
store.subscribe(() => {
    console.log('[subscription]', store.getState())
})


//Dispatching actions
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'SUBTRACT', value: value })