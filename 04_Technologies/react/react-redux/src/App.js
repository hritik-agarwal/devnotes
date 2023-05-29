import {Provider} from 'react-redux'
import store from './store'
import Counter from './Counter'
import Fruits from './Fruits'

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Fruits />
    </Provider>
  )
}

export default App
