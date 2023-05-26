import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import fruitsSlice from './fruitsSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    fruits: fruitsSlice,
  },
})

export default store
