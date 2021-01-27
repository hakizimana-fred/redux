function createStore(reducer) {

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
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    return {
        getState,
        subscribe,
        dispatch
    }

}

function todos(state = [], action) {
    if (action.type === 'ADD_TODO') {
        return state.concat([action.todo])
    } else if (action.type === 'REMOVE_TODO') {
        return state.filter(todo => todo.id !== action.id)
    } else if (action.type === 'TOGGLE_TODO') {
        return state.map(todo => todo.id !== action.id ? todo :
            Object.assign({}, todo, { complete: !todo.complete })
        )
    } else {
        return state
    }

}

function goals(state = [], action) {

    switch (action.type) {
        case 'ADD_GOAL':
            return state.concat([action.goal])
        case 'REMOVE_GOAL':
            return state.filter(goal => goal.id !== action.id)
        default:
            return state

    }
}

function app(state = {}, action) {
    return {
        todos: todos(state.todos, action),
        goals: todos(state.goals, action)
    }
}

// creating a store
const store = createStore(app)
store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 1,
        name: 'read a book',
        complete: false
    }
})

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 1,
        name: 'watch a movie',
        complete: false
    }
})

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 3,
        name: 'borrow a book',
        complete: false
    }
})


store.dispatch({
    type: 'REMOVE_TODO',
    id: 3,
})




// Quiz

function quizReducer(state = [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }], action) {

    if (action.type === 'DELETE_FLAVOR') {
        return state.filter(f => f.flavor !== flavor)
    }
    return state
}
