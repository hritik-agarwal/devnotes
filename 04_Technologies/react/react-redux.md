# Redux

## Redux and its Need

- Redux is global state management for javascript applications.
- It helps in managing "global" state - state that is needed across many parts of your application.

## Important concepts in Redux

### Action and Action Creator

- Action is an object that describes something that happened in the application.
- It contains a _type_ field that gives action a descriptive name (domain/eventName) and a _payload_ field that contains additional information about the event.
- An action creator is a function that creates and returns an action object.

```js
// action object
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk',
}

// action creator
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text,
  }
}
```

### Reducers

- A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state.

```js
const initialState = {value: 0}

function counterReducer(state = initialState, action) {
  if (action.type === 'counter/increment') {
    return {
      ...state,
      value: state.value + 1,
    }
  }
  return state
}
```

There are 3 rules for a reducer function to follow :-

1. New state value should be based on state and action arguments only.
2. Existing state must not be modified and instead they will be copied to create a new state and then modify its value.
3. They must not do any asynchronous logic, calculate random values, or cause other "side effects"

### Store, Dispatch and Selectors

- The current redux application state lives in an object called the _store_ .
- The store has a method called _dispatch_ which is only way to updates the store.
- Selectors are functions that extract specific information from a store value.

```js
import {configureStore} from '@reduxjs/toolkit'

// Creating a store (it takes a reducer function)
const store = configureStore({reducer: counterReducer})

// Fetching data from store
console.log(store.getState()) // {value: 1}

// Updating the store (it takes an action object)
store.dispatch({type: 'counter/increment'})

// Fetching specific value from store
const selectCounterValue = state => state.value
const currentValue = selectCounterValue(store.getState())
console.log(currentValue) // 1
```

## Setting Up Redux

There are 3 tools to setup redux in react :-

1. Redux Tookit (npm i @reduxjs/toolkit)
2. React Redux (npm i react-redux)
3. Redux DevTools (chrome extension)

### Important Functions

1. ReduxToolkit (@reduxjs/toolkit)
   1. createSlice
   2. configureStore (react-redux)
2. ReactRedux
   1. Provider
   2. useSelector
   3. useDispatch

### Using Redux

1. Create slice and expose reducer and actions

```js
import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload || 1
    },
    decrement: (state, action) => {
      state.value -= action.payload || 1
    },
  },
})

export default counterSlice.reducer
export const {increment, decrement} = counterSlice.actions
```

2. Create store and pass it all the reducers

```js
import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})

export default store
```

3. Wrap root component in Provider and pass it store

```js
import {Provider} from 'react-redux'
import store from './store'
import Counter from './Counter'

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App
```

4. Fetch state values using useSelector
5. Update state values using useDispatch and passing them appropriate action with payload

```js
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment} from './store/counterSlice'

function Counter() {
  const dispatch = useDispatch()
  const value = useSelector(state => state.counter.value)
  return (
    <>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </>
  )
}
export default Counter
```

## Async Code in Redux

### Creating Thunk Function Directly

- To use async login redux, we use a special redux function called thunk.
- To create this, we create an outside creator function, which creates and returns the thunk function
- Then the inside thunk function, gets dispatch and getState as arguments & implements the async logic

```js
export const incrementAsync = amount => {
  return async function incrementAsyncThunk(dispatch) {
    const data = await fetch('uri')
    cons result = data.json()
    dispatch(increment(amount))
  }
}

// dispatching async action as normal action
dispatch(incrementAsync(5))
```

### Using createAsyncThunk Function

```js
// Create async function using createAsyncThunk
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async () => {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1)
      }, 1000)
    })
    return result
  }
)

// Use extraReducers and builder to handle async actions
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle',
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload
    },
    decrement: (state, action) => {
      state.value -= action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        state.status = 'error'
      })
  },
})

// dispatching async action as normal action
dispatch(incrementAsync(5))
```
