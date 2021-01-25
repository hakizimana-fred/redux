// creating a store

function createStore() {

    let state
    let listeners = []

    const subscribe = (listener) => {
        listeners.push(listener)
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