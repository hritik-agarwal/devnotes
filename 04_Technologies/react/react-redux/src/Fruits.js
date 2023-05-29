import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {add, remove} from './store/fruitsSlice'

function Fruits() {
  const dispatch = useDispatch()
  const [newFruit, setNewFruit] = useState('')
  const fruits = useSelector(state => state.fruits)

  const addNewFruit = () => {
    dispatch(add(newFruit))
    setNewFruit('')
  }

  const removeFruit = () => {
    dispatch(remove(newFruit))
    setNewFruit('')
  }

  return (
    <div>
      <p>
        Fruits:{' '}
        {fruits.map(fruit => (
          <span>
            {fruit}
            {'  '}
          </span>
        ))}
      </p>
      <input
        type='text'
        value={newFruit}
        onChange={e => setNewFruit(e.target.value)}
      />
      <button onClick={addNewFruit}>Add Fruit</button>
      <button onClick={removeFruit}>Remove Fruit</button>
    </div>
  )
}
export default Fruits
