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

    const getState = () => state
    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = todos(state, action)
        listeners.forEach(listener => listener())
    }

    return {
        getState,
        subscribe,
        dispatch
    }

}

const store = createStore()

store.subscribe(() => {
    console.log('The state is ', store.getState())
})

store.subscribe(() => {
    console.log('The store changed')
})



// Quiz
function quizReducer(state = [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }], action) {

    if (action.type === 'DELETE_FLAVOR') {
        return state.filter(f => f.flavor !== flavor)
    }
    return state
}

