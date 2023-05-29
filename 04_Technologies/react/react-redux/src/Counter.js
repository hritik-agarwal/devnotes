import {useDispatch, useSelector} from 'react-redux'
import {
  decrement,
  increment,
  incrementAsync,
  incrementAsync2,
} from './store/counterSlice'

function Counter() {
  const dispatch = useDispatch()
  const value = useSelector(state => state.counter.value)

  const incrementAsync3 = () => {
    setTimeout(() => dispatch(increment(1)), 1000)
  }

  return (
    <>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync(1))}>
        IncrementAsync
      </button>
      <button onClick={() => dispatch(incrementAsync2(1))}>
        IncrementAsync2
      </button>
      <button onClick={() => incrementAsync3(1)}>IncrementAsync3</button>
    </>
  )
}
export default Counter
