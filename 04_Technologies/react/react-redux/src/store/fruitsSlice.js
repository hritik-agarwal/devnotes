import {createSlice} from '@reduxjs/toolkit'

const fruitsSlice = createSlice({
  name: 'fruits',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
    remove: (state, action) => {
      return state.filter(fruit => fruit !== action.payload)
    },
  },
})

export default fruitsSlice.reducer
export const {add, remove} = fruitsSlice.actions
