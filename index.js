function todos(state = [], action) {
    if (action.type === 'ADD_TODO') {
        return state.concat([action.todo])
    }

    return state
}


// creating a store

function createStore() {

    let state
    let listeners = []

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    }
    const getState = () => state

    return {
        getState,
        subscribe
    }

}

const store = createStore()

store.subscribe(() => {
    console.log('The state is ', store.getState())
})

store.subscribe(() => {
    console.log('The store changed')
})